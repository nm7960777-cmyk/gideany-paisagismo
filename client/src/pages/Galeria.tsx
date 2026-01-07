/**
 * DESIGN SYSTEM: Tropical Luxe
 * Página de Galeria de Projetos
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filtro, setFiltro] = useState("todos");

  const projetos = [
    {
      id: 1,
      image: "/images/projeto-tropical.jpg",
      titulo: "Jardim Tropical com Piscina",
      categoria: "residencial",
      local: "São Roque - SP",
      descricao: "Projeto completo com área de lazer integrada à natureza.",
    },
    {
      id: 2,
      image: "/images/projeto-moderno.jpg",
      titulo: "Paisagismo Moderno",
      categoria: "residencial",
      local: "Cotia - SP",
      descricao: "Design contemporâneo com espécies tropicais brasileiras.",
    },
    {
      id: 3,
      image: "/images/projeto-entrada.jpg",
      titulo: "Entrada Residencial",
      categoria: "residencial",
      local: "São Roque - SP",
      descricao: "Caminho verde que valoriza a fachada da residência.",
    },
    {
      id: 4,
      image: "/images/projeto-fachada.jpg",
      titulo: "Fachada Verde",
      categoria: "residencial",
      local: "Sorocaba - SP",
      descricao: "Integração perfeita entre arquitetura e paisagismo.",
    },
    {
      id: 5,
      image: "/images/projeto-piscina.jpg",
      titulo: "Área de Piscina",
      categoria: "residencial",
      local: "São Roque - SP",
      descricao: "Paisagismo que transforma a área de lazer.",
    },
    {
      id: 6,
      image: "/images/jardim-vertical.jpg",
      titulo: "Jardim Vertical",
      categoria: "vertical",
      local: "São Paulo - SP",
      descricao: "Solução verde para espaços compactos.",
    },
    {
      id: 7,
      image: "/images/paisagismo-comercial.jpg",
      titulo: "Paisagismo Corporativo",
      categoria: "comercial",
      local: "São Paulo - SP",
      descricao: "Ambiente profissional com toque de natureza.",
    },
    {
      id: 8,
      image: "/images/paisagismo-corporativo.jpg",
      titulo: "Entrada Comercial",
      categoria: "comercial",
      local: "Cotia - SP",
      descricao: "Primeira impressão que encanta clientes.",
    },
    {
      id: 9,
      image: "/images/jardim-vertical-fachada.jpg",
      titulo: "Fachada Verde Corporativa",
      categoria: "vertical",
      local: "São Paulo - SP",
      descricao: "Sustentabilidade e beleza na arquitetura comercial.",
    },
    {
      id: 10,
      image: "/images/jardim-piscina.jpg",
      titulo: "Jardim com Deck",
      categoria: "residencial",
      local: "São Roque - SP",
      descricao: "Integração entre área verde e área de lazer.",
    },
    {
      id: 11,
      image: "/images/projeto-jure.png",
      titulo: "Projeto Jurê",
      categoria: "residencial",
      local: "Cotia - SP",
      descricao: "Paisagismo tropical em residência de alto padrão.",
    },
    {
      id: 12,
      image: "/images/antes-depois.png",
      titulo: "Transformação Completa",
      categoria: "residencial",
      local: "São Roque - SP",
      descricao: "Antes e depois de uma transformação total.",
    },
  ];

  const categorias = [
    { id: "todos", nome: "Todos" },
    { id: "residencial", nome: "Residencial" },
    { id: "comercial", nome: "Comercial" },
    { id: "vertical", nome: "Jardins Verticais" },
  ];

  const projetosFiltrados =
    filtro === "todos"
      ? projetos
      : projetos.filter((p) => p.categoria === filtro);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projetosFiltrados.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + projetosFiltrados.length) % projetosFiltrados.length
      );
    }
  };

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
      <section className="relative pt-32 pb-16 bg-forest">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.p variants={fadeInUp} className="text-gold font-medium mb-4">
              Nosso Portfólio
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              Galeria de Projetos
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              Conheça alguns dos projetos que realizamos em São Roque, Cotia,
              Sorocaba, São Paulo e região. Cada trabalho é único e feito com
              dedicação.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-cream border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((cat) => (
              <Button
                key={cat.id}
                variant={filtro === cat.id ? "default" : "outline"}
                className={
                  filtro === cat.id
                    ? "bg-forest text-white hover:bg-forest/90"
                    : "border-forest/30 text-forest hover:bg-forest/10"
                }
                onClick={() => setFiltro(cat.id)}
              >
                {cat.nome}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projetosFiltrados.map((projeto, index) => (
              <motion.div
                key={projeto.id}
                variants={fadeInUp}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={projeto.image}
                    alt={projeto.titulo}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl text-white mb-1">
                        {projeto.titulo}
                      </h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <MapPin className="w-4 h-4" />
                        {projeto.local}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div
              className="max-w-5xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projetosFiltrados[selectedImage].image}
                alt={projetosFiltrados[selectedImage].titulo}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="font-display text-2xl text-white mb-2">
                  {projetosFiltrados[selectedImage].titulo}
                </h3>
                <p className="text-white/70 mb-1">
                  {projetosFiltrados[selectedImage].descricao}
                </p>
                <div className="flex items-center justify-center gap-2 text-gold text-sm">
                  <MapPin className="w-4 h-4" />
                  {projetosFiltrados[selectedImage].local}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-forest">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Quer um projeto assim para você?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Entre em contato e vamos conversar sobre como transformar seu
              espaço.
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
