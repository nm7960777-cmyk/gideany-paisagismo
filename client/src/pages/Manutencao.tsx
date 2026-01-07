/**
 * DESIGN SYSTEM: Tropical Luxe
 * Página de Manutenção de Jardins
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle,
  Droplets,
  Scissors,
  Bug,
  Leaf,
  Phone,
  Sparkles,
  Sun,
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

export default function Manutencao() {
  const servicosManutencao = [
    {
      icon: Scissors,
      titulo: "Podas",
      descricao:
        "Podas de formação, limpeza e contenção para manter suas plantas saudáveis e bonitas.",
    },
    {
      icon: Droplets,
      titulo: "Irrigação",
      descricao:
        "Verificação, ajuste e manutenção de sistemas de irrigação.",
    },
    {
      icon: Bug,
      titulo: "Controle de Pragas",
      descricao:
        "Identificação e tratamento preventivo e corretivo de pragas e doenças.",
    },
    {
      icon: Leaf,
      titulo: "Adubação",
      descricao:
        "Nutrição adequada para cada espécie, garantindo crescimento saudável e floração.",
    },
    {
      icon: Sun,
      titulo: "Corte de Grama",
      descricao:
        "Corte regular com altura adequada para cada tipo de gramado.",
    },
    {
      icon: Sparkles,
      titulo: "Limpeza Geral",
      descricao:
        "Remoção de folhas secas, galhos e detritos para manter o jardim limpo.",
    },
  ];

  const beneficios = [
    "Jardim sempre bonito e saudável",
    "Economia com substituição de plantas",
    "Prevenção de pragas e doenças",
    "Valorização contínua do imóvel",
    "Mais tempo livre para você",
    "Profissionais especializados",
    "Equipamentos profissionais",
    "Produtos de qualidade",
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
          style={{ backgroundImage: "url('/images/manutencao-jardim.png')" }}
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
              Manutenção de Jardins
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg md:text-xl mb-8"
            >
              Seu jardim merece cuidados profissionais. Oferecemos manutenção
              periódica personalizada conforme a necessidade do seu espaço.
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

      {/* Serviços de Manutenção */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-forest mb-4">
              O que fazemos na manutenção
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Cuidados completos para manter seu jardim sempre bonito.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicosManutencao.map((servico, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white border-gold/20 h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-forest/10 rounded-lg flex items-center justify-center mb-4">
                      <servico.icon className="w-7 h-7 text-forest" />
                    </div>
                    <h3 className="font-display text-xl text-forest mb-2">
                      {servico.titulo}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {servico.descricao}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Orçamento Personalizado */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Orçamento Personalizado
            </h2>
            <p className="text-white/70 mb-8">
              Cada jardim tem suas necessidades. Avaliamos seu espaço e montamos
              um plano de manutenção sob medida, com a frequência ideal para
              manter tudo em ordem — seja mensal, quinzenal ou conforme sua
              preferência.
            </p>
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
                Por que contratar manutenção profissional?
              </h2>
              <p className="text-foreground/70 mb-8">
                Um jardim bem cuidado não é apenas bonito - ele valoriza seu
                imóvel, melhora a qualidade do ar e proporciona bem-estar para
                toda a família.
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
                src="/images/jardim-piscina.jpg"
                alt="Jardim bem cuidado"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-xl hidden md:block">
                <Droplets className="w-8 h-8 text-forest mb-2" />
                <p className="font-display text-forest text-lg">Cuidado</p>
                <p className="text-forest/70 text-sm">Profissional</p>
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
              Seu jardim merece cuidado profissional
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Entre em contato para receber um orçamento personalizado para seu espaço.
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

      {/* Footer */}
      <footer className="py-8 bg-forest-dark border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Gideany Rezende Paisagismo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
