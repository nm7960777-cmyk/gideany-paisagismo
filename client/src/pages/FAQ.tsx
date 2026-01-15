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
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="border border-[#1a3a2a]/20 rounded-lg overflow-hidden bg-white shadow-sm"
    >
      <button
        onClick={onClick}
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
  useCanonical('/faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qual a diferença entre paisagista e jardineiro?",
      answer:
        "O paisagista é o profissional responsável pelo projeto e planejamento do jardim, considerando aspectos técnicos como drenagem, irrigação, escolha de espécies adequadas ao clima e solo, harmonização de cores e texturas. Já o jardineiro executa a manutenção do jardim já implantado, como podas, adubação e irrigação. Como Engenheira Agrônoma, ofereço tanto o projeto técnico quanto o acompanhamento da execução.",
    },
    {
      question: "Quanto tempo leva para fazer um projeto de paisagismo?",
      answer:
        "O prazo para elaboração do projeto varia de 7 a 30 dias, dependendo da complexidade e tamanho da área. Projetos simples podem ser entregues em uma semana, enquanto projetos mais elaborados com detalhamento de irrigação e iluminação podem levar até um mês. Após a aprovação do projeto, a execução geralmente leva de 1 a 4 semanas.",
    },
    {
      question: "Vocês fazem apenas o projeto ou também executam?",
      answer:
        "Oferecemos o serviço completo: projeto, execução e manutenção. Você pode contratar apenas o projeto se preferir executar por conta própria, ou podemos cuidar de tudo do início ao fim. Nossa equipe é especializada e acompanho pessoalmente cada etapa da implantação para garantir que o resultado fique exatamente como planejado.",
    },
    {
      question: "Quais cidades vocês atendem?",
      answer:
        "Atendemos São Roque, Cotia, Sorocaba, Mairinque, Ibiúna, Araçariguama, Vargem Grande Paulista, Itapevi, Jandira, Barueri e toda a região metropolitana de São Paulo. Para projetos maiores, também atendemos outras cidades do Estado de São Paulo mediante consulta.",
    },
    {
      question: "Preciso ter um jardim grande para contratar um paisagista?",
      answer:
        "Não! Trabalhamos com espaços de todos os tamanhos, desde pequenas varandas de apartamento até grandes áreas comerciais. Na verdade, espaços pequenos muitas vezes se beneficiam ainda mais de um projeto profissional, pois cada centímetro precisa ser bem aproveitado. Temos experiência em jardins verticais, hortas em apartamento e canteiros compactos.",
    },
    {
      question: "Quais plantas são mais indicadas para minha região?",
      answer:
        "A região de São Roque e arredores possui clima subtropical, com temperaturas amenas e boa umidade. Isso permite uma grande variedade de espécies. Plantas como palmeiras, helicônias, bromélias, samambaias, clúsias e diversas forrações se adaptam muito bem. No projeto, sempre indico espécies adequadas ao seu solo, exposição solar e nível de manutenção desejado.",
    },
    {
      question: "Vocês instalam sistema de irrigação automatizado?",
      answer:
        "Sim! Oferecemos projeto e instalação de sistemas de irrigação automatizada, desde sistemas simples com timer até sistemas inteligentes com sensores de umidade. A irrigação automatizada economiza água, garante que as plantas recebam a quantidade ideal e facilita muito a manutenção do jardim, especialmente para quem viaja com frequência.",
    },
    {
      question: "Como funciona a manutenção do jardim?",
      answer:
        "Oferecemos planos de manutenção periódica (semanal, quinzenal ou mensal) que incluem poda, adubação, controle de pragas, limpeza e cuidados gerais. O valor varia de acordo com o tamanho do jardim e frequência das visitas. Também oferecemos visitas avulsas para situações específicas. A manutenção regular é essencial para manter seu jardim sempre bonito e saudável.",
    },
    {
      question: "Vocês trabalham com paisagismo sustentável?",
      answer:
        "Sim, a sustentabilidade é um dos pilares do nosso trabalho. Priorizamos plantas nativas e adaptadas que exigem menos água e manutenção, sistemas de captação de água da chuva, compostagem, uso de adubos orgânicos e técnicas de permacultura quando apropriado. Um jardim sustentável é mais econômico a longo prazo e contribui para o meio ambiente.",
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
              Gideany Rezende{" "}
              <span className="text-[#c9a227]">Paisagismo</span>
            </span>
          </Link>
          <Link href="/">
            <button className="flex items-center gap-2 text-[#c9a227] hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
              Voltar
            </button>
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
              Reunimos as principais dúvidas sobre paisagismo, projetos e nossos
              serviços. Se não encontrar sua resposta, entre em contato!
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
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
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
              Entre em contato pelo WhatsApp e tire todas as suas dúvidas.
              Respondo rapidamente!
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/5511950583364?text=Olá! Tenho uma dúvida sobre paisagismo."
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
              Gideany Rezende{" "}
              <span className="text-[#c9a227]">Paisagismo</span>
            </span>
          </Link>
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Gideany Rezende Paisagismo. Todos os
            direitos reservados.
          </p>
          <p className="text-white/40 text-xs mt-2">
            CREA-SP 5071612380 | Engenheira Agrônoma
          </p>
        </div>
      </footer>
    </div>
  );
}
