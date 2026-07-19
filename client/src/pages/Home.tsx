/**
 * DESIGN SYSTEM: Tropical Luxe
 * - Primary: Emerald Green (#0d5c4a)
 * - Accent: Gold (#d4af37)
 * - Typography: Cinzel (display) + Montserrat (body)
 * - Style: Luxury tropical with Art Deco influences
 */

import { useEffect, useState } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Leaf,
  FileText,
  MessageCircle,
  Award,
  Users,
  CheckCircle,
  Instagram,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { toast } from "sonner";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cityLabels: Record<string, string> = {
  "sao-roque": "São Roque",
  cotia: "Cotia",
  sorocaba: "Sorocaba",
  "vargem-grande": "Vargem Grande Paulista",
  itapecerica: "Itapecerica da Serra",
  "sao-lourenco": "São Lourenço da Serra",
  embu: "Embu das Artes",
  taboao: "Taboão da Serra",
  aracariguama: "Araçariguama",
  mairinque: "Mairinque",
  aluminio: "Alumínio",
  itu: "Itu",
  "salto-pirapora": "Salto de Pirapora",
  votorantim: "Votorantim",
  outra: "Outra localidade",
};

const serviceLabels: Record<string, string> = {
  projeto: "Projeto paisagístico",
  execucao: "Plantio e implantação",
  manutencao: "Manutenção de jardins",
  consultoria: "Consultoria ambiental",
  rap: "RAP — Relatório Ambiental Preliminar",
  eiv: "EIV — Estudo de Impacto de Vizinhança",
  "inventario-arboreo": "Inventário ou levantamento arbóreo",
  vegetacao: "Caracterização de vegetação",
  supressao: "Parecer para manejo ou supressão de árvores",
  compensacao: "Plano de compensação arbórea ou vegetal",
  monitoramento: "Monitoramento de plantio — TCRA/TCA",
  fauna: "Caracterização de fauna para licenciamento",
  outro: "Outro serviço",
};

