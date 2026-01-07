/**
 * DESIGN SYSTEM: Tropical Luxe
 * Página de Projetos de Paisagismo
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle,
  Leaf,
  Ruler,
  FileText,
  Palette,
  TreeDeciduous,
  Phone,
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
    transition: { staggerChildren: 0.15 },
  },
};

export default function Projetos() {
  const etapas = [
    {
      numero: "01",
      titulo: "Visita Técnica",
      descricao:
        "Realizamos uma visita ao local para entender o espaço, suas características, incidência solar, tipo de solo e suas necessidades específicas.",
    },
    {
      numero: "02",
      titulo: "Briefing Detalhado",
      descricao:
        "Conversamos sobre seus desejos, estilo de vida, preferências estéticas e orçamento disponível para criar um projeto sob medida.",
    },
    {
      numero: "03",
      titulo: "Desenvolvimento do Projeto",
      descricao:
        "Criamos o projeto paisagístico com plantas técnicas, memorial descritivo e lista de espécies recomendadas.",
    },
    {
      numero: "04",
      titulo: "Apresentação e Ajustes",
      descricao:
        "Apresentamos o projeto e fazemos ajustes para alinhar o resultado final com suas expectativas.",
    },
    {
      numero: "05",
      titulo: "Entrega Final",
      descricao:
        "Entregamos toda a documentação técnica pronta para execução, com especificações detalhadas de materiais e plantas.",
    },
  ];

  const beneficios = [
    "Projeto personalizado para seu espaço",
    "Escolha de espécies adaptadas ao clima local",
    "Otimização do uso da água com irrigação inteligente",
    "Valorização do imóvel em até 20%",
    "Plantas técnicas detalhadas",
    "Memorial descritivo completo",
    "Imagens ilustrativas do projeto",
    "Acompanhamento pós-projeto",
  ];

  const tiposProjetos = [
    {
      icon: TreeDeciduous,
      titulo: "Residencial",
      descricao:
        "Jardins para casas, apartamentos e condomínios. Transformamos seu lar em um refúgio verde.",
    },
    {
      icon: Ruler,
      titulo: "Comercial",
      descricao:
        "Paisagismo para empresas, lojas e escritórios. Ambiente profissional que impressiona clientes.",
    },
    {
      icon: Palette,
      titulo: "Áreas de Lazer",
      descricao:
        "Projetos para piscinas, churrasqueiras e espaços gourmet integrados à natureza.",
    },
    {
      icon: Leaf,
      titulo: "Jardins Verticais",
      descricao:
        "Soluções criativas para espaços reduzidos. Verde em qualquer ambiente.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-forest/95 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo_gr.png"
                alt="GR Logo"
                className="h-12 w-auto"
              />
              <span className="font-display text-xl text-white hidden sm:block">
                Gideany Rezende <span className="text-gold">Paisagismo</span>
              </span>
            </Link>
            <Link href="/">
              <Button
                variant="ghost"
                className="text-white hover:text-gold hover:bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-forest">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/projeto-tropical.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p variants={fadeInUp} className="text-gold font-medium mb-4">
              Nossos Serviços
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              Projetos de Paisagismo
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg md:text-xl mb-8"
            >
              Desenvolvemos projetos paisagísticos exclusivos que transformam
              espaços em ambientes únicos. Do conceito à execução, cada detalhe
              é pensado para criar harmonia entre arquitetura e natureza.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-forest font-semibold px-8"
                onClick={() =>
                  window.open("https://wa.me/5511950583364", "_blank")
                }
              >
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tipos de Projetos */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-forest mb-4">
              Tipos de Projetos
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Atendemos diferentes necessidades com soluções personalizadas para
              cada tipo de espaço.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {tiposProjetos.map((tipo, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white border-gold/20 h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <tipo.icon className="w-8 h-8 text-forest" />
                    </div>
                    <h3 className="font-display text-xl text-forest mb-3">
                      {tipo.titulo}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {tipo.descricao}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Etapas do Projeto */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Como Funciona
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nosso processo é transparente e colaborativo. Você participa de
              cada etapa.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {etapas.map((etapa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                    <span className="font-display text-xl text-forest">
                      {etapa.numero}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-forest-light border border-gold/20 rounded-lg p-6">
                  <h3 className="font-display text-xl text-white mb-2">
                    {etapa.titulo}
                  </h3>
                  <p className="text-white/70">{etapa.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-forest mb-6">
                Por que investir em um projeto profissional?
              </h2>
              <p className="text-foreground/70 mb-8">
                Um projeto de paisagismo bem elaborado evita erros, economiza
                recursos e garante um resultado que valoriza seu imóvel e
                proporciona bem-estar por muitos anos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">
                      {beneficio}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/projeto-moderno.jpg"
                alt="Projeto de paisagismo"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-xl hidden md:block">
                <FileText className="w-8 h-8 text-forest mb-2" />
                <p className="font-display text-forest text-lg">
                  Projeto Completo
                </p>
                <p className="text-forest/70 text-sm">
                  Plantas técnicas + 3D
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Pronto para transformar seu espaço?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Entre em contato e agende uma visita técnica gratuita. Vamos
              conhecer seu espaço e suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-forest font-semibold px-8"
                onClick={() =>
                  window.open("https://wa.me/5511950583364", "_blank")
                }
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp (11) 95058-3364
              </Button>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar ao Site
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="py-8 bg-forest-light border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            © 2026 Gideany Rezende Paisagismo. CREA-SP 5071612380. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
