/**
 * DESIGN SYSTEM: Tropical Luxe
 * Página de Links para Instagram (estilo Linktree)
 */

import { motion } from "framer-motion";
import {
  MessageCircle,
  Globe,
  Image,
  BookOpen,
  Star,
  MapPin,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function Links() {
  const links = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/5511950583364?text=Olá! Vim pelo Instagram e gostaria de saber mais sobre os serviços de paisagismo.",
      external: true,
    },
    {
      icon: Globe,
      label: "Conheça o Site",
      href: "https://rezendepaisagismo.com.br",
      external: true,
    },
    {
      icon: Image,
      label: "Galeria de Projetos",
      href: "https://rezendepaisagismo.com.br/galeria",
      external: true,
    },
    {
      icon: BookOpen,
      label: "Blog",
      href: "https://rezendepaisagismo.com.br/blog",
      external: true,
    },
    {
      icon: Star,
      label: "Avalie no Google",
      href: "https://g.page/r/CUfAeuZUcxLSEAE/review",
      external: true,
    },
    {
      icon: MapPin,
      label: "Área de Atendimento",
      href: "https://rezendepaisagismo.com.br/#contato",
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f0a] via-[#0d2818] to-[#0a1f0a] flex flex-col items-center justify-center px-4 py-12">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Avatar/Logo */}
        <motion.div
          className="flex flex-col items-center mb-8"
          variants={fadeInUp}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center mb-4 ring-4 ring-emerald-500/30 shadow-lg shadow-emerald-900/50">
            <span className="text-3xl font-serif text-amber-100 font-bold">GR</span>
          </div>
          <h1 className="text-2xl font-serif text-amber-100 font-semibold tracking-wide">
            Gideany Rezende
          </h1>
          <p className="text-emerald-400 text-sm mt-1 font-medium">
            Paisagismo
          </p>
          <p className="text-amber-100/60 text-xs mt-2 text-center">
            Engenheira Paisagista | CREA-SP
          </p>
          <p className="text-amber-100/50 text-xs">
            Todo o Estado de São Paulo
          </p>
        </motion.div>

        {/* Links */}
        <motion.div className="space-y-3" variants={staggerContainer}>
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 w-full px-6 py-4 bg-gradient-to-r from-emerald-900/80 to-emerald-800/60 hover:from-emerald-800/90 hover:to-emerald-700/70 border border-emerald-700/40 hover:border-emerald-600/60 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-emerald-900/30 hover:scale-[1.02]"
              variants={fadeInUp}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-700/50 flex items-center justify-center group-hover:bg-emerald-600/60 transition-colors">
                <link.icon className="w-5 h-5 text-amber-200" />
              </div>
              <span className="text-amber-100 font-medium text-base">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-10 text-center"
          variants={fadeInUp}
        >
          <p className="text-emerald-600/60 text-xs">
            © 2026 Gideany Rezende Paisagismo
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
