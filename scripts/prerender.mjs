// Pré-renderiza cada rota do site em HTML estático após o `vite build`.
// Assim o Google recebe, já no HTML inicial, title, description, canonical,
// h1, texto e links internos próprios de cada página (e não o shell vazio do SPA).
//
// Falha de forma "suave": se não houver Chromium disponível no ambiente de build,
// avisa e segue com o site SPA normal (não quebra o deploy).
import { chromium } from "playwright-core";
import { createServer } from "node:http";
import { readFile, writeFile, mkdir, copyFile, access } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist", "public");
const ORIGIN = "https://www.rezendepaisagismo.com.br";

const sitemap = await readFile(path.join(root, "client", "public", "sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (m) => new URL(m[1]).pathname.replace(/\/+$/, "") || "/"
);

const mime = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml",
  ".ico": "image/x-icon", ".xml": "application/xml", ".txt": "text/plain", ".webp": "image/webp",
};

// Guarda o shell original do SPA (usado como fallback para URLs desconhecidas/404).
const indexPath = path.join(dist, "index.html");
const shellPath = path.join(dist, "shell.html");
if (!existsSync(shellPath)) await copyFile(indexPath, shellPath);

const server = createServer(async (req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = path.join(dist, urlPath);
  try {
    if (!path.extname(file)) throw new Error("spa");
    await access(file);
  } catch {
    file = shellPath; // fallback SPA sempre com o shell limpo
  }
  const body = await readFile(file);
  res.writeHead(200, { "Content-Type": mime[path.extname(file)] || "application/octet-stream" });
  res.end(body);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

// Chromium: usa CHROMIUM_PATH se definido; senão o binário do @sparticuz/chromium
// (feito para rodar em ambientes serverless/CI como a Vercel).
let executablePath = process.env.CHROMIUM_PATH;
let launchArgs = ["--no-sandbox"];
if (!executablePath) {
  try {
    const { default: sparticuz } = await import("@sparticuz/chromium");
    executablePath = await sparticuz.executablePath();
    launchArgs = sparticuz.args;
  } catch (e) {
    console.warn("[prerender] @sparticuz/chromium indisponível:", String(e).split("\n")[0]);
  }
}

let browser;
try {
  browser = await chromium.launch({ executablePath, args: launchArgs, headless: true });
} catch (e) {
  console.warn("[prerender] Chromium indisponível — pulando pré-renderização.\n", String(e).split("\n")[0]);
  server.close();
  process.exit(0);
}

let ok = 0;
const problems = [];
// Uma única aba para todas as rotas: o Chromium em modo single-process (sparticuz)
// fecha inteiro quando uma aba é fechada.
const page = await browser.newPage();
for (const route of routes) {
  try {
    await page.goto(base + route, { waitUntil: "networkidle" });
    const expected = ORIGIN + route;
    await page.waitForFunction(
      (c) => document.querySelector('link[rel="canonical"]')?.getAttribute('href') === c,
      expected, { timeout: 15000 }
    );
    await page.waitForTimeout(400); // deixa animações/efeitos assentarem
    // Remove o <script type=module> de analytics injetado dinamicamente, se houver.
    await page.evaluate(() => document.querySelectorAll("script[data-website-id]").forEach((s) => s.remove()));
    const html = "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));
    const out = route === "/" ? indexPath : path.join(dist, route.slice(1), "index.html");
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, html);
    const info = await page.evaluate(() => ({
      h1: document.querySelectorAll("h1").length,
      links: document.querySelectorAll("a[href^='/']").length,
    }));
    if (info.h1 !== 1) problems.push(`${route}: ${info.h1} <h1>`);
    console.log(`[prerender] ${route}  h1=${info.h1} links=${info.links}`);
    ok++;
  } catch (e) {
    problems.push(`${route}: ${String(e).split("\n")[0]}`);
  }
}
await browser.close();
server.close();
console.log(`[prerender] ${ok}/${routes.length} páginas geradas.`);
if (problems.length) console.warn("[prerender] atenção:\n  - " + problems.join("\n  - "));
