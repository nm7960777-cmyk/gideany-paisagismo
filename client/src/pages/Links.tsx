/**
 * DESIGN: O Link Mais Lindo do Brasil
 * Página de Links Premium para Instagram
 * Com acessibilidade: Alto Contraste + E-mail para surdos
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
  Sparkles,
  Mail,
  Eye,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Links() {
  const [highContrast, setHighContrast] = useState(false);

  const links = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      subtitle: "Fale conosco",
      href: "https://wa.me/5511950583364?text=Olá! Vim pelo Instagram e gostaria de saber mais sobre os serviços de paisagismo.",
      accent: "#22c55e",
      ariaLabel: "Enviar mensagem pelo WhatsApp",
    },
    {
      icon: Globe,
      label: "Conheça o Site",
      subtitle: "Veja todos os serviços",
      href: "https://rezendepaisagismo.com.br",
      accent: "#10b981",
      ariaLabel: "Visitar site completo com todos os serviços",
    },
    {
      icon: Image,
      label: "Galeria de Projetos",
      subtitle: "Conheça nossos projetos",
      href: "https://rezendepaisagismo.com.br/galeria",
      accent: "#14b8a6",
      ariaLabel: "Ver galeria de projetos de paisagismo",
    },
    {
      icon: BookOpen,
      label: "Blog",
      subtitle: "Dicas de paisagismo",
      href: "https://rezendepaisagismo.com.br/blog",
      accent: "#059669",
      ariaLabel: "Ler artigos e dicas de paisagismo no blog",
    },
    {
      icon: Star,
      label: "Avalie no Google",
      subtitle: "Sua opinião importa",
      href: "https://g.page/r/CUfAeuZUcxLSEAE/review",
      accent: "#f59e0b",
      ariaLabel: "Deixar avaliação no Google",
    },
    {
      icon: Send,
      label: "Solicitar Orçamento",
      subtitle: "Formulário rápido",
      href: "https://rezendepaisagismo.com.br/#contato",
      accent: "#34d399",
      ariaLabel: "Preencher formulário para solicitar orçamento",
    },
    {
      icon: Mail,
      label: "E-mail",
      subtitle: "Acessível para surdos",
      href: "mailto:eng.gideanyrezende@gmail.com?subject=Contato pelo Instagram&body=Olá! Vim pelo Instagram e gostaria de saber mais sobre os serviços de paisagismo.",
      accent: "#6366f1",
      ariaLabel: "Enviar e-mail - opção acessível para pessoas surdas",
    },
  ];

  // Estilos para modo alto contraste
  const contrastStyles = highContrast ? {
    bg: "bg-black",
    text: "text-yellow-300",
    textSecondary: "text-yellow-200",
    border: "border-yellow-400",
    buttonBg: "bg-black border-2 border-yellow-400",
    buttonText: "text-yellow-300",
  } : {
    bg: "",
    text: "text-white",
    textSecondary: "text-amber-200/90",
    border: "border-white/10",
    buttonBg: "bg-white/[0.03]",
    buttonText: "text-white",
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${highContrast ? 'bg-black' : ''}`}>
      {/* Fundo com gradiente rico - oculto em alto contraste */}
      {!highContrast && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#030a03] via-[#071a07] to-[#0a1f0a]" />
          
          {/* Imagem de fundo sutil */}
          <div 
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'url("/images/novo-hero.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)',
            }}
          />
          
          {/* Overlay com padrão */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
          
          {/* Partículas de luz */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Brilhos decorativos */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-5 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-40 left-5 w-40 h-40 bg-emerald-400/5 rounded-full blur-3xl" />
        </>
      )}

      {/* Botão de Alto Contraste - Acessibilidade */}
      <button
        onClick={() => setHighContrast(!highContrast)}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 ${
          highContrast 
            ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
            : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
        }`}
        aria-label={highContrast ? "Desativar modo alto contraste" : "Ativar modo alto contraste para melhor visibilidade"}
        title="Alto Contraste"
      >
        <Eye className="w-5 h-5" />
      </button>

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-10">
        <motion.div
          className="w-full max-w-md"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          role="main"
          aria-label="Links de contato de Gideany Rezende Paisagismo"
        >
          {/* Header com foto/logo */}
          <motion.div className="text-center mb-8" variants={fadeIn}>
            {/* Avatar com efeito glassmorphism */}
            <div className="relative inline-block mb-6">
              {/* Anel externo brilhante */}
              {!highContrast && (
                <motion.div
                  className="absolute inset-[-6px] rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b 0%, #10b981 50%, #f59e0b 100%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              )}
              
              {/* Container da foto */}
              <div className={`relative w-32 h-32 rounded-full p-1 ${highContrast ? 'bg-yellow-400' : 'bg-[#0a1a0a]'}`}>
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/images/gideany-foto-links.png" 
                    alt="Foto de Gideany Rezende, Engenheira Agrônoma e Paisagista, sorrindo em ambiente com plantas" 
                    className="w-full h-full object-cover object-[center_25%]"
                  />
                </div>
              </div>
              
              {/* Brilho */}
              {!highContrast && (
                <div className="absolute top-3 right-3 w-4 h-4">
                  <Sparkles className="w-4 h-4 text-amber-400/60" aria-hidden="true" />
                </div>
              )}
            </div>

            {/* Nome com efeito */}
            <h1 className={`text-3xl font-serif font-bold mb-2 tracking-wide ${contrastStyles.text}`}>
              Gideany Rezende
            </h1>
            
            {/* Título profissional elegante */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {!highContrast && <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500/50" aria-hidden="true" />}
              <p className={`text-sm tracking-wider ${contrastStyles.textSecondary}`}>
                Engenheira Agrônoma | Paisagista
              </p>
              {!highContrast && <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500/50" aria-hidden="true" />}
            </div>

            {/* Badge de localização premium */}
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border ${
              highContrast 
                ? 'bg-black border-yellow-400' 
                : 'bg-white/5 backdrop-blur-sm border-white/10'
            }`}>
              <div className={`w-2 h-2 rounded-full ${highContrast ? 'bg-yellow-400' : 'bg-emerald-400 animate-pulse'}`} aria-hidden="true" />
              <span className={`text-xs tracking-wide ${highContrast ? 'text-yellow-300' : 'text-emerald-300/90'}`}>
                Atendemos todo o Estado de São Paulo
              </span>
            </div>
          </motion.div>

          {/* Links com design premium */}
          <motion.nav className="space-y-3" variants={staggerContainer} aria-label="Links de navegação">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center w-full p-4 rounded-2xl overflow-hidden transition-all duration-500 ${
                  highContrast ? 'bg-black border-2 border-yellow-400 hover:bg-yellow-400/10' : ''
                }`}
                variants={buttonVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={link.ariaLabel}
              >
                {/* Fundo do botão com glassmorphism */}
                {!highContrast && (
                  <>
                    <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.15]" />
                    
                    {/* Brilho lateral no hover */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: link.accent }}
                    />
                    
                    {/* Gradiente de brilho */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </>
                )}
                
                {/* Ícone */}
                <div 
                  className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-500 group-hover:scale-110 ${
                    highContrast ? 'bg-yellow-400/20 border border-yellow-400' : ''
                  }`}
                  style={!highContrast ? { 
                    backgroundColor: `${link.accent}20`,
                    boxShadow: `0 0 20px ${link.accent}10`,
                  } : {}}
                  aria-hidden="true"
                >
                  <link.icon 
                    className="w-5 h-5 transition-colors duration-500" 
                    style={{ color: highContrast ? '#facc15' : link.accent }}
                  />
                </div>
                
                {/* Texto */}
                <div className="relative z-10 flex-1">
                  <span className={`block font-medium text-base transition-colors ${
                    highContrast ? 'text-yellow-300 group-hover:text-yellow-200' : 'text-white group-hover:text-white'
                  }`}>
                    {link.label}
                  </span>
                  <span className={`block text-xs mt-0.5 transition-colors ${
                    highContrast ? 'text-yellow-400/70' : 'text-white/40 group-hover:text-white/60'
                  }`}>
                    {link.subtitle}
                  </span>
                </div>
                
                {/* Seta animada */}
                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                  <svg 
                    className="w-5 h-5" 
                    style={{ color: highContrast ? '#facc15' : link.accent }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.nav>

          {/* Instagram elegante */}
          <motion.div className="mt-8 text-center" variants={fadeIn}>
            <a
              href="https://instagram.com/girpaisagismo"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-500 group ${
                highContrast 
                  ? 'bg-black border-yellow-400 hover:bg-yellow-400/10' 
                  : 'bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border-white/10 hover:border-white/20'
              }`}
              aria-label="Seguir no Instagram @girpaisagismo"
            >
              <Instagram className={`w-5 h-5 group-hover:scale-110 transition-transform ${
                highContrast ? 'text-yellow-400' : 'text-pink-400'
              }`} />
              <span className={`transition-colors ${
                highContrast ? 'text-yellow-300' : 'text-white/70 group-hover:text-white'
              }`}>
                @girpaisagismo
              </span>
            </a>
          </motion.div>

          {/* Footer minimalista */}
          <motion.p 
            className={`mt-8 text-center text-xs tracking-wider ${
              highContrast ? 'text-yellow-400/60' : 'text-white/20'
            }`}
            variants={fadeIn}
          >
            © 2026 Gideany Rezende Paisagismo
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
