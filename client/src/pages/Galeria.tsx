/**
 * DESIGN SYSTEM: Tropical Luxe
 * Página de Galeria de Projetos
 */

import { useState } from "react";
import { useCanonical } from "@/hooks/useCanonical";
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
  useCanonical('/galeria', {
    title: "Galeria de Projetos | GR Paisagismo",
    description:
      "Conheça projetos paisagísticos, jardins residenciais, áreas de lazer, espaços comerciais e transformações realizadas pela GR Paisagismo.",
    image: "/images/novo-area-piscina.jpg",
  });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filtro, setFiltro] = useState("todos");

  const projetos = [
    {
      id: 1,
      image: "/images/novo-jardim-tropical.jpg",
      titulo: "Jardim Tropical com Piscina",
      categoria: "residencial",
      local: "São Roque - SP",
      descricao: "Projeto completo com área de lazer integrada à natureza.",
    },
    {
      id: 2,
      image: "/images/novo-paisagismo-moderno.jpg",
      titulo: "Paisagismo Moderno",
      categoria: "residencial",
      local: "Cotia - SP",
      descricao: "Design contemporâneo com espécies tropicais brasileiras.",
    },
    {
      id: 3,
      image: "/images/novo-entrada-residencial.jpg",
      titulo: "Entrada Residencial",
      categoria: "residencial",
      local: "Alphaville - SP",
      descricao: "Caminho verde que valoriza a fachada da residência.",
    },
    {
      id: 4,
      image: "/images/novo-fachada-verde.jpg",
      titulo: "Fachada Verde",
      categoria: "residencial",
      local: "Sorocaba - SP",
      descricao: "Integração perfeita entre arquitetura e paisagismo.",
    },
    {
      id: 5,
      image: "/images/novo-area-piscina.jpg",
      titulo: "Área de Piscina",
      categoria: "residencial",
      local: "São Roque - SP",
      descricao: "Paisagismo que transforma a área de lazer.",
    },
    {
      id: 7,
      image: "/images/novo-paisagismo-comercial.jpg",
      titulo: "Paisagismo Corporativo",
      categoria: "comercial",
      local: "São Paulo - SP",
      descricao: "Ambiente profissional com toque de natureza.",
    },
    {
      id: 8,
      image: "/images/novo-corporativo.jpg",
      titulo: "Entrada Comercial",
      categoria: "comercial",
      local: "Mogi das Cruzes - SP",
      descricao: "Primeira impressão que encanta clientes.",
    },

    {
      id: 10,
      image: "/images/novo-jardim-deck.jpg",
      titulo: "Jardim com Deck",
      categoria: "residencial",
      local: "Barueri - SP",
      descricao: "Integração entre área verde e área de lazer.",
    },
    {
      id: 11,
      image: "/images/novo-projeto-residencial.jpg",
      titulo: "Projeto Jurê",
      categoria: "residencial",
      local: "Cotia - SP",
      descricao: "Paisagismo tropical em residência de alto padrão.",
    },
    {
      id: 12,
      image: "/images/antes-depois-novo.jpg",
      titulo: "Transformação Completa",
      categoria: "residencial",
      local: "São Roque - SP",
      descricao: "Antes e depois de uma transformação total.",
    },
    {
      id: 13,
      image: "/images/novo-hero.jpg",
      titulo: "Jardim Residencial",
      categoria: "residencial",
      local: "Avaré - SP",
      descricao: "Paisagismo tropical com área de piscina integrada.",
    },
    {
      id: 14,
      image: "/images/jardim-manutencao-profissional.jpg",
      titulo: "Jardim com Piscina",
      categoria: "residencial",
      local: "São Paulo - SP",
      descricao: "Paisagismo tropical com área de lazer integrada.",
    },
    {
      id: 15,
      image: "/images/foto-piscina1.png",
      titulo: "Piscina com Folhagens Tropicais",
      categoria: "residencial",
      local: "Registro - SP",
      descricao: "Área de piscina com plantas tropicais e deck de madeira.",
    },
    {
      id: 16,
      image: "/images/foto-piscina2.png",
      titulo: "Piscina com Palmeiras",
      categoria: "residencial",
      local: "São Roque - SP",
      descricao: "Projeto com palmeiras e paisagismo tropical.",
    },
    {
      id: 17,
      image: "/images/render3.jpg",
      titulo: "Jardim Residencial",
      categoria: "residencial",
      local: "Araçariguama - SP",
      descricao: "Projeto paisagístico com gramado e plantas ornamentais.",
    },
    {
      id: 18,
      image: "/images/foto-lounge4.png",
      titulo: "Área de Estar com Lareira",
      categoria: "residencial",
      local: "Boituva - SP",
      descricao: "Espaço gourmet com lareira e plantas tropicais.",
    },
  ];

  const categorias = [
    { id: "todos", nome: "Todos" },
    { id: "residencial", nome: "Residencial" },
    { id: "comercial", nome: "Comercial" },

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
                GR <span className="text-gold">Paisagismo</span>
              </span>
            </Link>
            <Button
              asChild
                variant="ghost"
                className="text-white hover:text-gold hover:bg-transparent"
              >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Link>
            </Button>
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
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                        <MapPin className="w-4 h-4" />
                        {projeto.local}
                      </div>
                      <a
                        href={`https://wa.me/5511950583364?text=Olá! Vi o projeto "${projeto.titulo}" no site e gostaria de solicitar um orçamento.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 bg-gold text-forest px-4 py-2 rounded-full text-sm font-medium hover:bg-gold/90 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Solicitar Orçamento
                      </a>
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
              type="button"
              aria-label="Fechar imagem"
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              type="button"
              aria-label="Ver imagem anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              type="button"
              aria-label="Ver próxima imagem"
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
              <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8"
                >
                <Link href="/">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar ao Site
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="py-8 bg-forest-light border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            © 2026 GR Paisagismo & Consultoria Ambiental. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
