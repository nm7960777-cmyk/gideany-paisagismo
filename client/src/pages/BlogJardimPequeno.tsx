/**
 * DESIGN SYSTEM: Tropical Luxe
 * Artigo: Jardim Pequeno em Casa - 10 Ideias Simples de Canteiros
 */

import { Link } from "wouter";
import { useCanonical } from "@/hooks/useCanonical";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogJardimPequeno() {
  useCanonical('/blog/jardim-pequeno', {
    title: "Jardim Pequeno: 10 Ideias de Canteiros | GR Paisagismo",
    description:
      "Dez ideias para planejar canteiros em espaços pequenos, considerando iluminação, drenagem, porte das espécies e manutenção.",
    image: "/images/blog-jardim-pequeno-principal-novo.jpg",
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
            <span className="text-gold">Jardim Pequeno</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="bg-gold text-emerald-dark px-4 py-1 rounded-full text-sm font-medium">
              Jardim Pequeno
            </span>
            <h1 className="text-3xl md:text-5xl font-cinzel text-white mt-6 mb-6 leading-tight">
              Jardim Pequeno em Casa: 10 Ideias Simples de Canteiros para Transformar Seu Espaço
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                GR Paisagismo
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                05 de Janeiro de 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min de leitura
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
            src="/images/blog-jardim-pequeno-principal-novo.jpg"
            alt="Jardim Pequeno em Casa"
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
              Ter um jardim em casa não exige um quintal enorme. Com criatividade e planejamento,
              pequenos espaços podem receber vegetação de forma funcional e acolhedora.
              Neste artigo, apresentamos 10 ideias de canteiros para áreas compactas.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Por Que Investir em um Jardim Pequeno?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Um jardim pequeno pode qualificar o uso do espaço, melhorar a composição visual e
              aproximar a rotina do contato com a natureza. O cuidado com as plantas também pode
              favorecer momentos de relaxamento, sem substituir cuidados profissionais de saúde.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              10 Ideias de Canteiros para Espaços Pequenos
            </h2>

            {/* Ideia 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                1. Canteiro Linear ao Longo do Muro
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Aproveite a extensão do muro criando um canteiro estreito (30-50cm de largura). 
                Use plantas de diferentes alturas: palmeiras ou dracenas no fundo, arbustos no 
                meio e forrações na frente. Isso cria profundidade visual sem ocupar muito espaço.
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Plantas sugeridas: Palmeira-ráfis, Clúsia, Moréia, Grama-amendoim
              </p>
            </div>

            {/* Ideia 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                2. Jardim de Pedras com Suculentas
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pode ser uma alternativa para quem busca manutenção menos frequente. Crie um canteiro
                com pedras decorativas e espécies adaptadas a ambientes mais secos. A necessidade de
                água e cuidados ainda varia conforme a espécie, o clima e a drenagem.
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Plantas sugeridas: Echeveria, Sedum, Agave, Cactos variados
              </p>
            </div>
            
            {/* Imagem de Canteiro com Pedras */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jp-canteiro-pedras.jpg"
                alt="Jardim de pedras com suculentas"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Jardim de pedras: baixa manutenção e visual moderno</p>
            </div>

            {/* Ideia 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                3. Canteiro Elevado com Madeira
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Canteiros elevados podem ser usados em espaços com piso cimentado. Escolha uma
                estrutura resistente à umidade, com drenagem e dimensões compatíveis com as raízes.
                Para cultivo de alimentos, utilize materiais adequados a essa finalidade.
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Ideal para: Temperos, hortaliças, flores anuais
              </p>
            </div>
            
            {/* Imagem de Canteiro Elevado */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jp-canteiro-elevado.jpg"
                alt="Canteiro elevado com madeira"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Canteiro elevado: prático para temperos e hortaliças</p>
            </div>

            {/* Ideia 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                4. Jardim Tropical Compacto
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Espaços compactos podem receber uma composição tropical. Use espécies de porte
                compatível com a área e combine folhagens de diferentes texturas, sempre considerando
                luminosidade, ventilação e espaço para o desenvolvimento das plantas.
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Plantas sugeridas: Palmeira-areca, Costela-de-adão, Filodendro, Bromélia
              </p>
            </div>
            
            {/* Imagem de Jardim Tropical Compacto */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jp-tropical-compacto.jpg"
                alt="Jardim tropical compacto"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Jardim tropical: palmeiras, filodendros e bromélias em espaço compacto</p>
            </div>

            {/* Ideia 5 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                5. Canteiro em Formato de Ilha
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Se você tem um quintal pequeno, crie uma "ilha" verde no centro. Pode ser 
                redonda, oval ou orgânica. Plante uma árvore pequena no centro (como jabuticabeira 
                ou pitangueira) e forrações ao redor.
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Plantas sugeridas: Jabuticabeira, Pitangueira, Grama-esmeralda, Singônio
              </p>
            </div>

            {/* Ideia 6 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                6. Jardim Vertical no Muro
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Quando o espaço horizontal é limitado, treliças, vasos de parede ou painéis
                verticais podem ampliar a área de plantio. Antes da instalação, verifique a
                capacidade de suporte, a drenagem e a proteção da parede.
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Plantas sugeridas: Jiboia, Samambaia, Peperômia, Hera
              </p>
            </div>

            {/* Ideia 7 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                7. Canteiro com Gramíneas Ornamentais
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Gramíneas como capim-do-texas e penisetum trazem movimento e leveza ao jardim. 
                Crie um canteiro com diferentes espécies de gramíneas, variando alturas e cores. 
                O efeito é leve e, com espécies adequadas ao local, pode simplificar a manutenção.
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Plantas sugeridas: Capim-do-texas, Penisetum, Festuca, Carex
              </p>
            </div>
            
            {/* Imagem de Gramíneas Ornamentais */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jp-gramineas.jpg"
                alt="Canteiro com gramíneas ornamentais"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Gramíneas ornamentais: movimento e leveza no jardim</p>
            </div>

            {/* Ideia 8 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                8. Jardim Sensorial com Aromáticas
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Crie um canteiro que estimule os sentidos com plantas aromáticas. Agrupe espécies
                com necessidades semelhantes de luz, água e solo; algumas podem fornecer temperos
                para a cozinha e flores visitadas por polinizadores.
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Plantas sugeridas: Lavanda, Alecrim, Hortelã, Manjericão, Sálvia
              </p>
            </div>

            {/* Ideia 9 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                9. Canteiro Zen com Bambu
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Inspire-se nos jardins japoneses. Use bambu-mossô (em vasos para controlar o 
                crescimento), pedras, areia branca e uma lanterna japonesa. O resultado é um 
                espaço de meditação e paz.
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Elementos: Bambu-mossô, Pedras, Areia branca, Lanterna japonesa, Bonsai
              </p>
            </div>

            {/* Ideia 10 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                10. Canteiro de Flores Coloridas
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Para quem gosta de cor, planeje espécies com épocas de floração diferentes.
                A continuidade das flores dependerá do clima, das espécies e do manejo; perenes
                e anuais podem ser combinadas conforme o espaço disponível.
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Plantas sugeridas: Lavanda, Gazânia, Petúnia, Tagete, Begônia, Impatiens
              </p>
            </div>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Dicas Importantes para Canteiros Pequenos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              As espécies citadas são referências de composição. A escolha final deve considerar
              clima, luminosidade, drenagem, porte adulto e segurança para crianças e animais,
              pois algumas plantas ornamentais podem ser tóxicas quando ingeridas.
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Prepare o solo:</strong> Avalie drenagem, textura e fertilidade antes de definir correções e adubação</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Considere a drenagem:</strong> Evite áreas onde a água empoça</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Respeite o espaçamento:</strong> Plantas apertadas competem por nutrientes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Use bordas:</strong> Pedras, tijolos ou madeira delimitam o canteiro</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Cubra o solo:</strong> Coberturas adequadas ajudam a conservar a umidade e a reduzir plantas espontâneas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Planeje a manutenção:</strong> Escolha plantas adequadas ao tempo que você tem</span>
              </li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Erros Comuns em Jardins Pequenos
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Plantar árvores grandes:</strong> Raízes podem danificar estruturas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Ignorar a iluminação:</strong> Plantas de sol em sombra não prosperam</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Misturar estilos demais:</strong> Mantenha uma linha visual coerente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Esquecer da manutenção:</strong> Todo jardim precisa de cuidados regulares</span>
              </li>
            </ul>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-12">
              <h3 className="text-xl font-cinzel text-emerald-dark mb-4">
                Quer um Projeto Personalizado para Seu Espaço?
              </h3>
              <p className="text-gray-700 mb-4">
                Cada espaço é único e merece um projeto pensado especialmente para ele. Se você 
                quer transformar seu quintal, varanda ou área externa em um jardim dos sonhos, 
                entre em contato. Desenvolvemos projetos sob medida em São Roque, Cotia, Sorocaba e
                em todo o Estado de São Paulo.
              </p>
              <a
                href="https://wa.me/5511950583364?text=Olá! Vi o artigo sobre jardim pequeno e gostaria de um orçamento para meu espaço."
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
            <Link href="/blog/jardim-vertical" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                  Como Fazer um Jardim Vertical em Casa
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Aprenda a criar um jardim vertical mesmo em espaços pequenos.
                </p>
            </Link>
            <Link href="/blog/horta-apartamento" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                  Horta em Apartamento: O Guia Completo
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Cultive temperos e hortaliças mesmo em espaços pequenos.
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
