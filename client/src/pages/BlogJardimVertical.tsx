/**
 * DESIGN SYSTEM: Tropical Luxe
 * Artigo: Como Fazer um Jardim Vertical em Casa
 */

import { Link } from "wouter";
import { useCanonical } from "@/hooks/useCanonical";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogJardimVertical() {
  useCanonical('/blog/jardim-vertical', {
    title: "Como Fazer um Jardim Vertical | GR Paisagismo",
    description:
      "Guia com os principais cuidados para planejar um jardim vertical: local, estrutura, drenagem, espécies, substrato, irrigação e manutenção.",
    image: "/images/blog-jardim-vertical-correto.jpg",
    type: "article",
  });
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-dark/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo_gr.png"
              alt="GR Paisagismo & Consultoria Ambiental"
              className="h-10 w-auto"
            />
            <span className="text-white font-cinzel text-base tracking-wide hidden sm:block">
              GR <span className="text-gold">Paisagismo & Consultoria Ambiental</span>
            </span>
          </Link>
          <Button asChild variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero do Artigo */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-emerald-dark to-emerald-dark/90">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-gold">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-gold">Blog</Link>
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
                GR Paisagismo
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
              Jardins verticais são uma solução criativa para inserir vegetação em ambientes com pouco espaço horizontal.
              Além de contribuir para a composição do ambiente, aproximam a rotina do contato com as plantas.
              Neste guia, apresentamos os principais pontos a considerar antes da implantação.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              O Que é um Jardim Vertical?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Um jardim vertical é uma estrutura que permite cultivar plantas na vertical, aproveitando paredes, 
              muros ou painéis. Pode ser feito com diversos materiais como pallets, garrafas PET, vasos modulares, 
              feltro ou estruturas metálicas. Pode ser utilizado em apartamentos, varandas, áreas de serviço e até
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
                <span><strong>Conforto visual:</strong> A vegetação contribui para uma composição mais acolhedora</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Conforto térmico:</strong> Dependendo da fachada e do sistema, a vegetação pode contribuir para reduzir a incidência direta de calor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Conforto acústico:</strong> Sistemas densos e bem projetados podem contribuir modestamente para a absorção sonora</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Bem-estar:</strong> O contato e o cuidado com as plantas podem favorecer momentos de relaxamento</span>
              </li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Passo a Passo: Como Fazer seu Jardim Vertical
            </h2>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              1. Escolha o Local
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Analise a iluminação do local, pois cada espécie apresenta necessidades diferentes de luz.
              Observe também a ventilação, a incidência de chuva e a facilidade de acesso para manutenção.
              A escolha das plantas deve ser feita de acordo com essas condições.
            </p>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              2. Defina a Estrutura
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Existem várias opções de estrutura para jardins verticais:
            </p>
            
            {/* Imagem de Pallet */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jv-pallet-novo.jpg"
                alt="Jardim vertical feito com pallet de madeira"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Jardim vertical com pallet: solução econômica e rústica</p>
            </div>
            
            <ul className="space-y-2 text-gray-700 mb-6 ml-4">
              <li><strong>Pallets:</strong> Econômicos e rústicos, ideais para áreas externas</li>
              <li><strong>Vasos modulares:</strong> Práticos e fáceis de instalar, vendidos em lojas de jardinagem</li>
              <li><strong>Feltro ou bolsas:</strong> Leves e flexíveis, ótimos para paredes internas</li>
              <li><strong>Treliças com vasos:</strong> Permitem criar composições personalizadas</li>
              <li><strong>Garrafas PET:</strong> Alternativa de reaproveitamento para composições pequenas e leves</li>
            </ul>
            
            {/* Imagem de Vasos Modulares */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jv-vasos-modulares2.jpg"
                alt="Vasos modulares para jardim vertical"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Vasos modulares: práticos e modernos para ambientes internos</p>
            </div>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              3. Prepare a Impermeabilização
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Antes da instalação, avalie a proteção da parede, a coleta da água excedente e a capacidade de
              suporte da estrutura. O sistema de impermeabilização deve ser adequado ao local e executado de
              modo a não bloquear a drenagem; em instalações maiores, recomenda-se avaliação profissional.
            </p>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              4. Escolha as Plantas Certas
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A escolha das plantas é crucial para o sucesso do seu jardim vertical. Considere:
            </p>
            
            {/* Imagem de Plantas Pendentes */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jv-plantas-pendentes.jpg"
                alt="Plantas pendentes ideais para jardim vertical"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Exemplos de folhagens para sistemas verticais, conforme a luminosidade disponível</p>
            </div>
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
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Antes de escolher as espécies, verifique também o porte adulto e a segurança para
              crianças e animais, pois algumas plantas ornamentais podem ser tóxicas quando ingeridas.
            </p>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              5. Prepare o Substrato
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Use um substrato leve, drenável e compatível com as espécies escolhidas. A composição varia
              conforme o sistema, a retenção de umidade necessária e a frequência de irrigação; por isso,
              proporções fixas não atendem igualmente a todos os jardins verticais.
            </p>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              6. Instale o Sistema de Irrigação
            </h3>
            
            {/* Imagem de Irrigação */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jv-irrigacao.jpg"
                alt="Sistema de irrigação por gotejamento em jardim vertical"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Sistema de irrigação por gotejamento: praticidade na manutenção</p>
            </div>
            
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
                <span><strong>Rega:</strong> Verifique a umidade do substrato e ajuste a frequência à espécie, ao clima e à exposição do local</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Adubação:</strong> Escolha produto, dose e frequência conforme as espécies, o substrato e as instruções do fabricante</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Poda:</strong> Remova folhas secas e faça podas de formação quando necessário</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Pragas:</strong> Inspecione regularmente e identifique a causa antes de aplicar qualquer produto ou método de controle</span>
              </li>
            </ul>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-12">
              <h3 className="text-xl font-cinzel text-emerald-dark mb-4">
                Precisa de Ajuda Profissional?
              </h3>
              <p className="text-gray-700 mb-4">
                Se você quer um jardim vertical personalizado, projetado especialmente para seu espaço e
                estilo de vida, fale com nossa equipe. Desenvolvemos projetos sob medida para diferentes espaços
                em São Roque, Cotia, Sorocaba e em todo o Estado de São Paulo.
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
            <Link href="/blog/horta-apartamento" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                  Horta em Apartamento: O Guia Completo
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Aprenda a cultivar temperos e hortaliças mesmo em espaços pequenos.
                </p>
            </Link>
            <Link href="/blog/jardim-pequeno" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                  Jardim Pequeno: 10 Ideias de Canteiros
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Ideias para planejar canteiros em espaços compactos.
                </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-dark py-8 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="text-white/60 hover:text-gold transition-colors">
            Voltar ao Site
          </Link>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/5511950583364"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a GR pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
