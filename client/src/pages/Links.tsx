/**
 * DESIGN: Premium Minimalista com Elemento Memorável
 * Foto grande como ponto focal + borda com gradiente animado sutil
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Globe,
  Image,
  BookOpen,
  Star,
  Send,
  Instagram,
  Mail,
  Eye,
  ArrowUpRight,
} from "lucide-react";

export default function Links() {
  const [highContrast, setHighContrast] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      subtitle: "Fale conosco",
      href: "https://wa.me/5511950583364?text=Olá! Vim pelo Instagram e gostaria de saber mais sobre os serviços de paisagismo.",
    },
    {
      icon: Globe,
      label: "Conheça o Site",
      subtitle: "Veja todos os serviços",
      href: "https://rezendepaisagismo.com.br",
    },
    {
      icon: Image,
      label: "Galeria de Projetos",
      subtitle: "Conheça nossos projetos",
      href: "https://rezendepaisagismo.com.br/galeria",
    },
    {
      icon: BookOpen,
      label: "Blog",
      subtitle: "Dicas de paisagismo",
      href: "https://rezendepaisagismo.com.br/blog",
    },
    {
      icon: Star,
      label: "Avalie no Google",
      subtitle: "Sua opinião importa",
      href: "https://g.page/r/CUfAeuZUcxLSEAE/review",
    },
    {
      icon: Send,
      label: "Solicitar Orçamento",
      subtitle: "Formulário rápido",
      href: "https://rezendepaisagismo.com.br#contato",
    },
    {
      icon: Mail,
      label: "E-mail",
      subtitle: "Acessível para surdos",
      href: "mailto:eng.gideanyrezende@gmail.com",
    },
  ];

  if (highContrast) {
    return (
      <div className="min-h-screen bg-black p-4 flex flex-col items-center justify-center">
        <button
          onClick={() => setHighContrast(false)}
          className="fixed top-4 right-4 z-50 p-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300"
          aria-label="Desativar modo alto contraste"
        >
          <Eye className="w-5 h-5" />
        </button>
        
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-yellow-400 overflow-hidden">
              <img 
                src="/images/gideany-foto-links.png" 
                alt="Gideany Rezende" 
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
            <h1 className="text-2xl font-bold text-yellow-300 mb-2">Gideany Rezende</h1>
            <p className="text-yellow-200 text-sm mb-2">Engenheira Agrônoma | Paisagista</p>
            <p className="text-yellow-400 text-xs">Todo o Estado de São Paulo</p>
          </div>
          
          <nav className="space-y-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full p-4 bg-black border-2 border-yellow-400 rounded-lg hover:bg-yellow-400/10"
              >
                <link.icon className="w-5 h-5 text-yellow-400 mr-4" />
                <div className="flex-1">
                  <span className="block text-yellow-300 font-medium">{link.label}</span>
                  <span className="block text-yellow-400/70 text-xs">{link.subtitle}</span>
                </div>
              </a>
            ))}
          </nav>
          
          <div className="mt-8 text-center">
            <a
              href="https://instagram.com/girpaisagismo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-300"
            >
              <Instagram className="w-5 h-5" />
              @girpaisagismo
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fundo base */}
      <div className="absolute inset-0 bg-[#070c07]" />
      
      {/* Imagem de fundo verde */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'url("/images/novo-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070c07]/80 via-[#070c07]/70 to-[#070c07]/90" />
      
      {/* Luz ambiente */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-emerald-800/20 rounded-full blur-[150px]" />

      {/* Botão de Alto Contraste */}
      <button
        onClick={() => setHighContrast(true)}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-white/5 text-white/40 hover:text-white/80 hover:bg-white/10 transition-all duration-300"
        aria-label="Ativar modo alto contraste"
      >
        <Eye className="w-4 h-4" />
      </button>

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          
          {/* Header com foto grande */}
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Avatar grande com borda animada */}
            <div className="relative inline-block mb-6">
              {/* Borda com gradiente animado */}
              <div className="absolute inset-[-3px] rounded-full overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #10b981, #059669, #047857, #065f46, #10b981)',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              
              {/* Espaçador */}
              <div className="absolute inset-[1px] rounded-full bg-[#070c07]" />
              
              {/* Foto */}
              <div className="relative w-36 h-36 rounded-full overflow-hidden">
                <img 
                  src="/images/gideany-foto-links.png" 
                  alt="Gideany Rezende" 
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
            </div>

            {/* Nome */}
            <h1 className="text-2xl font-light text-white tracking-wide mb-2">
              Gideany Rezende
            </h1>
            
            {/* Título */}
            <p className="text-white/40 text-sm tracking-widest uppercase mb-5">
              Engenheira Agrônoma • Paisagista
            </p>

            {/* Localização */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/20 rounded-full border border-emerald-800/30">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <p className="text-emerald-400/80 text-xs tracking-wide">
                Atendemos todo o Estado de São Paulo
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <nav className="space-y-2">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center w-full p-3.5 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Fundo do botão */}
                <motion.div 
                  className="absolute inset-0 bg-white/[0.03] border border-white/[0.05] rounded-xl"
                  animate={{
                    backgroundColor: hoveredIndex === index ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                    borderColor: hoveredIndex === index ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                  }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Linha lateral que aparece no hover */}
                <motion.div 
                  className="absolute left-0 top-2 bottom-2 w-0.5 bg-emerald-500 rounded-full"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ 
                    scaleY: hoveredIndex === index ? 1 : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Ícone */}
                <div className="relative z-10 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors duration-200">
                  <link.icon className="w-4 h-4 text-white/50 group-hover:text-emerald-400 transition-colors duration-200" />
                </div>
                
                {/* Texto */}
                <div className="relative z-10 flex-1 min-w-0">
                  <span className="block text-white/90 text-sm font-medium group-hover:text-white transition-colors duration-200">
                    {link.label}
                  </span>
                  <span className="block text-white/30 text-xs truncate group-hover:text-white/50 transition-colors duration-200">
                    {link.subtitle}
                  </span>
                </div>
                
                {/* Seta */}
                <motion.div 
                  className="relative z-10"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -5,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-emerald-400/70" />
                </motion.div>
              </motion.a>
            ))}
          </nav>

          {/* Divisor */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/5" />
            <div className="w-1 h-1 rounded-full bg-emerald-500/30" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/5" />
          </div>

          {/* Instagram */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://instagram.com/girpaisagismo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/50 hover:text-white/80 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm tracking-wide">@girpaisagismo</span>
            </a>
          </motion.div>

          {/* Footer */}
          <p className="mt-10 text-center text-white/15 text-[10px] tracking-widest uppercase">
            © 2026 Gideany Rezende
          </p>
        </div>
      </div>
    </div>
  );
}
