import { Link } from "wouter";
import { useCanonical } from "@/hooks/useCanonical";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, CheckCircle, ChevronRight, Clock, FileSearch, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export type BlogSection = {
  h2: string;
  paragraphs?: string[];
  items?: string[];
  after?: string[];
};

export type BlogArticleProps = {
  path: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  category: string;
  crumb: string;
  h1: string;
  date: string;
  readTime: string;
  intro: string;
  callout: string;
  sections: BlogSection[];
  sources: { label: string; url: string }[];
  ctaTitle: string;
  ctaText: string;
  whatsappMsg: string;
  service: { href: string; label: string };
  relatedArticles: { href: string; label: string }[];
};

export default function BlogArticle(p: BlogArticleProps) {
  useCanonical(p.path, {
    title: p.seoTitle,
    description: p.seoDescription,
    image: p.image,
    type: "article",
  });

  return (
    <div className="min-h-screen bg-cream">
      <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-dark/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo_gr.png" alt="GR Paisagismo & Consultoria Ambiental" className="h-10 w-auto" />
            <span className="text-white font-cinzel text-base tracking-wide hidden sm:block">
              GR <span className="text-gold">Paisagismo & Consultoria Ambiental</span>
            </span>
          </Link>
          <Button asChild variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </Button>
        </div>
      </header>

      <section className="pt-24 pb-8 bg-gradient-to-b from-emerald-dark to-emerald-dark/90">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-gold">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-gold">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold">{p.crumb}</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="bg-gold text-emerald-dark px-4 py-1 rounded-full text-sm font-medium">{p.category}</span>
            <h1 className="text-3xl md:text-5xl font-cinzel text-white mt-6 mb-6 leading-tight">{p.h1}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />GR Paisagismo & Consultoria Ambiental</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{p.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{p.readTime} de leitura</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-4 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-4xl mx-auto">
          <img src={p.image} alt={p.imageAlt} className="w-full h-[420px] object-cover object-center rounded-2xl shadow-xl" />
        </motion.div>
      </div>

      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">{p.intro}</p>

            <div className="bg-white border border-gold/20 rounded-2xl p-6 mb-10 shadow-sm">
              <div className="flex gap-3 items-start">
                <FileSearch className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed m-0">{p.callout}</p>
              </div>
            </div>

            {p.sections.map((s) => (
              <section key={s.h2}>
                <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">{s.h2}</h2>
                {s.paragraphs?.map((t) => (
                  <p key={t} className="text-gray-700 leading-relaxed mb-6">{t}</p>
                ))}
                {s.items && (
                  <ul className="space-y-3 text-gray-700 mb-8">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.after?.map((t) => (
                  <p key={t} className="text-gray-700 leading-relaxed mb-6">{t}</p>
                ))}
              </section>
            ))}

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-12">
              <h3 className="text-xl font-cinzel text-emerald-dark mb-4">{p.ctaTitle}</h3>
              <p className="text-gray-700 mb-4">{p.ctaText}</p>
              <div className="flex flex-wrap gap-3">
                <a href={`https://wa.me/5511950583364?text=${encodeURIComponent(p.whatsappMsg)}`} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gold hover:bg-gold/90 text-emerald-dark font-semibold">Solicitar avaliação pelo WhatsApp</Button>
                </a>
                <Button asChild variant="outline" className="border-emerald-dark/30 text-emerald-dark">
                  <Link href={p.service.href}>{p.service.label}</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-cinzel text-emerald-dark mb-3">Leia também</h3>
              <ul className="space-y-2 text-gray-700">
                {p.relatedArticles.map((r) => (
                  <li key={r.href}><Link href={r.href} className="text-emerald-dark underline hover:text-gold">{r.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="mt-10 text-sm text-gray-500">
              {p.sources.length > 0 && (
                <>
              <p className="mb-2">Fontes oficiais consultadas:</p>
              <ul className="space-y-1">
                {p.sources.map((s) => (
                  <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">{s.label}</a></li>
                ))}
              </ul>
                </>
              )}
              <p className="mt-4">
                Conteúdo informativo e geral. Regras, exigências e procedimentos variam conforme o município, o tipo de vegetação e a legislação vigente, e a decisão final cabe sempre ao órgão ambiental competente. Não substitui a análise técnica do seu caso.
              </p>
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-emerald-dark py-8 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="text-white/60 hover:text-gold transition-colors">Voltar ao Site</Link>
        </div>
      </footer>
    </div>
  );
}
