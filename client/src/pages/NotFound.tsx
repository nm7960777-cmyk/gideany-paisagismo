import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCanonical } from "@/hooks/useCanonical";
import { AlertCircle, ArrowLeft, Leaf } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  useCanonical("/404", {
    title: "Página não encontrada | GR Paisagismo",
    description: "A página solicitada não foi encontrada.",
    noIndex: true,
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-cream px-4 py-12">
      <Link href="/" className="mb-8 flex items-center gap-3" aria-label="Voltar à página inicial">
        <img
          src="/images/logo_gr.png"
          alt="GR Paisagismo & Consultoria Ambiental"
          className="h-12 w-auto"
        />
        <span className="font-display text-forest hidden sm:block">
          GR <span className="text-gold">Paisagismo & Consultoria Ambiental</span>
        </span>
      </Link>

      <Card className="w-full max-w-lg shadow-xl border border-gold/20 bg-white">
        <CardContent className="px-8 py-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gold/15 flex items-center justify-center">
              <AlertCircle className="h-11 w-11 text-gold" />
            </div>
          </div>

          <p className="text-gold font-semibold tracking-widest mb-2">ERRO 404</p>
          <h1 className="font-display text-3xl text-forest mb-4">
            Página não encontrada
          </h1>

          <p className="text-foreground/65 mb-8 leading-relaxed">
            O endereço pode ter sido alterado ou a página não está mais disponível.
            Você pode voltar ao início ou conhecer nossos serviços.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-forest hover:bg-forest-light text-white px-6">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao início
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-gold/40 text-forest hover:bg-gold/10">
              <Link href="/servicos/paisagismo">
                <Leaf className="w-4 h-4 mr-2" />
                Ver serviços
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
