/**
 * DESIGN SYSTEM: Tropical Luxe
 * Página de Execução de Obras
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle,
  Shovel,
  Users,
  Shield,
  Clock,
  Truck,
  Phone,
  Award,
  Wrench,
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

export default function Execucao() {
  const diferenciais = [
    {
      icon: Users,
      titulo: "Equipe Própria",
      descricao:
        "Não terceirizo. Minha equipe faz o serviço e eu acompanho pessoalmente.",
    },
    {
      icon: Shield,
      titulo: "Garantia de Serviço",
      descricao:
        "Se alguma planta não pegar nos primeiros 30 dias, a gente repõe sem custo.",
    },
    {
      icon: Clock,
      titulo: "Prazo Cumprido",
      descricao:
        "Passo o cronograma antes de começar. Você sabe a data de início e de entrega.",
    },
    {
      icon: Truck,
      titulo: "Materiais de Qualidade",
      descricao:
        "Compro de produtores que conheço. Planta saudável pega mais fácil e dá menos trabalho.",
    },
  ];

  const servicos = [
    "Preparo e correção do solo",
    "Instalação de sistemas de irrigação",
    "Plantio de árvores, arbustos e forrações",
    "Implantação de gramados",
    "Construção de canteiros e jardineiras",
    "Instalação de iluminação de jardim",
    "Colocação de pedras e pisos",
    "Montagem de pergolados e decks",
    "Instalação de jardins verticais",
    "Execução de espelhos d'água",
  ];

  const etapasExecucao = [
    {
      titulo: "Planejamento",
      descricao:
        "Analiso o projeto, faço a lista de tudo que precisa e monto o cronograma.",
    },
    {
      titulo: "Preparação",
      descricao:
        "Limpo o terreno, corrijo o solo se precisar e passo a tubulação de irrigação.",
    },
    {
      titulo: "Implantação",
      descricao:
        "Planto tudo conforme o projeto, instalo irrigação e iluminação se tiver.",
    },
    {
      titulo: "Acabamento",
      descricao:
        "Faço os ajustes finais, limpo tudo e te explico como cuidar nas primeiras semanas.",
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
          style={{ backgroundImage: "url('/images/projeto-fachada.jpg')" }}
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
              Execução de Obras
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg md:text-xl mb-8"
            >
              Transformamos projetos em realidade com equipe especializada,
              materiais de qualidade e compromisso com prazos. Do preparo do
              solo à última planta, cuidamos de tudo.
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

      {/* Diferenciais */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-forest mb-4">
              Por que escolher nossa execução?
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Não terceirizamos. Nossa equipe própria garante qualidade e
              atenção em cada detalhe.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {diferenciais.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white border-gold/20 h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-forest" />
                    </div>
                    <h3 className="font-display text-xl text-forest mb-3">
                      {item.titulo}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {item.descricao}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Etapas da Execução */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Etapas da Execução
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Processo organizado e transparente do início ao fim.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {etapasExecucao.map((etapa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-forest-light border border-gold/20 rounded-lg p-6 h-full">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
                    <span className="font-display text-lg text-forest">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-white mb-2">
                    {etapa.titulo}
                  </h3>
                  <p className="text-white/70 text-sm">{etapa.descricao}</p>
                </div>
                {index < etapasExecucao.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Inclusos */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/projeto-entrada.jpg"
                alt="Execução de paisagismo"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-forest p-6 rounded-lg shadow-xl hidden md:block">
                <Wrench className="w-8 h-8 text-gold mb-2" />
                <p className="font-display text-white text-lg">Execução</p>
                <p className="text-white/70 text-sm">Completa e profissional</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-forest mb-6">
                O que executamos
              </h2>
              <p className="text-foreground/70 mb-8">
                Nossa equipe está preparada para executar todos os elementos do
                seu projeto paisagístico com excelência.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicos.map((servico, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{servico}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Award className="w-16 h-16 text-forest" />
              <div>
                <h3 className="font-display text-2xl text-forest">
                  Garantia de Qualidade
                </h3>
                <p className="text-forest/70">
                  Todos os serviços com garantia. CREA-SP 5071612380
                </p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-forest hover:bg-forest/90 text-white font-semibold px-8"
              onClick={() =>
                window.open("https://wa.me/5511950583364", "_blank")
              }
            >
              <Phone className="w-5 h-5 mr-2" />
              Fale Conosco
            </Button>
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
              Vamos tirar seu projeto do papel?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Entre em contato para um orçamento detalhado. Executamos projetos
              próprios ou de terceiros.
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
