/**
 * DESIGN SYSTEM: Tropical Luxe Premium
 * Página de Links para Instagram - Versão Elegante
 */

import { motion } from "framer-motion";
import {
  MessageCircle,
  Globe,
  Image,
  BookOpen,
  Star,
  Send,
  Instagram,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

export default function Links() {
  const links = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      subtitle: "Fale conosco",
      href: "https://wa.me/5511950583364?text=Olá! Vim pelo Instagram e gostaria de saber mais sobre os serviços de paisagismo.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      label: "Conheça o Site",
      subtitle: "Veja todos os serviços",
      href: "https://rezendepaisagismo.com.br",
      gradient: "from-emerald-600 to-emerald-700",
    },
    {
      icon: Image,
      label: "Galeria de Projetos",
      subtitle: "Conheça nossos projetos",
      href: "https://rezendepaisagismo.com.br/galeria",
      gradient: "from-teal-600 to-teal-700",
    },
    {
      icon: BookOpen,
      label: "Blog",
      subtitle: "Dicas de paisagismo",
      href: "https://rezendepaisagismo.com.br/blog",
      gradient: "from-emerald-700 to-emerald-800",
    },
    {
      icon: Star,
      label: "Avalie no Google",
      subtitle: "Sua opinião importa",
      href: "https://g.page/r/CUfAeuZUcxLSEAE/review",
      gradient: "from-amber-500 to-amber-600",
    },
    {
      icon: Send,
      label: "Solicitar Orçamento",
      subtitle: "Formulário rápido",
      href: "https://rezendepaisagismo.com.br/#contato",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050d05] flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Padrão de fundo elegante */}
      <div className="absolute inset-0">
        {/* Linhas douradas decorativas */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        
        {/* Círculos decorativos sutis */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-emerald-500/5 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-amber-500/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-emerald-500/3 rounded-full" />
        
        {/* Gradientes de luz */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-amber-500/3 rounded-full blur-[80px]" />
      </div>

      {/* Ornamentos de canto */}
      <svg className="absolute top-4 left-4 w-16 h-16 text-amber-500/10" viewBox="0 0 100 100" fill="none">
        <path d="M0 50 Q0 0 50 0" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M10 50 Q10 10 50 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </svg>
      <svg className="absolute top-4 right-4 w-16 h-16 text-amber-500/10 rotate-90" viewBox="0 0 100 100" fill="none">
        <path d="M0 50 Q0 0 50 0" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M10 50 Q10 10 50 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </svg>
      <svg className="absolute bottom-4 left-4 w-16 h-16 text-amber-500/10 -rotate-90" viewBox="0 0 100 100" fill="none">
        <path d="M0 50 Q0 0 50 0" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M10 50 Q10 10 50 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </svg>
      <svg className="absolute bottom-4 right-4 w-16 h-16 text-amber-500/10 rotate-180" viewBox="0 0 100 100" fill="none">
        <path d="M0 50 Q0 0 50 0" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M10 50 Q10 10 50 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </svg>

      <motion.div
        className="relative z-10 w-full max-w-sm"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Logo e informações */}
        <motion.div
          className="flex flex-col items-center mb-8"
          variants={fadeInUp}
        >
          {/* Logo com moldura elegante */}
          <div className="relative mb-5">
            {/* Moldura externa dourada */}
            <div className="absolute inset-[-8px] rounded-full border border-amber-500/30" />
            <div className="absolute inset-[-4px] rounded-full border border-emerald-500/20" />
            
            {/* Container da logo */}
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 p-1 shadow-2xl shadow-emerald-900/50">
              <div className="w-full h-full rounded-full bg-[#0a1a0a] flex items-center justify-center overflow-hidden border border-emerald-700/30">
                <img 
                  src="/images/logo_gr.png" 
                  alt="Gideany Rezende Paisagismo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
            
            {/* Brilho decorativo */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-amber-400/40 rounded-full blur-sm" />
          </div>
          
          {/* Nome */}
          <h1 className="text-2xl font-serif text-white font-semibold tracking-wide text-center">
            Gideany Rezende
          </h1>
          
          {/* Linha decorativa */}
          <div className="flex items-center gap-3 my-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
            <div className="w-1.5 h-1.5 bg-amber-500/50 rotate-45" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          
          {/* Título profissional */}
          <p className="text-amber-200/80 text-sm tracking-wide text-center">
            Engenheira Agrônoma | Paisagista
          </p>
          
          {/* Localização - integrada com badge */}
          <div className="mt-3 px-4 py-1.5 bg-emerald-900/30 rounded-full border border-emerald-700/20">
            <p className="text-emerald-400/70 text-xs tracking-wide">
              Atendemos todo o Estado de São Paulo
            </p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div className="space-y-3" variants={staggerContainer}>
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 w-full px-5 py-3.5 bg-gradient-to-r from-emerald-950/80 to-emerald-900/60 hover:from-emerald-900/90 hover:to-emerald-800/70 border border-emerald-800/30 hover:border-emerald-600/50 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-900/30 overflow-hidden"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Linha dourada superior */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              {/* Ícone */}
              <div className={`relative w-11 h-11 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <link.icon className="w-5 h-5 text-white" />
              </div>
              
              {/* Texto */}
              <div className="flex flex-col flex-1">
                <span className="text-white font-medium text-sm leading-tight">
                  {link.label}
                </span>
                <span className="text-emerald-400/50 text-xs mt-0.5">
                  {link.subtitle}
                </span>
              </div>

              {/* Seta elegante */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <svg className="w-4 h-4 text-amber-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Separador elegante */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-700/30" />
          <div className="w-1 h-1 bg-amber-500/30 rounded-full" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-700/30" />
        </div>

        {/* Instagram */}
        <motion.div
          className="flex justify-center"
          variants={fadeInUp}
        >
          <a
            href="https://instagram.com/girpaisagismo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-800/30 hover:border-emerald-600/50 text-emerald-400/70 hover:text-emerald-300 transition-all duration-300 text-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>@girpaisagismo</span>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-6 text-center"
          variants={fadeInUp}
        >
          <p className="text-emerald-900/60 text-xs tracking-wide">
            © 2026 Gideany Rezende Paisagismo
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
