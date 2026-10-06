import { Button } from "@/components/ui/button";
import ServiceQuickNav from "@/components/ServiceQuickNav";
import { useCanonical } from "@/hooks/useCanonical";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  FileText,
  MapPin,
  Phone,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export interface ServiceLandingProps {
  /** Caminho da página, ex.: "/servicos/licenciamento-ambiental-cetesb" */
  path: string;
  seoTitle: string;
  seoDescription: string;
  /** Imagem do topo e do compartilhamento (caminho em /images) */
  image: string;
  badge: string;
  h1Before: string;
  h1Highlight: string;
  intro: string;
  /** Nome do serviço usado na mensagem de WhatsApp */
  whatsappService: string;
  whenTitle: string;
  whenIntro: string;
  whenItems: { title: string; text: string }[];
  includesTitle: string;
  includes: string[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  areasTitle: string;
  areasText: string;
  areas: string[];
  faq: { q: string; a: string }[];
  related: { href: string; label: string }[];
  /** Experiência real (opcional): trabalhos já realizados, sem identificar clientes */
  experience?: { title: string; text: string }[];
  /** Aviso final (limites e responsabilidade técnica) */
  note: string;
}

const WHATSAPP = "5511950583364";

export default function ServiceLanding(props: ServiceLandingProps) {
  useCanonical(props.path, {
    title: props.seoTitle,
    description: props.seoDescription,
    image: props.image,
  });

  // Dados estruturados (FAQ) no <head>, removidos ao sair da página.
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageLd = "faq";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: props.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [props.faq]);

  const requestQuote = () => {
    const text = `Olá! Gostaria de solicitar uma avaliação sobre: ${props.whatsappService}.`;
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-forest/95 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo_gr.png"
                alt="GR Paisagismo"
                className="h-12 w-auto"
              />
              <span className="font-display text-lg text-white hidden sm:block">
                GR <span className="text-gold">Paisagismo & Consultoria Ambiental</span>
              </span>
            </Link>
            <Button
              asChild
              variant="ghost"
              className="text-white hover:text-gold hover:bg-transparent"
            >
              <Link href="/servicos/consultoria-ambiental">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Serviços ambientais
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-36 pb-24 bg-forest overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${props.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/95 to-forest/60" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-2 mb-6"
            >
              <FileText className="w-4 h-4 text-gold" />
              <span className="text-white/90 text-sm">{props.badge}</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              {props.h1Before} <span className="text-gold">{props.h1Highlight}</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-9"
            >
              {props.intro}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-forest font-semibold px-8 py-6"
                onClick={requestQuote}
              >
                <Phone className="w-5 h-5 mr-2" />
                Solicitar avaliação
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6"
                onClick={() => scrollTo("quando-precisa")}
              >
                Entender o serviço
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ServiceQuickNav
        activeArea="ambiental"
        sections={[
          { id: "quando-precisa", label: "Quando é necessário" },
          { id: "como-funciona", label: "Como funciona" },
          { id: "perguntas", label: "Perguntas frequentes" },
        ]}
      />

      <section id="quando-precisa" className="scroll-mt-44 py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl text-forest mb-5">
              {props.whenTitle}
            </h2>
            <p className="text-foreground/70 leading-relaxed">{props.whenIntro}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {props.whenItems.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gold/20 rounded-2xl p-7 shadow-sm"
              >
                <h3 className="font-display text-xl text-forest mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              {props.includesTitle}
            </h2>
            <ul className="space-y-4">
              {props.includes.map((item) => (
                <li key={item} className="flex gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div id="como-funciona" className="scroll-mt-44">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              {props.stepsTitle}
            </h2>
            <ol className="space-y-5">
              {props.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold font-display text-forest">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {props.experience && props.experience.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl text-forest text-center mb-3">
              Experiência em campo
            </h2>
            <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-10">
              Trabalhos que já realizamos, descritos sem identificar clientes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {props.experience.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gold/20 bg-white p-7 shadow-sm"
                >
                  <h3 className="font-display text-xl text-forest mb-3">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <MapPin className="w-6 h-6 text-gold" />
            <h2 className="font-display text-3xl text-forest">{props.areasTitle}</h2>
          </div>
          <p className="text-foreground/70 leading-relaxed mb-8">{props.areasText}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {props.areas.map((city) => (
              <span
                key={city}
                className="rounded-full border border-forest/15 bg-white px-4 py-2 text-sm text-forest"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="perguntas" className="scroll-mt-44 py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-forest text-center mb-10">
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            {props.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-lg border border-forest/15 bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-forest">
                  {item.q}
                  <Plus className="w-5 h-5 flex-shrink-0 text-gold transition-transform group-open:rotate-45" />
                </summary>
                <p className="px-6 pb-5 text-foreground/70 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-foreground/55 leading-relaxed">{props.note}</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-2xl text-forest mb-6 text-center">
            Outros serviços ambientais
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {props.related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-5 py-3 text-sm font-medium text-forest hover:border-gold hover:text-gold transition-colors"
              >
                {link.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-forest mb-5">
            Conte um pouco sobre sua demanda
          </h2>
          <p className="text-forest/75 max-w-2xl mx-auto mb-8">
            Informe a cidade, o tipo de imóvel ou atividade e qual documento ou
            exigência recebeu. A partir disso, avaliamos o melhor caminho.
          </p>
          <Button
            size="lg"
            className="bg-forest hover:bg-forest-light text-white px-8 py-6"
            onClick={requestQuote}
          >
            <Phone className="w-5 h-5 mr-2" />
            Falar pelo WhatsApp
          </Button>
        </div>
      </section>

      <footer className="bg-forest-light border-t border-gold/20 py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-white/55 text-sm text-center md:text-left">
            © 2026 GR Paisagismo & Consultoria Ambiental.
          </p>
          <p className="text-gold text-sm">Atuação com responsabilidade técnica</p>
        </div>
      </footer>
    </div>
  );
}
