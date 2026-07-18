import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceQuickNav from "@/components/ServiceQuickNav";
import { useCanonical } from "@/hooks/useCanonical";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Droplets,
  Leaf,
  Lightbulb,
  MessageCircle,
  Phone,
  Shovel,
  Sprout,
  TreePine,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const services = [
  {
    category: "planejamento",
    icon: Leaf,
    title: "Projeto Paisagístico",
    description:
      "Planejamento completo de áreas verdes, com definição de conceito, espécies, organização dos espaços e documentação para implantação.",
    highlights: [
      "Levantamento e análise do local",
      "Definição de espécies e composição",
      "Plantas e memorial descritivo",
    ],
    link: "/servicos/projetos",
  },
  {
    category: "planejamento",
    icon: MessageCircle,
    title: "Consultoria Paisagística",
    description:
      "Orientação técnica para quem precisa organizar ideias, escolher espécies ou tomar decisões antes de iniciar melhorias no jardim.",
    highlights: [
      "Avaliação das necessidades do espaço",
      "Recomendações técnicas personalizadas",
      "Direcionamento para as próximas etapas",
    ],
  },
  {
    category: "implantacao",
    icon: Shovel,
    title: "Plantio e Implantação",
    description:
      "Execução planejada do projeto paisagístico, incluindo preparação, organização dos materiais e implantação das espécies previstas.",
    highlights: [
      "Preparação da área de plantio",
      "Implantação conforme o projeto",
      "Orientações iniciais de manejo",
    ],
    link: "/servicos/execucao",
  },
  {
    category: "implantacao",
    icon: TreePine,
    title: "Jardins Verticais",
    description:
      "Soluções verdes para muros, fachadas e ambientes com espaço reduzido, considerando iluminação, manutenção e espécies adequadas.",
    highlights: [
      "Avaliação do local e da estrutura",
      "Seleção de espécies compatíveis",
      "Planejamento da instalação",
    ],
  },
  {
    category: "implantacao",
    icon: Droplets,
    title: "Irrigação Automatizada",
    description:
      "Planejamento de irrigação para distribuir água de forma eficiente e facilitar os cuidados cotidianos com o jardim.",
    highlights: [
      "Definição dos setores de irrigação",
      "Adequação às necessidades das plantas",
      "Orientação de uso e programação",
    ],
  },
  {
    category: "implantacao",
    icon: Lightbulb,
    title: "Iluminação de Jardins",
    description:
      "Planejamento da iluminação para valorizar caminhos, espécies e elementos paisagísticos, com atenção à funcionalidade do espaço.",
    highlights: [
      "Definição de pontos de destaque",
      "Valorização do jardim no período noturno",
      "Integração com o projeto paisagístico",
    ],
  },
  {
    category: "conservacao",
    icon: Sprout,
    title: "Manutenção de Jardins",
    description:
      "Cuidados periódicos para preservar a saúde, o desenvolvimento e a apresentação do jardim após sua implantação.",
    highlights: [
      "Podas e manejo das espécies",
      "Adubação e cuidados com o solo",
      "Plano de manutenção conforme a necessidade",
    ],
    link: "/servicos/manutencao",
  },
];

