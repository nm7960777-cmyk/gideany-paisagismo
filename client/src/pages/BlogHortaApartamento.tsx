/**
 * DESIGN SYSTEM: Tropical Luxe
 * Artigo: Horta em Apartamento - O Guia Completo
 */

import { Link } from "wouter";
import { useCanonical } from "@/hooks/useCanonical";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogHortaApartamento() {
  useCanonical('/blog/horta-apartamento', {
    title: "Horta em Apartamento: Guia Inicial | GR Paisagismo",
    description:
      "Cuidados para começar uma horta em apartamento: luminosidade, recipientes, drenagem, espécies, rega, adubação e manejo.",
    image: "/images/blog-horta-apartamento-principal-novo.jpg",
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
                GR Paisagismo
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                08 de Janeiro de 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min de leitura
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
            src="/images/blog-horta-apartamento-principal-novo.jpg"
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
              varanda ou janela. Neste guia, apresentamos os principais cuidados para começar uma horta urbana.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Por Que Ter uma Horta em Casa?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ter uma horta em apartamento vai além de colher alimentos frescos. O cuidado com as plantas
              amplia o contato cotidiano com a natureza e pode proporcionar momentos de relaxamento.
              Imagine colher manjericão fresco para o molho do macarrão ou hortelã para o chá da tarde!
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Alimentos frescos:</strong> Cultivo próximo ao local de consumo e acompanhamento dos cuidados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Praticidade:</strong> Ervas e hortaliças podem ficar disponíveis para colheitas pontuais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Bem-estar:</strong> O cuidado com as plantas pode favorecer relaxamento e contato com a natureza</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Educação:</strong> Ótima atividade para fazer com crianças</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Aproveitamento de espaço:</strong> Varandas e janelas podem receber cultivos compatíveis com o local</span>
              </li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Escolhendo o Local Ideal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A luminosidade é um dos principais fatores para o desenvolvimento da horta. Muitas hortaliças
              e ervas produzem melhor com algumas horas de sol direto, mas a necessidade varia conforme a
              espécie, a fase de crescimento e o clima. Analise seu apartamento:
            </p>

            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">Varandas e sacadas voltadas para Norte:</h4>
              <p className="text-gray-700">Podem receber muitas horas de sol; avalie também o calor e a necessidade de rega de cada espécie</p>
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
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Temperos na janela: espécies escolhidas de acordo com a luz disponível</p>
            </div>
            
            <ul className="space-y-2 text-gray-700 mb-6 ml-4">
              <li><strong>Manjericão:</strong> Cresce rápido, adora sol, perfeito para molhos</li>
              <li><strong>Hortelã:</strong> Muito resistente, cresce em qualquer lugar (cuidado: é invasiva!)</li>
              <li><strong>Cebolinha:</strong> Fácil de cultivar, rebrota após o corte</li>
              <li><strong>Salsinha:</strong> Versátil na cozinha, prefere meia-sombra</li>
              <li><strong>Alecrim:</strong> Resistente à seca, ótimo para carnes</li>
              <li><strong>Orégano:</strong> Prefere boa luminosidade e substrato drenável</li>
              <li><strong>Coentro:</strong> Cresce rápido, mas não gosta de calor extremo</li>
            </ul>

            <h3 className="text-xl font-semibold text-emerald-dark mt-8 mb-4">
              Hortaliças de Folha
            </h3>
            <ul className="space-y-2 text-gray-700 mb-6 ml-4">
              <li><strong>Alface:</strong> Em condições adequadas, algumas cultivares podem ser colhidas em aproximadamente 45 a 60 dias</li>
              <li><strong>Rúcula:</strong> Possui ciclo relativamente rápido, que varia conforme a cultivar e as condições de cultivo</li>
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
              <li><strong>Tomate-cereja:</strong> Requer recipiente compatível com a cultivar, boa luminosidade e, em geral, tutoramento</li>
              <li><strong>Pimentas:</strong> Compactas, produzem muito</li>
              <li><strong>Rabanete:</strong> Algumas cultivares têm ciclo curto, condicionado pelo clima e pelo manejo</li>
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
                <span><strong>Bandejas ou coletores:</strong> Para proteger o piso, sem deixar água acumulada</span>
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
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">Preparo do recipiente com saída de água e substrato adequado</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Use recipientes com furos livres para a saída do excesso de água. Uma pequena tela ou
              manta permeável pode ser posicionada sobre os furos para ajudar a reter o substrato,
              sem bloquear a drenagem. O tipo de recipiente e de substrato deve ser compatível com a espécie.
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
                <span><strong>Adubação:</strong> Defina produto, dose e frequência conforme a espécie, o substrato e as instruções do fabricante</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Poda:</strong> Colha as folhas externas primeiro, estimulando novo crescimento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Pragas:</strong> Inspecione regularmente e identifique o problema antes de adotar remoção mecânica ou um produto apropriado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Renovação:</strong> Entre ciclos, avalie a rotação de espécies e a necessidade de renovar ou corrigir o substrato</span>
              </li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Erros Comuns para Evitar
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Excesso de água:</strong> Pode causar falta de oxigenação e apodrecimento das raízes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Drenagem insuficiente:</strong> O acúmulo de água favorece problemas nas raízes</span>
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
                irrigação automática e design integrado à sua varanda, entre em contato. Desenvolvemos
                projetos sob medida em São Roque, Cotia, Sorocaba e em todo o Estado de São Paulo.
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
            <Link href="/blog/jardim-vertical" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                  Como Fazer um Jardim Vertical em Casa
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Aprenda a criar um jardim vertical mesmo em espaços pequenos.
                </p>
            </Link>
            <Link href="/blog/jardim-pequeno" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                  Jardim Pequeno: 10 Ideias de Canteiros
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Transforme qualquer cantinho em um refúgio verde e relaxante.
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
