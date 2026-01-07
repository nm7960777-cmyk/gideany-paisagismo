/**
 * DESIGN SYSTEM: Tropical Luxe
 * - Primary: Emerald Green (#0d5c4a)
 * - Accent: Gold (#d4af37)
 * - Typography: Cinzel (display) + Montserrat (body)
 * - Style: Luxury tropical with Art Deco influences
 */

import { useState } from "react";
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
  Shovel,
  Droplets,
  Sun,
  Lightbulb,
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

export default function Home() {
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
      name: "Ricardo Mendes",
      location: "Cotia - SP",
      text: "Excelente trabalho! O projeto foi entregue no prazo e o resultado ficou incrível. Minha família adorou o novo jardim.",
      initial: "R",
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
      title: "Projetos de Paisagismo",
      description:
        "Desenvolvemos projetos personalizados para residências e empresas, transformando seu espaço em um ambiente único que harmoniza plantas, elementos decorativos e funcionalidade.",
      link: "/servicos/projetos",
    },
    {
      icon: Shovel,
      title: "Execução de Obras",
      description:
        "Executamos o projeto completo com equipe especializada, garantindo qualidade e atenção aos detalhes em cada etapa da implantação.",
      link: "/servicos/execucao",
    },
    {
      icon: Droplets,
      title: "Manutenção de Jardins",
      description:
        "Serviço periódico de manutenção para manter seu jardim sempre bonito e saudável, com podas, adubação e cuidados especiais.",
      link: "/servicos/manutencao",
    },
  ];

  const additionalServices = [
    { icon: Leaf, name: "Jardins Verticais" },
    { icon: Droplets, name: "Irrigação Automatizada" },
    { icon: Sun, name: "Iluminação de Jardins" },
    { icon: Lightbulb, name: "Consultoria Técnica" },
  ];

  const projects = [
    {
      image: "/images/novo-area-piscina.jpg",
      title: "Jardim com Piscina",
      description: "Projeto residencial",
    },
    {
      image: "/images/novo-jardim-vertical.jpg",
      title: "Jardim Vertical",
      description: "Fachada verde moderna",
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
      date: "08 Jan 2026",
      title: "Como Fazer um Jardim Vertical em Casa: Passo a Passo",
      excerpt:
        "Aprenda a criar um jardim vertical do zero, mesmo em espaços pequenos. Dicas de plantas, estruturas e manutenção...",
      link: "/blog/jardim-vertical",
    },
    {
      category: "Horta em Apartamento",
      date: "03 Jan 2026",
      title: "Horta em Apartamento: O Guia Completo",
      excerpt:
        "Cultivar uma horta em apartamento é uma realidade acessível e gratificante, mesmo com espaço limitado.",
      link: "/blog/horta-apartamento",
    },
    {
      category: "Jardim Pequeno",
      date: "15 Dez 2025",
      title: "Jardim Pequeno em Casa: 10 Ideias Simples de Canteiros para Transformar Seu Espaço",
      excerpt:
        "Ter um jardim em casa não é um privilégio apenas de quem tem quintais enormes. Com criatividade e planejamento, qualquer cantinho pode virar um refúgio relaxante.",
      link: "/blog/jardim-pequeno",
    },
  ];

  const handleWhatsAppSubmit = () => {
    const message = `Olá! Meu nome é ${formData.nome}.%0A%0ACidade: ${formData.cidade}%0ATipo de Serviço: ${formData.servico}%0A%0AMensagem: ${formData.mensagem}`;
    window.open(`https://wa.me/5511950583364?text=${message}`, "_blank");
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
            <a href="#" className="flex items-center gap-3">
              <img
                src="/images/logo_gr.png"
                alt="GR Logo"
                className="h-12 w-auto"
              />
              <span className="font-display text-xl text-white hidden sm:block">
                Gideany Rezende <span className="text-gold">Paisagismo</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
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
              <a
                href="#servicos"
                className="text-white/80 hover:text-gold transition-colors font-medium"
              >
                Serviços
              </a>
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
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-forest border-t border-gold/20"
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
              <a
                href="#servicos"
                className="text-white/80 hover:text-gold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </a>
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
                São Roque • Cotia • Sorocaba e todo Estado de SP
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Transformamos Espaços em{" "}
              <span className="text-gold">Ambientes que inspiram</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl"
            >
              Projetos exclusivos de paisagismo residencial e comercial que unem
              beleza, funcionalidade e sustentabilidade. Design com técnicas
              atualizadas para criar ambientes que encantam.
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
                Solicitar Orçamento
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
                Ver Projetos
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6 items-center"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-white/80 text-sm">CREA-SP Registrada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="text-white/80 text-sm">Projetos Exclusivos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-white/80 text-sm">
                  Equipe Especializada
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CREA Badge */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="bg-forest/90 border border-gold/30 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-gold font-display text-lg">CREA-SP 5071612380</p>
            <p className="text-white/60 text-sm">Responsável Técnica Registrada</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/images/gideany_foto.png"
                  alt="Gideany Clarice Rezende"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold p-4 rounded-lg shadow-xl hidden md:block">
                  <p className="font-display text-forest text-lg">Sobre Mim</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-forest mb-6">
                Gideany Clarice Rezende
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Engenheira Agrônoma com registro no CREA-SP,
                apaixonada por transformar espaços em verdadeiros refúgios
                naturais. Atuo em São Roque, Cotia, Sorocaba e todo o Estado de São Paulo,
                região, oferecendo projetos personalizados para residências e
                empresas que respeitam o meio ambiente e valorizam cada detalhe
                do seu espaço.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Com conhecimento atualizado nas últimas tendências de paisagismo
                e técnicas sustentáveis, minha missão é criar jardins que não
                apenas embelezam, mas que também proporcionam bem-estar e
                conexão com a natureza. Cada projeto é único, desenvolvido com
                carinho e atenção às necessidades específicas de cada cliente.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Award className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="font-semibold text-forest">CREA-SP</p>
                  <p className="text-sm text-foreground/60">Registrada</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <MessageCircle className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="font-semibold text-forest">Projetos</p>
                  <p className="text-sm text-foreground/60">Exclusivos</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="font-semibold text-forest">Equipe</p>
                  <p className="text-sm text-foreground/60">Especializada</p>
                </div>
              </div>
            </motion.div>
          </div>
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
              Do Projeto à Execução
            </h2>
            
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-16"
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
                    <Link href={service.link}>
                      <Button
                        variant="ghost"
                        className="text-gold hover:text-gold hover:bg-gold/10 p-0"
                      >
                        Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-forest-light border border-gold/20 rounded-lg p-4"
              >
                <service.icon className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/80 text-sm">{service.name}</span>
              </div>
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
              Residências e empresas transformadas pelo nosso trabalho.
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
            <Link href="/galeria">
              <Button
                size="lg"
                className="bg-emerald hover:bg-emerald/90 text-white font-semibold px-8"
              >
                Ver Todos os Projetos
              </Button>
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
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-gold" : "bg-gold/30"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
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
            <Link href="/blog">
              <Button
                variant="ghost"
                className="text-emerald hover:text-emerald hover:bg-emerald/10 mt-4 md:mt-0"
              >
                Ver todos os artigos <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
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
                  <Card className="bg-white border-0 shadow-lg h-full hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-foreground/50">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-display text-lg text-forest mb-3 group-hover:text-emerald transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <Button
                        variant="ghost"
                        className="text-emerald hover:text-emerald hover:bg-emerald/10 p-0"
                      >
                        Ler mais <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
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
              Vamos Transformar seu Espaço?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Conte-nos sua ideia. O primeiro passo é simples.
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
                    São Roque, Cotia, Sorocaba e todo Estado de SP
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
                      <label className="text-white/70 text-sm mb-2 block">
                        Nome Completo
                      </label>
                      <Input
                        placeholder="Seu nome"
                        className="bg-forest border-gold/20 text-white placeholder:text-white/40"
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData({ ...formData, nome: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">
                        WhatsApp
                      </label>
                      <Input
                        placeholder="(11) 99999-9999"
                        className="bg-forest border-gold/20 text-white placeholder:text-white/40"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">
                        Cidade
                      </label>
                      <Select
                        value={formData.cidade}
                        onValueChange={(value) =>
                          setFormData({ ...formData, cidade: value })
                        }
                      >
                        <SelectTrigger className="bg-forest border-gold/20 text-white">
                          <SelectValue placeholder="Selecione sua cidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sao-roque">São Roque</SelectItem>
                          <SelectItem value="cotia">Cotia</SelectItem>
                          <SelectItem value="sorocaba">Sorocaba</SelectItem>
                          <SelectItem value="sao-paulo">São Paulo</SelectItem>
                          <SelectItem value="outra">
                            Outra cidade da região
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">
                        Tipo de Serviço
                      </label>
                      <Select
                        value={formData.servico}
                        onValueChange={(value) =>
                          setFormData({ ...formData, servico: value })
                        }
                      >
                        <SelectTrigger className="bg-forest border-gold/20 text-white">
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
                            Consultoria
                          </SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">
                        Mensagem
                      </label>
                      <Textarea
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
                  Gideany Rezende <span className="text-gold">Paisagismo</span>
                </span>
              </div>
              <p className="text-white/60 text-sm max-w-md">
                Transformando espaços em jardins que inspiram. Projetos exclusivos
                de paisagismo em São Roque, Cotia, Sorocaba e todo Estado de SP.
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
                <Link href="/faq">
                  <a className="block text-white/60 hover:text-gold transition-colors text-sm">
                    Perguntas Frequentes
                  </a>
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
              © 2026 Gideany Rezende Paisagismo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511950583364"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
