/**
 * Página de SEO Local - Paisagismo em Cotia
 * Design: Tropical Luxe - Verde esmeralda + dourado
 * Objetivo: Rankear para "paisagismo cotia" e variações
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  MapPin,
  Phone,
  Leaf,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { useEffect } from "react";

export default function PaisagismoCotia() {
  useEffect(() => {
    document.title = "Paisagismo em Cotia SP | Projetos de Jardins | Gideany Rezende";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Paisagismo em Cotia SP. Projetos de jardins para casas e condomínios. Engenheira Agrônoma com CREA-SP. Orçamento grátis. Granja Viana e região.");
    }
  }, []);

  const beneficios = [
    "Especialista em condomínios da Granja Viana",
    "Projetos para casas de campo e chácaras",
    "Conhecimento do clima e solo de Cotia",
    "Orçamento gratuito e sem compromisso",
    "Engenheira Agrônoma com CREA-SP",
    "Atendimento em toda a região de Cotia",
  ];

  const bairros = [
    "Granja Viana", "Jardim da Glória", "Parque São George", "Jardim Atalaia",
    "Caucaia do Alto", "Jardim Nomura", "Parque Rincão", "Jardim Barbacena",
    "Embu das Artes", "Vargem Grande Paulista", "Itapevi"
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
              <span className="font-medium">Cotia, SP</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Paisagismo em{" "}
              <span className="text-gold">Cotia</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Projetos de paisagismo exclusivos para Cotia e Granja Viana. 
              Especializada em jardins para casas de condomínio, chácaras e 
              áreas comerciais. Engenheira Agrônoma com CREA-SP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511950583364?text=Olá! Gostaria de um orçamento de paisagismo em Cotia."
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

      {/* Sobre Cotia */}
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
                Paisagismo Especializado em Cotia e Granja Viana
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Cotia é conhecida por seus condomínios de alto padrão e casas com 
                amplos jardins. A região da Granja Viana, em especial, possui terrenos 
                generosos que permitem projetos de paisagismo diferenciados.
              </p>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Como paisagista atuando em Cotia, desenvolvo projetos que aproveitam 
                ao máximo o espaço disponível, criando ambientes que integram a casa 
                à natureza e valorizam seu imóvel.
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
                alt="Projeto de paisagismo em Cotia"
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
                <p className="text-white/60 text-sm">em Cotia e Granja Viana</p>
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
              Serviços de Paisagismo em Cotia
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Soluções completas de paisagismo para residências e empresas 
              em Cotia, Granja Viana e região.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Projetos de Paisagismo",
                description: "Projetos personalizados para casas de condomínio e chácaras. Incluem planta baixa, perspectivas 3D e lista de espécies.",
                link: "/servicos/projetos",
              },
              {
                title: "Execução de Jardins",
                description: "Implantação completa do projeto com equipe especializada. Preparação do solo, plantio e instalação de sistemas de irrigação.",
                link: "/servicos/execucao",
              },
              {
                title: "Manutenção de Jardins",
                description: "Serviço periódico de manutenção para condomínios e residências. Podas, adubação, controle de pragas e limpeza.",
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
              Paisagismo em Cotia e Região
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Atendemos Cotia, Granja Viana e cidades vizinhas com o mesmo padrão 
              de qualidade e atendimento personalizado.
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
              Pronto Para Transformar Seu Jardim em Cotia?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Entre em contato agora e receba um orçamento gratuito para seu projeto 
              de paisagismo. Atendimento rápido e personalizado.
            </p>
            <a
              href="https://wa.me/5511950583364?text=Olá! Gostaria de um orçamento de paisagismo em Cotia."
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
