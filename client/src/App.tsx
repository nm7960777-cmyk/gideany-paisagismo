import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Execucao from "./pages/Execucao";
import Manutencao from "./pages/Manutencao";
import Galeria from "./pages/Galeria";
import Blog from "./pages/Blog";
import BlogJardimVertical from "./pages/BlogJardimVertical";
import BlogHortaApartamento from "./pages/BlogHortaApartamento";
import BlogJardimPequeno from "./pages/BlogJardimPequeno";
import FAQ from "./pages/FAQ";
import Links from "./pages/Links";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/servicos/projetos"} component={Projetos} />
      <Route path={"/servicos/execucao"} component={Execucao} />
      <Route path={"/servicos/manutencao"} component={Manutencao} />
      <Route path={"/galeria"} component={Galeria} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/jardim-vertical"} component={BlogJardimVertical} />
      <Route path={"/blog/horta-apartamento"} component={BlogHortaApartamento} />
      <Route path={"/blog/jardim-pequeno"} component={BlogJardimPequeno} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/links"} component={Links} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
