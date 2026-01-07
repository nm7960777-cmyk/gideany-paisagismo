/**
 * DESIGN SYSTEM: Tropical Luxe
 * Artigo: Horta em Apartamento - O Guia Completo
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogHortaApartamento() {
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
            <span className="text-gold">Horta em Apartamento</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="bg-gold text-emerald-dark px-4 py-1 rounded-full text-sm font-medium">
              Horta em Apartamento
            </span>
            <h1 className="text-3xl md:text-5xl font-cinzel text-white mt-6 mb-6 leading-tight">
              Horta em Apartamento: O Guia Completo para Iniciantes
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Gideany Rezende
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                08 de Janeiro de 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                4 min de leitura
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
            src="/images/blog-horta-apartamento-principal.jpg"
            alt="Horta em Apartamento"
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
              Cultivar uma horta em apartamento é uma realidade cada vez mais acessível e gratificante. 
              Mesmo com espaço limitado, você pode ter temperos frescos, hortaliças e até frutas na sua 
              varanda ou janela. Neste guia completo, vou te mostrar como começar sua horta urbana do zero.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Por Que Ter uma Horta em Casa?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ter uma horta em apartamento vai muito além de ter alimentos frescos. É uma atividade 
              terapêutica que conecta você com a natureza, reduz o estresse e ainda economiza dinheiro. 
              Imagine colher manjericão fresco para o molho do macarrão ou hortelã para o chá da tarde!
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Alimentos frescos e orgânicos:</strong> Você sabe exatamente o que está consumindo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Economia:</strong> Temperos frescos custam caro no mercado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Terapia:</strong> Cuidar de plantas reduz ansiedade e estresse</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Educação:</strong> Ótima atividade para fazer com crianças</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Sustentabilidade:</strong> Reduz sua pegada de carbono</span>
              </li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Escolhendo o Local Ideal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O sucesso da sua horta depende principalmente da luz solar. A maioria das hortaliças e 
              temperos precisa de pelo menos 4 a 6 horas de sol direto por dia. Analise seu apartamento:
            </p>

            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">Varandas e sacadas voltadas para Norte:</h4>
              <p className="text-gray-700">Recebem sol o dia todo - perfeitas para tomates, pimentas e hortaliças</p>
            </div>
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">Varandas voltadas para Leste:</h4>
              <p className="text-gray-700">Sol da manhã - bom para temperos e folhosas como alface e rúcula</p>
            </div>
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">Varandas voltadas para Oeste:</h4>
              <p className="text-gray-700">Sol da tarde (mais forte) - adequado para plantas resistentes</p>
            </div>
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">Ambientes com pouca luz:</h4>
              <p className="text-gray-700">Considere usar grow lights (luzes de cultivo) para complementar</p>
            </div>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              O Que Plantar: Melhores Opções para Apartamento
            </h2>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              Temperos (Fáceis para Iniciantes)
            </h3>
            
            {/* Imagem de Temperos na Janela */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-ha-temperos-janela.jpg"
                alt="Temperos frescos na janela da cozinha"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Temperos na janela: manjericão, alecrim, hortelã e cebolinha sempre frescos</p>
            </div>
            
            <ul className="space-y-2 text-gray-700 mb-6 ml-4">
              <li><strong>Manjericão:</strong> Cresce rápido, adora sol, perfeito para molhos</li>
              <li><strong>Hortelã:</strong> Muito resistente, mas SEMPRE plante em vaso separado - é invasiva e domina outras plantas</li>
              <li><strong>Cebolinha:</strong> Fácil de cultivar, rebrota após o corte</li>
              <li><strong>Salsinha:</strong> Versátil na cozinha, prefere meia-sombra</li>
              <li><strong>Alecrim:</strong> Resistente à seca, ótimo para carnes</li>
              <li><strong>Orégano:</strong> Pouca manutenção, perfeito para pizzas</li>
              <li><strong>Coentro:</strong> Cresce rápido, mas "sobe" (floresce) com calor - prefira plantar no outono/inverno em SP</li>
            </ul>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              Hortaliças de Folha
            </h3>
            <ul className="space-y-2 text-gray-700 mb-6 ml-4">
              <li><strong>Alface:</strong> Colheita em 45-60 dias, prefere temperaturas amenas</li>
              <li><strong>Rúcula:</strong> Rápida (30 dias), tolera meia-sombra</li>
              <li><strong>Espinafre:</strong> Nutritivo, prefere clima mais fresco</li>
              <li><strong>Agrião:</strong> Gosta de umidade, ótimo para sanduíches</li>
            </ul>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              Vegetais em Vasos Maiores
            </h3>
            
            {/* Imagem de Horta na Varanda */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-ha-vasos-hortalicas.jpg"
                alt="Horta com hortaliças na varanda do apartamento"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Horta na varanda: tomates, pimentas e hortaliças em vasos</p>
            </div>
            
            <ul className="space-y-2 text-gray-700 mb-6 ml-4">
              <li><strong>Tomate-cereja:</strong> Precisa de vaso de 20L e tutor</li>
              <li><strong>Pimentas:</strong> Compactas, produzem muito</li>
              <li><strong>Rabanete:</strong> Colheita rápida (25-30 dias)</li>
              <li><strong>Cenoura baby:</strong> Vasos de 30cm de profundidade</li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Materiais Necessários
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para começar sua horta, você vai precisar de:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Vasos com furos:</strong> Essenciais para drenagem (mínimo 15cm de profundidade para temperos)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Pratinhos:</strong> Para coletar a água que escorre</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Substrato de qualidade:</strong> Terra vegetal + húmus de minhoca</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Argila expandida:</strong> Para o fundo do vaso (drenagem)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Sementes ou mudas:</strong> Mudas são mais fáceis para iniciantes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Regador ou borrifador:</strong> Para irrigação controlada</span>
              </li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Passo a Passo: Montando sua Horta
            </h2>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              1. Prepare o Vaso
            </h3>
            
            {/* Imagem de Preparo do Vaso */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-ha-preparo-vaso.jpg"
                alt="Preparo do vaso com camadas de drenagem"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Preparo do vaso: argila expandida, manta geotêxtil e substrato</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Coloque uma camada de 2-3cm de argila expandida no fundo do vaso. Cubra com uma manta 
              geotêxtil (ou TNT) para evitar que a terra escoe. Isso garante boa drenagem e evita 
              que as raízes apodreçam.
            </p>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              2. Adicione o Substrato
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Preencha o vaso com a mistura de terra vegetal e húmus de minhoca (proporção 2:1). 
              Deixe 2cm de borda para facilitar a rega. Não compacte demais - as raízes precisam 
              de espaço para respirar.
            </p>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              3. Plante as Mudas ou Sementes
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para mudas: faça um buraco do tamanho do torrão, coloque a muda e cubra com terra. 
              Para sementes: siga as instruções da embalagem quanto à profundidade (geralmente 
              2x o tamanho da semente).
            </p>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              4. Regue com Cuidado
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Após o plantio, regue bem para assentar a terra. Nos dias seguintes, mantenha o 
              substrato úmido (não encharcado). A regra de ouro: coloque o dedo na terra - se 
              estiver seca até 2cm de profundidade, é hora de regar.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Cuidados e Manutenção
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Rega:</strong> Prefira regar pela manhã. No verão, pode ser necessário regar diariamente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Adubação:</strong> A cada 15-20 dias com húmus de minhoca ou adubo orgânico líquido</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Poda:</strong> Colha as folhas externas primeiro, estimulando novo crescimento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Pragas:</strong> Inspecione regularmente. Pulgões podem ser removidos com água e sabão neutro</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Rotação:</strong> Troque as plantas de lugar a cada ciclo para evitar esgotamento do solo</span>
              </li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Erros Comuns para Evitar
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Excesso de água:</strong> Mata mais plantas que a falta dela</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Vasos sem furos:</strong> A água acumulada apodrece as raízes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Pouca luz:</strong> Plantas esticadas e fracas indicam falta de sol</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Plantar muito junto:</strong> As plantas competem por nutrientes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Não colher:</strong> Colher regularmente estimula a produção</span>
              </li>
            </ul>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-12">
              <h3 className="text-xl font-cinzel text-emerald-dark mb-4">
                Quer um Projeto de Horta Personalizado?
              </h3>
              <p className="text-gray-700 mb-4">
                Se você quer uma horta planejada especialmente para seu espaço, com sistema de 
                irrigação automática e design integrado à sua varanda, entre em contato. Faço 
                projetos sob medida em São Roque, Cotia, Sorocaba e todo Estado de SP.
              </p>
              <a
                href="https://wa.me/5511950583364?text=Olá! Vi o artigo sobre horta em apartamento e gostaria de um orçamento."
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
