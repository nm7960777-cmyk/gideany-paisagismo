import { Link } from "wouter";
import { useCanonical } from "@/hooks/useCanonical";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  FileSearch,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogRap() {
  useCanonical("/blog/rap-relatorio-ambiental-preliminar", {
    title: "RAP - Relatório Ambiental Preliminar: quando é solicitado | GR Paisagismo",
    description:
      "Entenda quando o RAP é solicitado no licenciamento ambiental, quais informações compõem o Relatório Ambiental Preliminar e como preparar o processo.",
    image: "/images/ambiental-rap-medicao-dap.jpeg",
    type: "article",
  });

  return (
    <div className="min-h-screen bg-cream">
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

      <section className="pt-24 pb-8 bg-gradient-to-b from-emerald-dark to-emerald-dark/90">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-gold">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-gold">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold">RAP</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="bg-gold text-emerald-dark px-4 py-1 rounded-full text-sm font-medium">
              Licenciamento Ambiental
            </span>
            <h1 className="text-3xl md:text-5xl font-cinzel text-white mt-6 mb-6 leading-tight">
              RAP: quando o Relatório Ambiental Preliminar é solicitado e como se preparar
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                GR Paisagismo & Consultoria Ambiental
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                19 de julho de 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                9 min de leitura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <img
            src="/images/ambiental-rap-medicao-dap.jpeg"
            alt="Levantamento de campo para estudo ambiental e RAP"
            className="w-full h-[420px] object-cover object-center rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>

      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              O RAP, Relatório Ambiental Preliminar, é um estudo utilizado para apresentar uma leitura técnica inicial
              do empreendimento, da área de influência e dos possíveis impactos ambientais associados à atividade.
              Na prática, ele ajuda o órgão licenciador a compreender o contexto do projeto e a definir cuidados,
              complementações ou medidas necessárias para a continuidade do licenciamento.
            </p>

            <div className="bg-white border border-gold/20 rounded-2xl p-6 mb-10 shadow-sm">
              <div className="flex gap-3 items-start">
                <FileSearch className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed m-0">
                  O nome do documento pode parecer simples, mas o conteúdo precisa dialogar com a realidade do imóvel,
                  com a legislação aplicável e com a exigência específica do processo. O primeiro passo é entender
                  o que foi solicitado, por quem foi solicitado e qual decisão o relatório deverá subsidiar.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Quando o RAP costuma ser solicitado?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O RAP pode ser exigido em processos de licenciamento ambiental, regularização, análise de viabilidade
              ou instrução técnica de empreendimentos que possam gerar intervenção, alteração de uso, supressão de
              vegetação, movimentação de solo, aumento de tráfego, pressão sobre drenagem ou outros impactos relevantes.
              A exigência varia conforme o município, o órgão responsável, o porte da atividade e as características da área.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              O que geralmente entra em um Relatório Ambiental Preliminar?
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              {[
                "Caracterização do empreendimento, da atividade ou da intervenção pretendida.",
                "Localização, acesso, entorno e área de influência direta e indireta, quando aplicável.",
                "Leitura do uso e ocupação do solo, cobertura vegetal, drenagem, relevo e aspectos ambientais relevantes.",
                "Identificação preliminar de impactos positivos e negativos relacionados à implantação ou operação.",
                "Indicação de medidas de controle, mitigação, compensação ou acompanhamento, conforme o caso.",
                "Registros fotográficos, mapas, croquis, imagens georreferenciadas ou bases cartográficas de apoio.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Por que a vistoria de campo faz diferença?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A vistoria evita que o relatório seja apenas uma compilação genérica de informações. É em campo que se
              observam acessos, confrontantes, drenagem aparente, vegetação existente, indícios de uso da área,
              restrições físicas, possíveis interferências e pontos que podem mudar o escopo do estudo. Essa leitura
              técnica melhora a precisão do diagnóstico e reduz a chance de exigências complementares por falta de informação.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Quais documentos ajudam a começar?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antes da proposta e da definição final de escopo, alguns materiais ajudam a entender a demanda:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8 ml-4">
              <li>matrícula, cadastro imobiliário, planta, croqui ou memorial disponível;</li>
              <li>endereço, coordenadas ou localização aproximada da área;</li>
              <li>exigência, notificação, termo de referência ou orientação recebida do órgão público;</li>
              <li>descrição objetiva do empreendimento, atividade ou intervenção pretendida;</li>
              <li>fotos recentes do imóvel, acessos, entorno e vegetação existente.</li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              RAP não é só preencher um modelo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Um bom RAP precisa ser proporcional à demanda. Alguns casos exigem uma análise mais direta; outros
              precisam integrar mapas, levantamento de vegetação, avaliação de vizinhança, registros de campo e
              interface com outros profissionais. O ponto central é construir um documento coerente com o processo,
              sem prometer conclusões que dependem da análise do órgão competente.
            </p>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-12">
              <h3 className="text-xl font-cinzel text-emerald-dark mb-4">
                Precisa avaliar se o seu caso exige RAP?
              </h3>
              <p className="text-gray-700 mb-4">
                A GR Paisagismo & Consultoria Ambiental realiza avaliação inicial, vistoria e elaboração de estudos
                ambientais conforme o escopo do processo, com sede em São Roque e atendimento no Estado de São Paulo.
              </p>
              <a
                href="https://wa.me/5511950583364?text=Olá! Vi o artigo sobre RAP e gostaria de avaliar uma demanda ambiental."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gold hover:bg-gold/90 text-emerald-dark font-semibold">
                  Solicitar avaliação pelo WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      <footer className="bg-emerald-dark py-8 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="text-white/60 hover:text-gold transition-colors">
            Voltar ao Site
          </Link>
        </div>
      </footer>
    </div>
  );
}