export default function ServicosPaisagismo() {
  useCanonical("/servicos/paisagismo", {
    title: "Serviços Paisagísticos | GR Paisagismo & Consultoria Ambiental",
    description:
      "Projetos paisagísticos, plantio, implantação, jardins verticais, irrigação, iluminação e manutenção, com sede em São Roque e atendimento em todo o Estado de São Paulo.",
    image: "/images/novo-jardim-tropical.jpg",
  });

  const requestQuote = (service?: string) => {
    const message = service
      ? `Olá! Gostaria de solicitar uma avaliação para: ${service}.`
      : "Olá! Gostaria de conversar sobre um serviço de paisagismo.";
    window.open(
      `https://wa.me/5511950583364?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const renderCards = (category: string) =>
    services
      .filter((service) => service.category === category)
      .map((service) => (
        <motion.div
          key={service.title}
          variants={fadeInUp}
          className="w-full md:w-[calc(50%_-_0.875rem)] lg:w-[calc(33.333%_-_1.2rem)]"
        >
          <Card className="h-full bg-white border-gold/20 hover:border-gold/50 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-7 flex flex-col h-full">
              <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-forest" />
              </div>
              <h3 className="font-display text-xl text-forest mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2 mb-7">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-sm text-foreground/70">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-2">
                {service.link && (
                  <Link
                    href={service.link}
                    className="inline-flex items-center justify-center text-forest hover:text-gold transition-colors text-sm font-medium py-2"
                  >
                    Ver detalhes <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                )}
                <Button
                  variant="outline"
                  className="border-forest/20 text-forest hover:bg-forest hover:text-white"
                  onClick={() => requestQuote(service.title)}
                >
                  Consultar este serviço
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ));

  const ServiceSection = ({
    id,
    category,
    eyebrow,
    title,
    description,
    nextId,
    nextLabel,
  }: {
    id: string;
    category: string;
    eyebrow: string;
    title: string;
    description: string;
    nextId?: string;
    nextLabel?: string;
  }) => (
    <div id={id} className="scroll-mt-44 mb-24 last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <p className="text-gold font-medium mb-2">{eyebrow}</p>
        <h2 className="font-display text-3xl md:text-4xl text-forest mb-5">
          {title}
        </h2>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-wrap justify-center gap-7"
      >
        {renderCards(category)}
      </motion.div>
      {nextId && nextLabel && (
        <motion.button
          type="button"
          onClick={() => scrollTo(nextId)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 flex flex-col items-center gap-1 text-forest/65 hover:text-gold transition-colors"
        >
          <span className="text-sm font-medium">Veja também: {nextLabel}</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.span>
        </motion.button>
      )}
    </div>
  );

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
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-36 pb-24 bg-forest overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/novo-jardim-tropical.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/50" />
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
              <Leaf className="w-4 h-4 text-gold" />
              <span className="text-white/90 text-sm">Planejamento • Implantação • Manutenção</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Serviços <span className="text-gold">Paisagísticos</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-9"
            >
              Soluções para planejar, implantar e cuidar de áreas verdes com
              funcionalidade, identidade e escolhas adequadas a cada espaço.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-forest font-semibold px-8 py-6"
                onClick={() => requestQuote()}
              >
                <Phone className="w-5 h-5 mr-2" />
                Solicitar avaliação
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6"
                onClick={() => scrollTo("planejamento")}
              >
                Conhecer os serviços
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ServiceQuickNav
        activeArea="paisagismo"
        sections={[
          { id: "planejamento", label: "Planejamento" },
          { id: "implantacao", label: "Implantação" },
          { id: "conservacao", label: "Manutenção" },
        ]}
      />

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <ServiceSection
            id="planejamento"
            category="planejamento"
            eyebrow="Comece com clareza"
            title="Planejamento e Consultoria"
            description="Definição técnica e estética antes da implantação, considerando as características do local e as necessidades de uso."
            nextId="implantacao"
            nextLabel="Implantação e Soluções Complementares"
          />
          <ServiceSection
            id="implantacao"
            category="implantacao"
            eyebrow="Do papel ao jardim"
            title="Implantação e Soluções Complementares"
            description="Execução do paisagismo e recursos que apoiam o funcionamento, a manutenção e a valorização das áreas verdes."
            nextId="conservacao"
            nextLabel="Manutenção e Desenvolvimento"
          />
          <ServiceSection
            id="conservacao"
            category="conservacao"
            eyebrow="Cuidado contínuo"
            title="Manutenção e Desenvolvimento"
            description="Acompanhamento dos cuidados necessários para preservar o jardim após a implantação."
          />
        </div>
      </section>

      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-forest mb-5">
            Vamos conversar sobre seu espaço?
          </h2>
          <p className="text-forest/75 max-w-2xl mx-auto mb-8">
            Envie a cidade, algumas fotos e uma breve descrição do que pretende
            transformar. A partir disso, avaliamos o serviço mais adequado.
          </p>
          <Button
            size="lg"
            className="bg-forest hover:bg-forest-light text-white px-8 py-6"
            onClick={() => requestQuote()}
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
