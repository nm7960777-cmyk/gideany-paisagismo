import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft, Phone, MessageCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useCanonical } from "@/hooks/useCanonical";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

interface FAQItemProps {
  itemId: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ itemId, question, answer, isOpen, onClick }: FAQItemProps) {
  const panelId = `faq-panel-${itemId}`;

  return (
    <motion.div
      variants={fadeInUp}
      className="border border-[#1a3a2a]/20 rounded-lg overflow-hidden bg-white shadow-sm"
    >
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#f8f5f0] transition-colors"
      >
        <span className="font-semibold text-[#1a3a2a] pr-4">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <motion.div
          id={panelId}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-5"
        >
          <p className="text-[#4a5d52] leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  useCanonical('/faq', {
    title: "Perguntas Frequentes | GR Paisagismo & Consultoria Ambiental",
    description:
      "Respostas sobre projetos paisagísticos, implantação, manutenção, RAP, EIV, fauna, arborização, vegetação e responsabilidade técnica.",
  });
  const [openItem, setOpenItem] = useState<string | null>("0-0");

  const faqSections = [
    {
      title: "Paisagismo",
      description: "Dúvidas sobre projetos, implantação e manutenção de áreas verdes.",
      items: [
        {
          question: "Qual é a diferença entre paisagismo e jardinagem?",
          answer:
            "O paisagismo envolve o planejamento do espaço, a composição das espécies e a integração de aspectos estéticos, funcionais e técnicos. A jardinagem está mais ligada à implantação e aos cuidados periódicos do jardim, como podas, adubação e manejo. A GR Paisagismo pode atuar desde o projeto até a implantação e a manutenção.",
        },
        {
          question: "Quanto tempo leva para elaborar um projeto paisagístico?",
          answer:
            "O prazo depende da área, da complexidade e do nível de detalhamento solicitado. Após recebermos as informações iniciais e realizarmos a avaliação do espaço, apresentamos uma proposta com as etapas, as entregas e o prazo previsto.",
        },
        {
          question: "É possível contratar somente o projeto?",
          answer:
            "Sim. O projeto pode ser contratado separadamente ou em conjunto com a implantação e a manutenção. Quando a execução também é contratada, nossa equipe acompanha as etapas previstas para manter a implantação alinhada ao planejamento aprovado.",
        },
        {
          question: "Vocês atendem espaços pequenos?",
          answer:
            "Sim. Desenvolvemos soluções para diferentes dimensões e usos, incluindo varandas, pequenos jardins, áreas residenciais, condomínios e espaços corporativos. O escopo é definido de acordo com as características e as necessidades de cada local.",
        },
        {
          question: "Vocês trabalham com irrigação automatizada?",
          answer:
            "Sim. O sistema é planejado de acordo com os setores do jardim, as necessidades das espécies e as condições do local. Uma irrigação bem dimensionada facilita o manejo e pode tornar o uso da água mais eficiente.",
        },
        {
          question: "Como funciona a manutenção do jardim?",
          answer:
            "A frequência e as atividades são definidas após a avaliação da área. O plano pode incluir podas, adubação, manejo do solo, limpeza, reposições e orientações de irrigação, conforme as necessidades do jardim.",
        },
      ],
    },
    {
      title: "Estudos e Consultoria Ambiental",
      description: "Informações sobre estudos, levantamentos, documentos e responsabilidade técnica.",
      items: [
        {
          question: "Qual é a diferença entre RAP e EIV?",
          answer:
            "O RAP é um estudo ambiental utilizado para subsidiar processos de licenciamento, com conteúdo definido conforme o empreendimento e as exigências do órgão licenciador. O EIV avalia os efeitos de uma atividade ou empreendimento sobre a vizinhança e segue a legislação do município. A exigência e o conteúdo de cada documento devem ser confirmados no processo correspondente.",
        },
        {
          question: "Quem define qual estudo ou documento ambiental será necessário?",
          answer:
            "A definição depende da atividade, da localização, do porte, dos impactos previstos e da legislação aplicável. Em processos formais, o órgão competente pode emitir uma orientação, exigência ou termo de referência. Analisamos esses documentos antes de apresentar a proposta.",
        },
        {
          question: "A caracterização de fauna sempre exige levantamento de campo?",
          answer:
            "Não necessariamente. O estudo pode utilizar dados secundários, levantamento de campo ou uma combinação dos dois. A metodologia, os grupos faunísticos e o esforço de amostragem dependem do escopo e das exigências aplicáveis ao processo.",
        },
        {
          question: "O que inclui um inventário ou levantamento cadastral arbóreo?",
          answer:
            "O levantamento pode incluir identificação dos exemplares, localização, registro fotográfico, medições e avaliação das condições observadas em campo. A forma de apresentação, o mapa e os demais dados são definidos conforme a finalidade do trabalho e as exigências do órgão responsável.",
        },
        {
          question: "O parecer técnico autoriza a supressão de uma árvore?",
          answer:
            "Não. O parecer reúne a avaliação e a justificativa técnica para fundamentar o pedido. A autorização para manejo ou supressão é emitida exclusivamente pelo órgão público competente, de acordo com a legislação aplicável.",
        },
        {
          question: "Como funciona o monitoramento de plantio para TCRA ou TCA?",
          answer:
            "São realizadas avaliações periódicas para registrar a implantação e o desenvolvimento do plantio, incluindo registros fotográficos, verificação de sobrevivência e recomendações de manutenção ou reposição. A periodicidade e o conteúdo dos relatórios seguem o termo firmado e as exigências do órgão competente.",
        },
        {
          question: "Quais informações são necessárias para solicitar uma proposta ambiental?",
          answer:
            "Normalmente solicitamos a localização da área, o tipo de atividade ou empreendimento, a finalidade do documento e eventuais notificações, termos de referência, plantas, mapas ou exigências já recebidas. Após a análise inicial, confirmamos o escopo e indicamos se serão necessárias informações adicionais.",
        },
        {
          question: "Como são definidos o prazo e o valor de um serviço ambiental?",
          answer:
            "Eles variam conforme a área, a complexidade, as visitas de campo, a metodologia, os documentos exigidos e a composição da equipe técnica. Por isso, a proposta é preparada somente após a análise inicial da demanda.",
        },
        {
          question: "Os serviços possuem responsabilidade técnica?",
          answer:
            "Todos os trabalhos técnicos são conduzidos por profissionais habilitados em suas respectivas áreas. As responsabilidades e os registros profissionais aplicáveis são definidos de acordo com o escopo, as atribuições envolvidas e as exigências legais de cada contratação.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Header */}
      <header className="bg-[#1a3a2a] text-white py-4 sticky top-0 z-50">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo_gr.png"
              alt="GR"
              className="h-10 w-10 object-contain"
            />
            <span className="font-cinzel text-lg">
              GR{" "}
              <span className="text-[#c9a227]">Paisagismo & Consultoria Ambiental</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-[#c9a227] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Voltar
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1a3a2a] text-white py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#c9a227] uppercase tracking-wider mb-4"
            >
              Tire suas dúvidas
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-cinzel text-4xl md:text-5xl mb-6"
            >
              Perguntas Frequentes
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg"
            >
              Reunimos as principais dúvidas sobre paisagismo, estudos e consultoria
              ambiental. Se não encontrar sua resposta, fale com nossa equipe.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-14"
          >
            {faqSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <div className="text-center mb-8">
                  <h2 className="font-cinzel text-2xl md:text-3xl text-[#1a3a2a] mb-3">
                    {section.title}
                  </h2>
                  <p className="text-[#4a5d52]">{section.description}</p>
                </div>
                <div className="space-y-4">
                  {section.items.map((faq, itemIndex) => {
                    const itemKey = `${sectionIndex}-${itemIndex}`;
                    return (
                      <FAQItem
                        key={itemKey}
                        itemId={itemKey}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openItem === itemKey}
                        onClick={() => setOpenItem(openItem === itemKey ? null : itemKey)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a3a2a]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-cinzel text-3xl mb-4"
            >
              Ainda tem dúvidas?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 mb-8">
              Entre em contato pelo WhatsApp para conversar com nossa equipe.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={`https://wa.me/5511950583364?text=${encodeURIComponent(
                  "Olá! Tenho uma dúvida sobre os serviços da GR Paisagismo & Consultoria Ambiental."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
              <a
                href="tel:+5511950583364"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-[#1a3a2a] px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2318] text-white py-8">
        <div className="container text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <img
              src="/images/logo_gr.png"
              alt="GR"
              className="h-8 w-8 object-contain"
            />
            <span className="font-cinzel">
              GR{" "}
              <span className="text-[#c9a227]">Paisagismo & Consultoria Ambiental</span>
            </span>
          </Link>
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} GR Paisagismo & Consultoria Ambiental. Todos os
            direitos reservados.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Atuação com responsabilidade técnica
          </p>
        </div>
      </footer>
    </div>
  );
}
