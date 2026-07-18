import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceQuickNav from "@/components/ServiceQuickNav";
import { useCanonical } from "@/hooks/useCanonical";
import {
  ArrowLeft,
  Building2,
  CheckCircle,
  ChevronDown,
  ClipboardCheck,
  FileSearch,
  FileText,
  Leaf,
  MapPin,
  PawPrint,
  Phone,
  Scissors,
  TreePine,
  Trees,
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
    category: "estudos",
    icon: FileSearch,
    title: "RAP — Relatório Ambiental Preliminar",
    image: "/images/ambiental-rap-medicao-dap.jpeg",
    imageAlt: "Medição do diâmetro de árvore durante levantamento ambiental em campo",
    imagePosition: "center 58%",
    description:
      "Estudo ambiental que reúne a caracterização do empreendimento e da área, a análise dos impactos previstos e as medidas ambientais aplicáveis, conforme as exigências do órgão licenciador.",
    highlights: [
      "Caracterização da área e do empreendimento",
      "Diagnóstico dos temas ambientais aplicáveis",
      "Identificação de impactos e medidas de controle",
    ],
  },
  {
    category: "estudos",
    icon: Building2,
    title: "EIV — Estudo de Impacto de Vizinhança",
    image: "/images/ambiental-eiv-area-estudo.jpeg",
    imageAlt: "Área rural com árvores observada durante análise ambiental",
    imagePosition: "center 55%",
    description:
      "Estudo dos efeitos positivos e negativos de um empreendimento ou atividade sobre a qualidade de vida da população em sua área de influência, conforme a legislação municipal.",
    highlights: [
      "Uso do solo, infraestrutura e serviços urbanos",
      "Mobilidade, tráfego e dinâmica da vizinhança",
      "Paisagem, impactos e medidas de adequação",
    ],
  },
  {
    category: "arborizacao",
    icon: Trees,
    title: "Inventário e Levantamento Cadastral Arbóreo",
    image: "/images/levantamento-gps-sem-etiqueta.jpeg",
    imageAlt: "Profissional realizando localização de exemplar arbóreo com GPS em campo",
    imagePosition: "left 70%",
    description:
      "Identificação e cadastro dos indivíduos arbóreos existentes na área, com medições, localização e avaliação das condições observadas em campo.",
    highlights: [
      "Identificação e cadastro dos exemplares",
      "Dados dendrométricos e condições fitossanitárias",
      "Registro fotográfico e localização dos indivíduos",
    ],
  },
  {
    category: "arborizacao",
    icon: Scissors,
    title: "Parecer para Manejo ou Supressão de Árvores",
    image: "/images/ambiental-acompanhamento-supressao.jpeg",
    imageAlt: "Registro de acompanhamento de supressão arbórea em área verde",
    imagePosition: "center 58%",
    description:
      "Avaliação técnica das condições dos exemplares para fundamentar solicitações de manejo ou supressão. A autorização é emitida exclusivamente pelo órgão competente.",
    highlights: [
      "Vistoria e diagnóstico dos exemplares",
      "Justificativa e recomendações técnicas",
      "Documentação para instrução do pedido",
    ],
  },
  {
    category: "arborizacao",
    icon: TreePine,
    title: "Plano de Compensação Arbórea ou Vegetal",
    image: "/images/ambiental-compensacao-arborea.jpeg",
    imageAlt: "Exemplar arbóreo em paisagem rural durante avaliação de campo",
    imagePosition: "center 58%",
    description:
      "Definição das medidas compensatórias relacionadas ao manejo de árvores ou vegetação, conforme a legislação e as exigências estabelecidas para cada caso.",
    highlights: [
      "Definição de espécies e quantitativos",
      "Diretrizes de plantio e manutenção",
      "Cronograma e critérios de acompanhamento",
    ],
  },
  {
    category: "arborizacao",
    icon: Leaf,
    title: "Caracterização de Vegetação",
    image: "/images/ambiental-caracterizacao-vegetacao.jpeg",
    imageAlt: "Exemplar arbóreo e cobertura vegetal observados em levantamento de campo",
    imagePosition: "center 48%",
    description:
      "Levantamento técnico para descrever a cobertura vegetal, a composição de espécies, a fitofisionomia e as condições observadas na área avaliada.",
    highlights: [
      "Vistoria e levantamento de campo",
      "Identificação de espécies e tipos de cobertura",
      "Relatório técnico com registros da área",
    ],
  },
  {
    category: "arborizacao",
    icon: ClipboardCheck,
    title: "Monitoramento de Plantio — TCRA e TCA",
    image: "/images/ambiental-monitoramento-plantio.jpeg",
    imageAlt: "Exemplar arbóreo jovem registrado em área de acompanhamento ambiental",
    imagePosition: "center 55%",
    description:
      "Acompanhamento periódico de plantios compensatórios para documentar sua implantação, evolução e atendimento aos compromissos ambientais assumidos.",
    highlights: [
      "Avaliação de sobrevivência e desenvolvimento",
      "Registros fotográficos e acompanhamento periódico",
      "Recomendações de manutenção e reposição",
    ],
  },
  {
    category: "estudos",
    icon: PawPrint,
    title: "Caracterização de Fauna para Licenciamento",
    image: "/images/ambiental-vestigio-fauna.jpeg",
    imageAlt: "Vestígio de fauna observado no solo durante atividade de campo",
    imagePosition: "center 62%",
    description:
      "Estudo técnico da fauna com base em dados secundários e, quando exigido, levantamentos de campo, seguindo o escopo e as orientações aplicáveis ao processo.",
    highlights: [
      "Definição dos grupos faunísticos e da metodologia",
      "Dados bibliográficos e levantamentos de campo, quando aplicáveis",
      "Diagnóstico e relatório técnico para o processo",
    ],
  },
];

