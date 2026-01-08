/**
 * DESIGN SYSTEM: Tropical Luxe
 * Artigo: Jardim Pequeno em Casa - 10 Ideias Simples de Canteiros
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogJardimPequeno() {
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
                Gideany Rezende
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
              Ter um jardim em casa não é um privilégio apenas de quem tem quintais enormes. Com 
              criatividade e planejamento, qualquer cantinho pode virar um refúgio verde e relaxante. 
              Neste artigo, trago 10 ideias práticas de canteiros para espaços pequenos que vão 
              transformar sua casa.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Por Que Investir em um Jardim Pequeno?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Um jardim, mesmo que pequeno, traz inúmeros benefícios para sua casa e sua vida. 
              Além de valorizar o imóvel, as plantas purificam o ar, reduzem o estresse e criam 
              um ambiente mais acolhedor. Estudos mostram que o contato diário com a natureza 
              melhora a saúde mental e a qualidade do sono.
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
                Perfeito para quem tem pouco tempo para manutenção. Crie um canteiro com pedras 
                decorativas (seixos brancos ou pedriscos) e intercale com suculentas e cactos. 
                Além de lindo, exige pouquíssima água e cuidados.
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
                Canteiros elevados são ótimos para espaços com piso cimentado. Use madeira 
                tratada ou pallets para criar caixas de 40-60cm de altura. Além de práticos, 
                facilitam o cultivo de temperos e hortaliças.
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
                Mesmo em 2m² você pode criar um cantinho tropical. Use uma palmeira pequena 
                como ponto focal, adicione folhagens de diferentes texturas (costela-de-adão, 
                filodendro) e complete com bromélias para cor.
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
                Quando o espaço horizontal é limitado, vá para cima! Instale treliças, 
                vasos de parede ou painéis de jardim vertical. Além de ocupar zero espaço 
                no chão, transforma muros feios em paredes vivas.
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
                O efeito é moderno e exige pouca manutenção.
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
                Crie um canteiro que estimule os sentidos. Combine plantas aromáticas como 
                lavanda, alecrim e hortelã. Além do perfume agradável, você terá temperos 
                frescos para a cozinha e flores que atraem borboletas.
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
                Para quem ama cor, crie um canteiro com flores de diferentes épocas de floração. 
                Assim, você terá flores o ano todo. Combine perenes (que voltam todo ano) com 
                anuais (que precisam ser replantadas).
              </p>
              <p className="text-sm text-gold mt-3 font-medium">
                Plantas sugeridas: Lavanda, Gazânia, Petúnia, Tagete, Begônia, Impatiens
              </p>
            </div>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Dicas Importantes para Canteiros Pequenos
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Prepare bem o solo:</strong> Adicione terra vegetal e húmus antes de plantar</span>
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
                <span><strong>Cubra o solo:</strong> Casca de pinus ou pedriscos evitam ervas daninhas</span>
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
                entre em contato. Faço projetos sob medida em São Roque, Cotia, Sorocaba e 
                todo Estado de SP.
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
            <Link href="/blog/jardim-vertical">
              <a className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                  Como Fazer um Jardim Vertical em Casa
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Aprenda a criar um jardim vertical mesmo em espaços pequenos.
                </p>
              </a>
            </Link>
            <Link href="/blog/horta-apartamento">
              <a className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                  Horta em Apartamento: O Guia Completo
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Cultive temperos e hortaliças mesmo em espaços pequenos.
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
