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

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/servicos/projetos"} component={Projetos} />
      <Route path={"/servicos/execucao"} component={Execucao} />
      <Route path={"/servicos/manutencao"} component={Manutencao} />
      <Route path={"/galeria"} component={Galeria} />
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