const serviceAreas = [
  "São Roque",
  "Sorocaba",
  "Cotia",
  "Vargem Grande Paulista",
  "Itapecerica da Serra",
  "São Lourenço da Serra",
  "Embu das Artes",
  "Taboão da Serra",
  "Araçariguama",
  "Mairinque",
  "Alumínio",
  "Itu",
  "Salto de Pirapora",
  "Votorantim",
];

export default function ServicosAmbientais() {
  useCanonical("/servicos/consultoria-ambiental", {
    title: "Estudos e Consultoria Ambiental | GR Paisagismo",
    description:
      "RAP, EIV, caracterização de fauna, inventário arbóreo, vegetação, compensação e monitoramento ambiental, com sede em São Roque e atendimento em todo o Estado de São Paulo.",
    image: "/images/ambiental-hero-campo-dap.jpeg",
  });

  const requestQuote = (service?: string) => {
    const text = service
      ? `Olá! Gostaria de solicitar uma avaliação para o serviço: ${service}.`
      : "Olá! Gostaria de conversar sobre um serviço ambiental.";
    window.open(
      `https://wa.me/5511950583364?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const renderServiceCards = (category: string) =>
    services
      .filter((service) => service.category === category)
      .sort((a, b) => a.title.localeCompare(b.title, "pt-BR"))
      .map((service) => (
        <motion.div
          key={service.title}
          variants={fadeInUp}
          className="w-full md:w-[calc(50%_-_0.875rem)] lg:w-[calc(33.333%_-_1.2rem)]"
        >
          <Card className="group h-full overflow-hidden bg-white border-gold/20 hover:border-gold/50 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden bg-forest/10">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: service.imagePosition }}
                />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-forest/90 shadow-lg backdrop-blur-sm">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
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
                <Button
                  variant="outline"
                  className="mt-auto border-forest/20 text-forest hover:bg-forest hover:text-white"
                  onClick={() => requestQuote(service.title)}
                >
                  Consultar este serviço
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ));

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
          style={{
            backgroundImage: "url('/images/ambiental-hero-campo-dap.jpeg')",
            backgroundPosition: "center 62%",
          }}
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
              <span className="text-white/90 text-sm">Estudos • Consultoria • Arborização</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Serviços <span className="text-gold">Ambientais</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-9"
            >
              Suporte técnico para diferentes demandas ambientais, da orientação
              inicial à elaboração de estudos, levantamentos e documentos técnicos.
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
                onClick={() => scrollTo("estudos-ambientais")}
              >
                Conhecer os serviços
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ServiceQuickNav
        activeArea="ambiental"
        sections={[
          { id: "estudos-ambientais", label: "Estudos Ambientais" },
          { id: "arborizacao-vegetacao", label: "Arborização e Vegetação" },
        ]}
      />

      <section id="estudos-ambientais" className="scroll-mt-44 py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-gold font-medium mb-2">Soluções técnicas</p>
            <h2 className="font-display text-3xl md:text-4xl text-forest mb-5">
              Estudos e Consultoria Ambiental
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Estudos, relatórios e diagnósticos elaborados conforme o escopo, as
              características do empreendimento e as exigências do órgão competente.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-7"
          >
            {renderServiceCards("estudos")}
          </motion.div>

          <motion.button
            type="button"
            onClick={() => scrollTo("arborizacao-vegetacao")}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 flex flex-col items-center gap-1 text-forest/65 hover:text-gold transition-colors"
          >
            <span className="text-sm font-medium">Veja também: Arborização e Vegetação</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.span>
          </motion.button>

          <motion.div
            id="arborizacao-vegetacao"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-44 text-center max-w-3xl mx-auto mt-24 mb-12"
          >
            <p className="text-gold font-medium mb-2">Da análise à implantação</p>
            <h2 className="font-display text-3xl md:text-4xl text-forest mb-5">
              Arborização e Vegetação
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Levantamentos, pareceres, planos e acompanhamento técnico para
              árvores, cobertura vegetal e plantios compensatórios.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-7"
          >
            {renderServiceCards("arborizacao")}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-forest">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-medium mb-2">Atuação responsável</p>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                Responsabilidade técnica do início ao fim
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Todos os trabalhos são conduzidos com acompanhamento técnico, desde
                a análise inicial até a entrega. Para cada demanda, definimos o escopo,
                a metodologia e os profissionais habilitados, respeitando as atribuições
                e o conselho de classe de cada área.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <PawPrint className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-white/80">
                    Equipe técnica estruturada de acordo com a complexidade e as exigências de cada processo.
                  </p>
                </div>
                <div className="flex gap-3">
                  <FileText className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-white/80">
                    Estudos e documentos elaborados por profissionais habilitados em suas áreas de atuação.
                  </p>
                </div>
                <div className="flex gap-3">
                  <ClipboardCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-white/80">
                    Proposta preparada após a análise inicial do caso e dos requisitos do órgão competente.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-forest-light border border-gold/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-gold" />
                <h3 className="font-display text-2xl text-white">Região de atendimento</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {serviceAreas.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-white/75 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/55 text-sm mt-6 pt-6 border-t border-gold/10">
                Outras cidades do Estado de São Paulo podem ser atendidas mediante
                avaliação de disponibilidade e logística.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-forest mb-5">
            Conte um pouco sobre sua demanda
          </h2>
          <p className="text-forest/75 max-w-2xl mx-auto mb-8">
            Informe a cidade, o tipo de empreendimento, a área aproximada e qual
            documento ou exigência recebeu. A partir disso, avaliamos o melhor caminho.
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
