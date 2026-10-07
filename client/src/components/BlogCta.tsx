import { Link } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * Bloco de chamada para ação padrão dos artigos do blog.
 * Para mudar o visual ou o comportamento do CTA em todos os artigos, edite só este arquivo.
 */
export const WHATSAPP_NUMBER = "5511950583364";

type BlogCtaProps = {
  title: string;
  text: string;
  whatsappMsg: string;
  buttonLabel?: string;
  service?: { href: string; label: string };
};

export default function BlogCta({
  title,
  text,
  whatsappMsg,
  buttonLabel = "Solicitar avaliação pelo WhatsApp",
  service,
}: BlogCtaProps) {
  return (
    <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-12">
      <h3 className="text-xl font-cinzel text-emerald-dark mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{text}</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gold hover:bg-gold/90 text-emerald-dark font-semibold">{buttonLabel}</Button>
        </a>
        {service && (
          <Button asChild variant="outline" className="border-emerald-dark/30 text-emerald-dark">
            <Link href={service.href}>{service.label}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