export default function Home() {
  useCanonical('/', {
    title: "GR Paisagismo & Consultoria Ambiental | Paisagismo em São Roque SP",
    description:
      "Projetos paisagísticos, arborização, vegetação, RAP, EIV e consultoria ambiental com sede em São Roque e atendimento em todo o Estado de São Paulo.",
  });

  useEffect(() => {
    const sectionId = window.location.hash.replace("#", "");
    if (!sectionId) return;

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView();
    });
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    servico: "",
    mensagem: "",
  });

  const testimonials = [
    {
      name: "Henrique Soares",
      location: "São Roque - SP",
      text: "Excelente trabalho! O projeto foi entregue no prazo e o resultado ficou como esperado.",
      initial: "H",
    },
    {
      name: "João Fonseca",
      location: "Avaré - SP",
      text: "Procurei atendimento para entender uma demanda de licenciamento e RAP. A orientação foi clara, objetiva e me ajudou a organizar os próximos passos do processo.",
      initial: "J",
    },
    {
      name: "Patrícia Souza",
      location: "Sorocaba - SP",
      text: "Contratei para fazer o paisagismo da minha casa nova e não me arrependo. Atendimento personalizado e muita dedicação.",
      initial: "P",
    },
  ];

  const services = [
    {
      icon: Leaf,
      title: "Serviços Paisagísticos",
      description:
        "Projetos, plantio e implantação, manutenção, jardins verticais, irrigação e iluminação para áreas residenciais e comerciais.",
      link: "/servicos/paisagismo",
    },
    {
      icon: FileText,
      title: "Serviços Ambientais",
      description:
        "RAP, EIV, caracterização de fauna, arborização, vegetação e suporte técnico para diferentes demandas ambientais.",
      link: "/servicos/consultoria-ambiental",
    },
  ];

  const projects = [
    {
      image: "/images/novo-area-piscina.jpg",
      title: "Jardim com Piscina",
      description: "Projeto residencial",
    },
    {
      image: "/images/novo-jardim-deck.jpg",
      title: "Jardim com Deck",
      description: "Projeto residencial",
    },
    {
      image: "/images/antes-depois-novo.jpg",
      title: "Transformação Completa",
      description: "Antes e depois",
    },
  ];

  const blogPosts = [
    {
      category: "Jardim Vertical",
      date: "10 Jan 2026",
      title: "Como Fazer um Jardim Vertical em Casa: Passo a Passo",
      excerpt:
        "Aprenda a criar um jardim vertical do zero, mesmo em espaços pequenos. Dicas de plantas, estruturas e manutenção...",
      link: "/blog/jardim-vertical",
      image: "/images/blog-jardim-vertical-home-novo.jpg",
    },
    {
      category: "Horta em Apartamento",
      date: "08 Jan 2026",
      title: "Horta em Apartamento: O Guia Completo",
      excerpt:
        "Cultivar uma horta em apartamento é uma realidade acessível e gratificante, mesmo com espaço limitado.",
      link: "/blog/horta-apartamento",
      image: "/images/blog-horta-apartamento-principal-novo.jpg",
    },
    {
      category: "Jardim Pequeno",
      date: "05 Jan 2026",
      title: "Jardim Pequeno em Casa: 10 Ideias Simples de Canteiros para Transformar Seu Espaço",
      excerpt:
        "Mesmo em áreas compactas, o planejamento pode aproveitar melhor o espaço e criar um jardim agradável e funcional.",
      link: "/blog/jardim-pequeno",
      image: "/images/blog-jardim-pequeno-principal-novo.jpg",
    },
  ];

  const handleWhatsAppSubmit = () => {
    const phoneDigits = formData.whatsapp.replace(/\D/g, "");

    if (!formData.nome.trim() || phoneDigits.length < 10 || !formData.cidade || !formData.servico) {
      toast.error("Preencha nome, WhatsApp, cidade e tipo de serviço.");
      return;
    }

    const message = [
      `Olá! Meu nome é ${formData.nome.trim()}.`,
      `Meu WhatsApp: ${formData.whatsapp.trim()}`,
      `Cidade: ${cityLabels[formData.cidade] ?? formData.cidade}`,
      `Serviço de interesse: ${serviceLabels[formData.servico] ?? formData.servico}`,
      formData.mensagem.trim() ? `Mensagem: ${formData.mensagem.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    window.open(
      `https://wa.me/5511950583364?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-forest/95 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#inicio" aria-label="Ir para o início" className="flex items-center gap-3">
              <img
                src="/images/logo_gr.png"
                alt="GR Logo"
                className="h-12 w-auto"
              />
              <span className="font-display text-xl text-white hidden sm:block">
                GR <span className="text-gold">Paisagismo & Consultoria Ambiental</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center gap-5">
              <a
                href="#inicio"
                className="text-white/80 hover:text-gold transition-colors font-medium"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-white/80 hover:text-gold transition-colors font-medium"
              >
                Sobre
              </a>
              <Link
                href="/servicos/paisagismo"
                className="text-white/80 hover:text-gold transition-colors font-medium"
              >
                Paisagismo
              </Link>
              <Link
                href="/servicos/consultoria-ambiental"
                className="text-white/80 hover:text-gold transition-colors font-medium"
              >
                Ambiental
              </Link>
              <a
                href="#galeria"
                className="text-white/80 hover:text-gold transition-colors font-medium"
              >
                Galeria
              </a>
              <a
                href="#blog"
                className="text-white/80 hover:text-gold transition-colors font-medium"
              >
                Blog
              </a>
              <Link
                href="/faq"
                className="text-white/80 hover:text-gold transition-colors font-medium"
              >
                FAQ
              </Link>
              <Button
                className="bg-gold hover:bg-gold/90 text-forest font-semibold px-6"
                onClick={() =>
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Orçamento Grátis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="xl:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="menu-mobile"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="xl:hidden bg-forest border-t border-gold/20"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-white/80 hover:text-gold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-white/80 hover:text-gold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <Link
                href="/servicos/paisagismo"
                className="text-white/80 hover:text-gold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços Paisagísticos
              </Link>
              <Link
                href="/servicos/consultoria-ambiental"
                className="text-white/80 hover:text-gold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consultoria Ambiental
              </Link>
              <a
                href="#galeria"
                className="text-white/80 hover:text-gold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galeria
              </a>
              <a
                href="#blog"
                className="text-white/80 hover:text-gold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
              <Link
                href="/faq"
                className="text-white/80 hover:text-gold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button
                className="bg-gold hover:bg-gold/90 text-forest font-semibold w-full mt-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Orçamento Grátis
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/novo-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-6"
            >
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-white/90 text-sm">
                Sede em São Roque • Atendimento em todo o Estado de São Paulo
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Paisagismo e soluções ambientais com{" "}
              <span className="text-gold">responsabilidade técnica</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl"
            >
              Paisagismo, arborização e consultoria ambiental integrados ao
              planejamento, à implantação e ao acompanhamento técnico de cada área.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-forest font-semibold px-8 py-6 text-lg"
                onClick={() =>
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Solicitar avaliação
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() =>
                  document
                    .getElementById("galeria")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver projetos de paisagismo
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6 items-center"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-white/80 text-sm">Responsabilidade técnica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="text-white/80 text-sm">Soluções personalizadas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-white/80 text-sm">
                  Atuação Multidisciplinar
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Technical Badge */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="bg-forest/90 border border-gold/30 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-gold font-display text-lg">Equipe multidisciplinar</p>
            <p className="text-white/60 text-sm">Competências técnicas reunidas para cada demanda</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center max-w-4xl mx-auto mb-12">
              <p className="text-gold font-medium mb-2">Sobre nós</p>
              <h2 className="font-display text-3xl md:text-4xl text-forest mb-6">
                Soluções que unem natureza, engenharia e planejamento
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-5">
                A GR Paisagismo é uma empresa especializada em paisagismo e
                consultoria ambiental. Desenvolvemos soluções para o uso responsável
                do território, integrando conhecimento técnico, planejamento e
                valorização da paisagem.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-5">
                Nossa atuação abrange estudos e diagnósticos ambientais, arborização,
                projetos paisagísticos, recursos de geotecnologia, implantação e
                acompanhamento técnico de áreas verdes. Cada serviço é estruturado
                conforme as características da área, os objetivos da demanda e os
                requisitos aplicáveis.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-5">
                Essa visão integrada conecta a leitura ambiental do território ao
                planejamento e à execução, permitindo desenvolver soluções seguras,
                viáveis e compatíveis com a legislação vigente.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-5">
                Cada projeto é conduzido com responsabilidade técnica, visão
                multidisciplinar e compromisso com resultados duradouros,
                considerando as características ambientais, os objetivos do cliente
                e a realidade de cada empreendimento.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Com sede em São Roque, nossa atuação abrange todo o Estado de São
                Paulo, com possibilidade de atendimento em outras regiões do país,
                conforme a disponibilidade e a logística de cada projeto.
              </p>
            </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Award className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="font-semibold text-forest">Equipe técnica</p>
                  <p className="text-sm text-foreground/60">Profissionais habilitados</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <MessageCircle className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="font-semibold text-forest">Soluções</p>
                  <p className="text-sm text-foreground/60">Personalizadas</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="font-semibold text-forest">Atuação</p>
                  <p className="text-sm text-foreground/60">Multidisciplinar</p>
                </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-forest">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium mb-2">Nossos Serviços</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Duas frentes, uma visão integrada
            </h2>
            <p className="text-white/65 max-w-2xl mx-auto">
              Escolha a área que melhor corresponde à sua necessidade.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-forest-light border-gold/20 h-full hover:border-gold/50 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gold/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                      <service.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="font-display text-xl text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link href={service.link} className="inline-flex items-center text-gold hover:text-gold/80 transition-colors">
                      Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Portfolio Section */}
      <section id="galeria" className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium mb-2">Portfólio</p>
            <h2 className="font-display text-3xl md:text-4xl text-forest mb-4">
              Nossos Projetos
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Espaços transformados pelo nosso trabalho.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-xl text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/70">{project.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-forest" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/galeria" className="inline-flex items-center justify-center bg-emerald hover:bg-emerald/90 text-white font-semibold px-8 h-10 rounded-md transition-colors">
              Ver Todos os Projetos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-forest">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium mb-2">Depoimentos</p>
            <h2 className="font-display text-3xl md:text-4xl text-white">
              O Que Nossos Clientes Dizem
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="bg-forest-light border border-gold/20 rounded-2xl p-8 md:p-12">
                <Quote className="w-12 h-12 text-gold/30 mb-6" />
                <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center">
                    <span className="font-display text-xl text-forest">
                      {testimonials[currentTestimonial].initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-white/60 text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Ver depoimento anterior"
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      aria-label={`Ver depoimento ${index + 1}`}
                      aria-pressed={index === currentTestimonial}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-gold" : "bg-gold/30"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Ver próximo depoimento"
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <p className="text-gold font-medium mb-2">Blog</p>
              <h2 className="font-display text-3xl md:text-4xl text-forest">
                Dicas e Curiosidades
              </h2>
            </div>
            <Link href="/blog" className="inline-flex items-center text-emerald hover:text-emerald/80 hover:bg-emerald/10 px-4 py-2 rounded-md mt-4 md:mt-0 transition-colors">
              Ver todos os artigos <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={post.link}>
                  <Card className="bg-white border-0 shadow-lg h-full hover:shadow-xl transition-shadow duration-300 group cursor-pointer overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-medium text-emerald-dark bg-gold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-foreground/50">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-display text-lg text-forest mb-3 group-hover:text-emerald transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-emerald hover:text-emerald/80 transition-colors">
                        Ler mais <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-forest">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium mb-2">Contato</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Conte-nos sobre sua demanda
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Informe a cidade e o serviço procurado para receber uma avaliação inicial.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <a
                  href="https://wa.me/5511950583364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-forest-light border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-colors group"
                >
                  <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">WhatsApp</p>
                    <p className="text-white font-semibold text-lg group-hover:text-gold transition-colors">
                      (11) 95058-3364
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/girpaisagismo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-forest-light border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-colors group"
                >
                  <div className="w-14 h-14 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Instagram</p>
                    <p className="text-white font-semibold text-lg group-hover:text-gold transition-colors">
                      @girpaisagismo
                    </p>
                  </div>
                </a>

                <div className="bg-forest-light border border-gold/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <p className="text-gold font-medium">Área de Atendimento</p>
                  </div>
                  <p className="text-white/80">
                    Nossa sede está em São Roque. Atendemos todo o Estado de São
                    Paulo e outras regiões do país, conforme a disponibilidade e
                    a logística de cada projeto.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-forest-light border-gold/20">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl text-white mb-6">
                    Solicite seu Orçamento
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="nome" className="text-white/70 text-sm mb-2 block">
                        Nome Completo
                      </label>
                      <Input
                        id="nome"
                        autoComplete="name"
                        placeholder="Seu nome"
                        className="bg-forest border-gold/20 text-white placeholder:text-white/40"
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData({ ...formData, nome: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="whatsapp" className="text-white/70 text-sm mb-2 block">
                        WhatsApp
                      </label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="(11) 99999-9999"
                        className="bg-forest border-gold/20 text-white placeholder:text-white/40"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="cidade" className="text-white/70 text-sm mb-2 block">
                        Cidade
                      </label>
                      <Select
                        value={formData.cidade}
                        onValueChange={(value) =>
                          setFormData({ ...formData, cidade: value })
                        }
                      >
                        <SelectTrigger id="cidade" className="bg-forest border-gold/20 text-white">
                          <SelectValue placeholder="Selecione sua cidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sao-roque">São Roque</SelectItem>
                          <SelectItem value="cotia">Cotia</SelectItem>
                          <SelectItem value="sorocaba">Sorocaba</SelectItem>
                          <SelectItem value="vargem-grande">Vargem Grande Paulista</SelectItem>
                          <SelectItem value="itapecerica">Itapecerica da Serra</SelectItem>
                          <SelectItem value="sao-lourenco">São Lourenço da Serra</SelectItem>
                          <SelectItem value="embu">Embu das Artes</SelectItem>
                          <SelectItem value="taboao">Taboão da Serra</SelectItem>
                          <SelectItem value="aracariguama">Araçariguama</SelectItem>
                          <SelectItem value="mairinque">Mairinque</SelectItem>
                          <SelectItem value="aluminio">Alumínio</SelectItem>
                          <SelectItem value="itu">Itu</SelectItem>
                          <SelectItem value="salto-pirapora">Salto de Pirapora</SelectItem>
                          <SelectItem value="votorantim">Votorantim</SelectItem>
                          <SelectItem value="outra">
                            Outra localidade
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="servico" className="text-white/70 text-sm mb-2 block">
                        Tipo de Serviço
                      </label>
                      <Select
                        value={formData.servico}
                        onValueChange={(value) =>
                          setFormData({ ...formData, servico: value })
                        }
                      >
                        <SelectTrigger id="servico" className="bg-forest border-gold/20 text-white">
                          <SelectValue placeholder="Selecione o serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="projeto">
                            Projeto de Paisagismo
                          </SelectItem>
                          <SelectItem value="execucao">
                            Execução de Obra
                          </SelectItem>
                          <SelectItem value="manutencao">
                            Manutenção de Jardim
                          </SelectItem>
                          <SelectItem value="consultoria">
                            Consultoria Ambiental
                          </SelectItem>
                          <SelectItem value="rap">RAP — Relatório Ambiental Preliminar</SelectItem>
                          <SelectItem value="eiv">EIV — Estudo de Impacto de Vizinhança</SelectItem>
                          <SelectItem value="inventario-arboreo">Inventário ou Levantamento Arbóreo</SelectItem>
                          <SelectItem value="vegetacao">Caracterização de Vegetação</SelectItem>
                          <SelectItem value="supressao">Parecer para Manejo ou Supressão de Árvores</SelectItem>
                          <SelectItem value="compensacao">Plano de Compensação Arbórea ou Vegetal</SelectItem>
                          <SelectItem value="monitoramento">Monitoramento TCRA/TCA</SelectItem>
                          <SelectItem value="fauna">Caracterização de Fauna</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="mensagem" className="text-white/70 text-sm mb-2 block">
                        Mensagem
                      </label>
                      <Textarea
                        id="mensagem"
                        placeholder="Descreva seu projeto ou dúvida..."
                        className="bg-forest border-gold/20 text-white placeholder:text-white/40 min-h-[120px]"
                        value={formData.mensagem}
                        onChange={(e) =>
                          setFormData({ ...formData, mensagem: e.target.value })
                        }
                      />
                    </div>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6"
                      onClick={handleWhatsAppSubmit}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Enviar pelo WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-light border-t border-gold/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/logo_gr.png"
                  alt="GR Logo"
                  className="h-10 w-auto"
                />
                <span className="font-display text-lg text-white">
                  GR <span className="text-gold">Paisagismo & Consultoria Ambiental</span>
                </span>
              </div>
              <p className="text-white/60 text-sm max-w-md">
                Paisagismo, arborização, vegetação, estudos e consultoria ambiental
                com responsabilidade técnica no Estado de São Paulo.
              </p>
            </div>
            <div>
              <h4 className="font-display text-white mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <a
                  href="#inicio"
                  className="block text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Início
                </a>
                <a
                  href="#sobre"
                  className="block text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="block text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Serviços
                </a>
                <a
                  href="#galeria"
                  className="block text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Galeria
                </a>
                <a
                  href="#blog"
                  className="block text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Blog
                </a>
                <Link
                  href="/faq"
                  className="block text-white/60 hover:text-gold transition-colors text-sm"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-display text-white mb-4">Redes Sociais</h4>
              <a
                href="https://instagram.com/girpaisagismo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                @girpaisagismo
              </a>
            </div>
          </div>
          <div className="border-t border-gold/10 pt-8 text-center">
            <p className="text-white/40 text-sm">
              © 2026 GR Paisagismo & Consultoria Ambiental. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511950583364"
        aria-label="Falar com a GR Paisagismo pelo WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
