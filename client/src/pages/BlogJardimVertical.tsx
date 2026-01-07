/**
 * DESIGN SYSTEM: Tropical Luxe
 * Artigo: Como Fazer um Jardim Vertical em Casa
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogJardimVertical() {
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
          <Link href="/blog">
            <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero do Artigo */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-emerald-dark to-emerald-dark/90">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/"><a className="hover:text-gold">Início</a></Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog"><a className="hover:text-gold">Blog</a></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold">Jardim Vertical</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="bg-gold text-emerald-dark px-4 py-1 rounded-full text-sm font-medium">
              Jardim Vertical
            </span>
            <h1 className="text-3xl md:text-5xl font-cinzel text-white mt-6 mb-6 leading-tight">
              Como Fazer um Jardim Vertical em Casa: Passo a Passo Completo
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Gideany Rezende
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                10 de Janeiro de 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min de leitura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Imagem Principal */}
      <div className="container mx-auto px-4 -mt-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <img
            src="/images/blog-jardim-vertical-correto.jpg"
            alt="Jardim Vertical em Casa"
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* Conteúdo do Artigo */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Jardins verticais são uma solução criativa e elegante para quem deseja trazer mais verde para dentro de casa, 
              especialmente em espaços reduzidos. Além de embelezar o ambiente, eles purificam o ar e trazem bem-estar. 
              Neste guia completo, vou te ensinar como criar seu próprio jardim vertical, mesmo que você nunca tenha 
              mexido com plantas antes.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              O Que é um Jardim Vertical?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Um jardim vertical é uma estrutura que permite cultivar plantas na vertical, aproveitando paredes, 
              muros ou painéis. Pode ser feito com diversos materiais como pallets, garrafas PET, vasos modulares, 
              feltro ou estruturas metálicas. É perfeito para apartamentos, varandas, áreas de serviço e até 
              ambientes internos com boa iluminação.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Benefícios do Jardim Vertical
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Otimização de espaço:</strong> Ideal para quem tem pouco espaço horizontal disponível</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Purificação do ar:</strong> Plantas filtram toxinas e liberam oxigênio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Isolamento térmico:</strong> Ajuda a manter a temperatura do ambiente mais agradável</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Redução de ruídos:</strong> As plantas absorvem parte dos sons externos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Bem-estar:</strong> O contato com a natureza reduz o estresse e melhora o humor</span>
              </li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Passo a Passo: Como Fazer seu Jardim Vertical
            </h2>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              1. Escolha o Local
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Analise a iluminação do local. A maioria das plantas precisa de pelo menos 4 horas de luz indireta 
              por dia. Evite locais com sol direto intenso (pode queimar as folhas) ou muito escuros. 
              Varandas, sacadas e paredes próximas a janelas são ótimas opções.
            </p>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              2. Defina a Estrutura
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Existem várias opções de estrutura para jardins verticais:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6 ml-4">
              <li><strong>Pallets:</strong> Econômicos e rústicos, ideais para áreas externas</li>
              <li><strong>Vasos modulares:</strong> Práticos e fáceis de instalar, vendidos em lojas de jardinagem</li>
              <li><strong>Feltro ou bolsas:</strong> Leves e flexíveis, ótimos para paredes internas</li>
              <li><strong>Treliças com vasos:</strong> Permitem criar composições personalizadas</li>
              <li><strong>Garrafas PET:</strong> Sustentável e econômico, perfeito para hortas</li>
            </ul>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              3. Prepare a Impermeabilização
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Se o jardim vertical for instalado em parede interna, é essencial impermeabilizar a área para 
              evitar infiltrações. Use mantas impermeabilizantes ou plástico grosso entre a estrutura e a parede. 
              Isso protege sua casa e garante a durabilidade do projeto.
            </p>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              4. Escolha as Plantas Certas
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A escolha das plantas é crucial para o sucesso do seu jardim vertical. Considere:
            </p>
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">Para ambientes com pouca luz:</h4>
              <p className="text-gray-700">Jiboia, Samambaia, Lírio-da-paz, Espada-de-são-jorge, Peperômia</p>
            </div>
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">Para ambientes com luz média:</h4>
              <p className="text-gray-700">Filodendro, Singônio, Costela-de-adão, Antúrio, Begônia</p>
            </div>
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">Para ambientes com bastante luz:</h4>
              <p className="text-gray-700">Suculentas, Cactos, Hera, Lambari, Tradescantia</p>
            </div>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              5. Prepare o Substrato
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Use um substrato leve e bem drenado. Uma boa mistura é: 50% de terra vegetal, 30% de húmus de 
              minhoca e 20% de perlita ou vermiculita. Isso garante nutrientes e evita que a água fique 
              empoçada nas raízes.
            </p>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              6. Instale o Sistema de Irrigação
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para jardins verticais maiores, considere instalar um sistema de irrigação por gotejamento. 
              Para projetos menores, a rega manual funciona bem. A dica é regar pela manhã ou final da tarde, 
              evitando o sol forte. Verifique a umidade do substrato antes de regar novamente.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Manutenção do Jardim Vertical
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Rega:</strong> 2 a 3 vezes por semana no verão, 1 vez por semana no inverno</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Adubação:</strong> A cada 2 meses com adubo orgânico ou NPK 10-10-10</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Poda:</strong> Remova folhas secas e faça podas de formação quando necessário</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Pragas:</strong> Inspecione regularmente e trate com óleo de neem se necessário</span>
              </li>
            </ul>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-12">
              <h3 className="text-xl font-cinzel text-emerald-dark mb-4">
                Precisa de Ajuda Profissional?
              </h3>
              <p className="text-gray-700 mb-4">
                Se você quer um jardim vertical personalizado, projetado especialmente para seu espaço e 
                estilo de vida, entre em contato comigo. Faço projetos sob medida para residências e 
                empresas em São Roque, Cotia, Sorocaba e todo Estado de SP.
              </p>
              <a
                href="https://wa.me/5511950583364?text=Olá! Vi o artigo sobre jardim vertical e gostaria de um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gold hover:bg-gold/90 text-emerald-dark font-semibold">
                  Solicitar Orçamento pelo WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Artigos Relacionados */}
      <section className="py-16 bg-emerald-dark/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-cinzel text-emerald-dark text-center mb-8">
            Leia Também
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/blog/horta-apartamento">
              <a className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                  Horta em Apartamento: O Guia Completo
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Aprenda a cultivar temperos e hortaliças mesmo em espaços pequenos.
                </p>
              </a>
            </Link>
            <Link href="/blog/jardim-pequeno">
              <a className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                  Jardim Pequeno: 10 Ideias de Canteiros
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Transforme qualquer cantinho em um refúgio verde e relaxante.
                </p>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-dark py-8 border-t border-gold/20">
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
