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
  Calendar,
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
  const planos = [
    {
      nome: "Básico",
      frequencia: "Mensal",
      preco: "Sob consulta",
      servicos: [
        "Poda de arbustos e cercas vivas",
        "Corte de grama",
        "Limpeza geral do jardim",
        "Remoção de ervas daninhas",
        "Verificação do sistema de irrigação",
      ],
      destaque: false,
    },
    {
      nome: "Completo",
      frequencia: "Quinzenal",
      preco: "Sob consulta",
      servicos: [
        "Todos os serviços do plano Básico",
        "Adubação programada",
        "Controle de pragas e doenças",
        "Replantio quando necessário",
        "Poda de formação",
        "Relatório mensal do jardim",
      ],
      destaque: true,
    },
    {
      nome: "Premium",
      frequencia: "Semanal",
      preco: "Sob consulta",
      servicos: [
        "Todos os serviços do plano Completo",
        "Acompanhamento técnico especializado",
        "Renovação sazonal de plantas",
        "Manutenção de iluminação",
        "Limpeza de espelhos d'água",
        "Atendimento prioritário",
      ],
      destaque: false,
    },
  ];

  const servicosManutencao = [
    {
      icon: Scissors,
      titulo: "Podas",
      descricao:
        "Poda certa na hora certa. Cada planta tem seu jeito de ser podada.",
    },
    {
      icon: Droplets,
      titulo: "Irrigação",
      descricao:
        "Verifico se tá funcionando direito, ajusto os tempos conforme a estação do ano.",
    },
    {
      icon: Bug,
      titulo: "Controle de Pragas",
      descricao:
        "Identifico o problema antes de virar infestação. Prevenção sai mais barato que tratamento.",
    },
    {
      icon: Leaf,
      titulo: "Adubação",
      descricao:
        "Adubo certo pra cada planta. Quer floração bonita? Precisa de nutrição adequada.",
    },
    {
      icon: Sun,
      titulo: "Corte de Grama",
      descricao:
        "Corte na altura certa pro seu tipo de grama. Cortar baixo demais queima.",
    },
    {
      icon: Sparkles,
      titulo: "Limpeza Geral",
      descricao:
        "Tiro folha seca, galho caído, erva daninha. Jardim limpo dá menos praga.",
    },
  ];

  const beneficios = [
    "Você não precisa se preocupar com nada",
    "Planta bem cuidada dura mais e gasta menos",
    "Pego o problema antes de virar prejuízo",
    "Jardim bonito valoriza o imóvel",
    "Seu fim de semana livre pra descansar",
    "Equipe que entende de plantas",
    "Ferramentas certas pro serviço",
    "Adubo e defensivo de qualidade",
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
              Seu jardim merece cuidados profissionais. Oferecemos planos de
              manutenção periódica que mantêm seu espaço verde sempre bonito,
              saudável e valorizado.
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
              Cuidados completos para manter seu jardim sempre impecável.
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

      {/* Planos */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Planos de Manutenção
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Escolha o plano ideal para as necessidades do seu jardim.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {planos.map((plano, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${plano.destaque ? "md:-mt-4 md:mb-4" : ""}`}
              >
                {plano.destaque && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-forest text-sm font-semibold px-4 py-1 rounded-full">
                    Mais Popular
                  </div>
                )}
                <Card
                  className={`h-full ${
                    plano.destaque
                      ? "bg-gold border-gold"
                      : "bg-forest-light border-gold/20"
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3
                        className={`font-display text-2xl mb-2 ${
                          plano.destaque ? "text-forest" : "text-white"
                        }`}
                      >
                        {plano.nome}
                      </h3>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Calendar
                          className={`w-5 h-5 ${
                            plano.destaque ? "text-forest/70" : "text-gold"
                          }`}
                        />
                        <span
                          className={
                            plano.destaque ? "text-forest/70" : "text-white/70"
                          }
                        >
                          {plano.frequencia}
                        </span>
                      </div>
                      <p
                        className={`font-display text-xl ${
                          plano.destaque ? "text-forest" : "text-gold"
                        }`}
                      >
                        {plano.preco}
                      </p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plano.servicos.map((servico, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              plano.destaque ? "text-forest" : "text-gold"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              plano.destaque
                                ? "text-forest/80"
                                : "text-white/80"
                            }`}
                          >
                            {servico}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plano.destaque
                          ? "bg-forest hover:bg-forest/90 text-white"
                          : "bg-gold hover:bg-gold/90 text-forest"
                      }`}
                      onClick={() =>
                        window.open("https://wa.me/5511950583364", "_blank")
                      }
                    >
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
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
              Entre em contato para conhecer nossos planos e receber um
              orçamento personalizado para seu espaço.
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
