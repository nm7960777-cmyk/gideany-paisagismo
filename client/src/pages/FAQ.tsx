/**
 * DESIGN SYSTEM: Tropical Luxe
 * Página: FAQ - Perguntas Frequentes sobre Paisagismo
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Sobre os Serviços
  {
    category: "Sobre os Serviços",
    question: "Qual a diferença entre projeto paisagístico e execução?",
    answer: "O projeto paisagístico é o planejamento completo do seu jardim: definição de plantas, layout, materiais, irrigação e iluminação. Inclui plantas técnicas e memorial descritivo. A execução é a implantação física do projeto: preparação do solo, plantio, instalação de sistemas e acabamentos. Você pode contratar apenas o projeto (para executar por conta própria ou com outro profissional) ou o pacote completo."
  },
  {
    category: "Sobre os Serviços",
    question: "Vocês fazem projetos para espaços pequenos?",
    answer: "Sim! Trabalhamos com espaços de todos os tamanhos, desde pequenas varandas de apartamento até grandes áreas externas. Cada projeto é personalizado para aproveitar ao máximo o espaço disponível, independente do tamanho."
  },
  {
    category: "Sobre os Serviços",
    question: "Atendem empresas ou apenas residências?",
    answer: "Atendemos tanto residências quanto empresas. Para o setor corporativo, oferecemos projetos de paisagismo para fachadas, áreas de convivência, jardins internos e externos, sempre alinhados à identidade visual da empresa."
  },
  {
    category: "Sobre os Serviços",
    question: "Qual a área de atendimento?",
    answer: "Atendemos todo o Estado de São Paulo, com foco principal em São Roque, Cotia, Sorocaba, Alphaville, Barueri, Mogi das Cruzes, Registro, Avaré, Araçariguama, Boituva e região metropolitana de São Paulo. Para projetos maiores, avaliamos atendimento em outras regiões."
  },
  // Orçamento e Valores
  {
    category: "Orçamento e Valores",
    question: "Como funciona o orçamento?",
    answer: "O orçamento é gratuito e sem compromisso. Após o primeiro contato, agendamos uma visita técnica para conhecer o espaço, entender suas necessidades e preferências. Em até 5 dias úteis, enviamos uma proposta detalhada com valores, prazos e escopo do trabalho."
  },
  {
    category: "Orçamento e Valores",
    question: "Qual o valor médio de um projeto de paisagismo?",
    answer: "O valor varia conforme o tamanho da área, complexidade do projeto e materiais escolhidos. Projetos residenciais simples começam a partir de R$ 1.500, enquanto projetos completos com execução podem variar de R$ 5.000 a R$ 50.000 ou mais. Cada caso é único - entre em contato para um orçamento personalizado."
  },
  {
    category: "Orçamento e Valores",
    question: "Quais as formas de pagamento?",
    answer: "Trabalhamos com diversas formas de pagamento: PIX, transferência bancária, cartão de crédito (em até 12x) e boleto. Para projetos maiores, dividimos o pagamento em etapas conforme o andamento do trabalho."
  },
  {
    category: "Orçamento e Valores",
    question: "O orçamento inclui as plantas?",
    answer: "Sim, nossos orçamentos de execução incluem todas as plantas, substratos, adubos e materiais necessários. Trabalhamos com fornecedores de confiança para garantir mudas saudáveis e de qualidade."
  },
  // Plantas e Manutenção
  {
    category: "Plantas e Manutenção",
    question: "Quais plantas são indicadas para sombra?",
    answer: "Para áreas com pouca luz, recomendamos: Jiboia, Samambaia, Lírio-da-paz, Espada-de-são-jorge, Maranta, Calathea, Zamioculca, Aspidistra e Filodendros. Essas espécies são adaptadas a ambientes internos e toleram bem a baixa luminosidade."
  },
  {
    category: "Plantas e Manutenção",
    question: "Como escolher plantas que exigem pouca manutenção?",
    answer: "Para jardins de baixa manutenção, indicamos: suculentas, cactos, agaves, espada-de-são-jorge, moréia, liriope e gramíneas ornamentais. Também é importante investir em um bom sistema de irrigação automatizado e cobertura morta (mulching) para reduzir a frequência de regas e capinas."
  },
  {
    category: "Plantas e Manutenção",
    question: "Com que frequência devo regar meu jardim?",
    answer: "A frequência de rega depende das espécies plantadas, do clima e da época do ano. Em geral: no verão, regue a cada 2-3 dias; no inverno, 1 vez por semana pode ser suficiente. A melhor forma de verificar é colocar o dedo na terra - se estiver seca até 3cm de profundidade, é hora de regar. Evite regar nas horas mais quentes do dia."
  },
  {
    category: "Plantas e Manutenção",
    question: "Vocês oferecem serviço de manutenção periódica?",
    answer: "Sim! Oferecemos planos de manutenção mensal, quinzenal ou semanal, conforme a necessidade do seu jardim. O serviço inclui: poda, adubação, controle de pragas, limpeza e reposição de plantas quando necessário. É a melhor forma de manter seu jardim sempre bonito."
  },
  {
    category: "Plantas e Manutenção",
    question: "O que fazer se minhas plantas estiverem com pragas?",
    answer: "Primeiro, identifique a praga (pulgões, cochonilhas, ácaros, etc.). Para infestações leves, use óleo de neem ou calda de sabão neutro. Para casos mais graves, entre em contato conosco para uma avaliação. Evite pesticidas químicos fortes que podem prejudicar insetos benéficos e contaminar o solo."
  },
  // Execução e Prazos
  {
    category: "Execução e Prazos",
    question: "Quanto tempo leva para executar um projeto?",
    answer: "O prazo varia conforme a complexidade: jardins pequenos podem ser executados em 1-3 dias; projetos médios levam de 1 a 2 semanas; grandes projetos podem levar de 3 a 6 semanas. Informamos o prazo estimado no orçamento e mantemos você atualizado durante toda a execução."
  },
  {
    category: "Execução e Prazos",
    question: "Preciso estar em casa durante a execução?",
    answer: "Não necessariamente. Após a aprovação do projeto e alinhamento inicial, nossa equipe pode trabalhar de forma autônoma. Enviamos atualizações diárias com fotos do progresso. Apenas pedimos que alguém esteja disponível para liberar o acesso no início e final de cada dia de trabalho."
  },
  {
    category: "Execução e Prazos",
    question: "E se chover durante a execução?",
    answer: "Chuvas leves não impedem o trabalho. Em caso de chuvas fortes, reagendamos as atividades para garantir a qualidade do serviço e a segurança da equipe. Isso não gera custo adicional - apenas ajustamos o cronograma."
  },
  {
    category: "Execução e Prazos",
    question: "Vocês fazem a limpeza após o serviço?",
    answer: "Sim! A limpeza completa do local faz parte do nosso serviço. Ao final da execução, removemos todo entulho, embalagens e resíduos. Você recebe seu jardim pronto para usar."
  },
  // Garantias
  {
    category: "Garantias",
    question: "As plantas têm garantia?",
    answer: "Sim, oferecemos garantia de 30 dias para todas as plantas instaladas, desde que as orientações de rega e cuidados sejam seguidas. Se alguma planta não se adaptar nesse período, fazemos a substituição sem custo adicional."
  },
  {
    category: "Garantias",
    question: "E se eu não gostar do resultado?",
    answer: "Trabalhamos com aprovação em etapas justamente para evitar surpresas. Você aprova o projeto antes da execução e acompanha cada fase do trabalho. Se houver qualquer ajuste necessário dentro do escopo acordado, fazemos sem custo adicional. Nosso objetivo é sua total satisfação."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const categories = ["Todos", ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQ = activeCategory === "Todos" 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
          <Link href="/">
            <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
              Voltar ao Site
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-dark to-emerald-dark/90">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/"><a className="hover:text-gold">Início</a></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold">Perguntas Frequentes</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-cinzel text-white mb-6">
              Perguntas <span className="text-gold">Frequentes</span>
            </h1>
            <p className="text-white/80 text-lg">
              Tire suas dúvidas sobre nossos serviços de paisagismo, projetos, execução, 
              manutenção e muito mais. Se não encontrar o que procura, entre em contato conosco!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros por Categoria */}
      <section className="py-8 bg-cream border-b border-emerald-dark/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-emerald-dark text-white"
                    : "bg-white text-emerald-dark border border-emerald-dark/20 hover:bg-emerald-dark/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFAQ.map((item, index) => {
              const globalIndex = faqData.indexOf(item);
              const isOpen = openItems.includes(globalIndex);
              
              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(globalIndex)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <span className="text-xs text-gold font-medium uppercase tracking-wide">
                        {item.category}
                      </span>
                      <h3 className="text-emerald-dark font-semibold mt-1">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gold flex-shrink-0 ml-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-cinzel text-white mb-4">
            Não encontrou sua dúvida?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp ou telefone. Teremos prazer em ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511950583364?text=Olá! Tenho uma dúvida sobre paisagismo."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
            <a href="tel:+5511950583364">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                (11) 95058-3364
              </Button>
            </a>
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
