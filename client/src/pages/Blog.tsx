/**
 * DESIGN SYSTEM: Tropical Luxe
 * - Primary: Emerald Green (#0d5c4a)
 * - Accent: Gold (#d4af37)
 * - Typography: Cinzel (display) + Montserrat (body)
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function Blog() {
  const artigos = [
    {
      slug: "jardim-vertical",
      titulo: "Como Fazer um Jardim Vertical em Casa: Passo a Passo",
      resumo: "Aprenda a criar um jardim vertical do zero, mesmo em espaços pequenos. Dicas de plantas, estruturas e manutenção para transformar qualquer parede em um oásis verde.",
      imagem: "/images/novo-jardim-vertical-fachada.jpg",
      categoria: "Jardim Vertical",
      data: "08 Jan 2026",
      tempoLeitura: "8 min",
    },
    {
      slug: "horta-apartamento",
      titulo: "Horta em Apartamento: O Guia Completo",
      resumo: "Cultivar uma horta em apartamento é uma realidade acessível e gratificante, mesmo com espaço limitado. Descubra como começar sua horta urbana.",
      imagem: "/images/novo-projeto-residencial.jpg",
      categoria: "Horta em Apartamento",
      data: "03 Jan 2026",
      tempoLeitura: "10 min",
    },
    {
      slug: "jardim-pequeno",
      titulo: "Jardim Pequeno em Casa: 10 Ideias Simples de Canteiros",
      resumo: "Ter um jardim em casa não é um privilégio apenas de quem tem quintais enormes. Com criatividade e planejamento, qualquer cantinho pode virar um refúgio relaxante.",
      imagem: "/images/novo-paisagismo-moderno.jpg",
      categoria: "Jardim Pequeno",
      data: "15 Dez 2025",
      tempoLeitura: "12 min",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-dark/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                <span className="text-gold font-cinzel font-bold text-lg">GR</span>
              </div>
              <span className="text-white font-cinzel text-lg tracking-wide hidden sm:block">
                Gideany Rezende <span className="text-gold">Paisagismo</span>
              </span>
            </a>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-emerald-dark to-emerald-dark/90">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-medium mb-4"
          >
            Nosso Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-cinzel text-white mb-6"
          >
            Dicas e Inspirações
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Conteúdos exclusivos sobre paisagismo, jardinagem e como transformar 
            seu espaço em um ambiente mais verde e acolhedor.
          </motion.p>
        </div>
      </section>

      {/* Lista de Artigos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {artigos.map((artigo, index) => (
              <motion.article
                key={artigo.slug}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={`/blog/${artigo.slug}`}>
                  <a className="block">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={artigo.imagem}
                        alt={artigo.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold text-emerald-dark px-3 py-1 rounded-full text-sm font-medium">
                          {artigo.categoria}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {artigo.data}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {artigo.tempoLeitura}
                        </span>
                      </div>
                      <h2 className="text-xl font-cinzel text-emerald-dark mb-3 group-hover:text-gold transition-colors">
                        {artigo.titulo}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {artigo.resumo}
                      </p>
                      <span className="inline-flex items-center text-gold font-medium text-sm group-hover:gap-2 transition-all">
                        Ler mais
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </a>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-cinzel text-white mb-4">
            Quer um projeto personalizado?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Entre em contato e vamos transformar seu espaço em um jardim dos sonhos.
          </p>
          <a
            href="https://wa.me/5511950583364"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gold hover:bg-gold/90 text-emerald-dark font-semibold px-8 py-6">
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="bg-emerald-dark/95 py-8 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <Link href="/">
            <a className="text-white/60 hover:text-gold transition-colors">
              Voltar ao Site
            </a>
          </Link>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/5511950583364"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
