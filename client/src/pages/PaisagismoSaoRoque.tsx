/**
 * Página de SEO Local - Paisagismo em São Roque
 * Design: Tropical Luxe - Verde esmeralda + dourado
 * Objetivo: Rankear para "paisagismo são roque" e variações
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useCanonical } from "@/hooks/useCanonical";
import {
  MapPin,
  Phone,
  Leaf,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { useEffect } from "react";

export default function PaisagismoSaoRoque() {
  useCanonical('/paisagismo-sao-roque');
  useEffect(() => {
    document.title = "Paisagismo em São Roque SP | Projetos de Jardins | Gideany Rezende";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Paisagismo em São Roque SP. Projetos de jardins residenciais e comerciais. Engenheira Agrônoma com CREA-SP. Orçamento grátis. Atendemos toda a região.");
    }
  }, []);

  const beneficios = [
    "Projetos personalizados para o clima de São Roque",
    "Conhecimento das plantas nativas da região",
    "Atendimento rápido e presencial",
    "Orçamento gratuito e sem compromisso",
    "Engenheira Agrônoma com CREA-SP",
    "Mais de 50 projetos realizados na região",
  ];

  const bairros = [
    "Centro", "Jardim São Roque", "Jardim Colonial", "Vila São João",
    "Jardim Paulista", "Parque dos Pássaros", "Jardim Europa", "Vila Verde",
    "Mairinque", "Araçariguama", "Ibiúna"
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-forest overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/hero-garden.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-gold mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">São Roque, SP</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Paisagismo em{" "}
              <span className="text-gold">São Roque</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Transforme seu espaço com projetos de paisagismo exclusivos em São Roque. 
              Engenheira Agrônoma com CREA-SP, especializada em jardins residenciais e 
              comerciais que valorizam seu imóvel e proporcionam bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511950583364?text=Olá! Gostaria de um orçamento de paisagismo em São Roque."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gold hover:bg-gold/90 text-forest font-semibold px-8 py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento Grátis
                </Button>
              </a>
              <Link href="/galeria">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg"
                >
                  Ver Projetos
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre São Roque */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-medium mb-2">Paisagismo Local</p>
              <h2 className="font-display text-3xl md:text-4xl text-forest mb-6">
                Por Que Escolher Uma Paisagista de São Roque?
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                São Roque possui um clima subtropical único, com temperaturas amenas e 
                alta umidade, ideal para diversas espécies de plantas. Conhecer as 
                características locais é fundamental para criar jardins que prosperam 
                durante todo o ano.
              </p>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Como paisagista atuando em São Roque, conheço as melhores espécies para 
                cada tipo de solo e exposição solar da região. Isso garante jardins mais 
                bonitos, saudáveis e com menor necessidade de manutenção.
              </p>
              <ul className="space-y-3">
                {beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/jardim-residencial.jpg"
                alt="Projeto de paisagismo em São Roque"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-forest p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 text-gold mb-2">
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                </div>
                <p className="text-white font-medium">Clientes Satisfeitos</p>
                <p className="text-white/60 text-sm">em São Roque e região</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-forest-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium mb-2">Nossos Serviços</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Serviços de Paisagismo em São Roque
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Oferecemos soluções completas de paisagismo para residências e empresas 
              em São Roque e toda a região.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Projetos de Paisagismo",
                description: "Projetos personalizados com plantas ideais para o clima de São Roque. Incluem planta baixa, perspectivas 3D e lista de espécies.",
                link: "/servicos/projetos",
              },
              {
                title: "Execução de Jardins",
                description: "Implantação completa do projeto com equipe especializada. Preparação do solo, plantio e instalação de sistemas de irrigação.",
                link: "/servicos/execucao",
              },
              {
                title: "Manutenção de Jardins",
                description: "Serviço periódico de manutenção para manter seu jardim sempre bonito. Podas, adubação, controle de pragas e limpeza.",
                link: "/servicos/manutencao",
              },
            ].map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-forest border-gold/20 h-full hover:border-gold/40 transition-colors">
                  <CardContent className="p-8">
                    <Leaf className="w-10 h-10 text-gold mb-4" />
                    <h3 className="font-display text-xl text-white mb-3">
                      {servico.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {servico.description}
                    </p>
                    <Link href={servico.link}>
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
          </div>
        </div>
      </section>

      {/* Áreas Atendidas */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold font-medium mb-2">Áreas Atendidas</p>
            <h2 className="font-display text-3xl md:text-4xl text-forest mb-4">
              Paisagismo em São Roque e Região
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Atendemos São Roque e cidades vizinhas com o mesmo padrão de qualidade 
              e atendimento personalizado.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {bairros.map((bairro, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-forest/10 text-forest px-4 py-2 rounded-full text-sm font-medium"
              >
                {bairro}
              </motion.span>
            ))}
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
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Pronto Para Transformar Seu Jardim em São Roque?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Entre em contato agora e receba um orçamento gratuito para seu projeto 
              de paisagismo. Atendimento rápido e personalizado.
            </p>
            <a
              href="https://wa.me/5511950583364?text=Olá! Gostaria de um orçamento de paisagismo em São Roque."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gold hover:bg-gold/90 text-forest font-semibold px-10 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
