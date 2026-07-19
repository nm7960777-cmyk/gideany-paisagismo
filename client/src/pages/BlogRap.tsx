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
    title: "RAP - Relatorio Ambiental Preliminar: quando e solicitado | GR Paisagismo",
    description:
      "Entenda quando o RAP e solicitado no licenciamento ambiental, quais informacoes compoem o Relatorio Ambiental Preliminar e como preparar o processo.",
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
            <Link href="/" className="hover:text-gold">Inicio</Link>
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
              RAP: quando o Relatorio Ambiental Preliminar e solicitado e como se preparar
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
              O RAP, Relatorio Ambiental Preliminar, e um estudo utilizado para apresentar uma leitura tecnica inicial
              do empreendimento, da area de influencia e dos possiveis impactos ambientais associados a atividade.
              Na pratica, ele ajuda o orgao licenciador a compreender o contexto do projeto e a definir cuidados,
              complementacoes ou medidas necessarias para a continuidade do licenciamento.
            </p>

            <div className="bg-white border border-gold/20 rounded-2xl p-6 mb-10 shadow-sm">
              <div className="flex gap-3 items-start">
                <FileSearch className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed m-0">
                  O nome do documento pode parecer simples, mas o conteudo precisa dialogar com a realidade do imovel,
                  com a legislacao aplicavel e com a exigencia especifica do processo. O primeiro passo e entender
                  o que foi solicitado, por quem foi solicitado e qual decisao o relatorio devera subsidiar.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Quando o RAP costuma ser solicitado?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O RAP pode ser exigido em processos de licenciamento ambiental, regularizacao, analise de viabilidade
              ou instrucao tecnica de empreendimentos que possam gerar intervencao, alteracao de uso, supressao de
              vegetacao, movimentacao de solo, aumento de trafego, pressao sobre drenagem ou outros impactos relevantes.
              A exigencia varia conforme o municipio, o orgao responsavel, o porte da atividade e as caracteristicas da area.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              O que geralmente entra em um Relatorio Ambiental Preliminar?
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              {[
                "Caracterizacao do empreendimento, da atividade ou da intervencao pretendida.",
                "Localizacao, acesso, entorno e area de influencia direta e indireta, quando aplicavel.",
                "Leitura do uso e ocupacao do solo, cobertura vegetal, drenagem, relevo e aspectos ambientais relevantes.",
                "Identificacao preliminar de impactos positivos e negativos relacionados a implantacao ou operacao.",
                "Indicacao de medidas de controle, mitigacao, compensacao ou acompanhamento, conforme o caso.",
                "Registros fotograficos, mapas, croquis, imagens georreferenciadas ou bases cartograficas de apoio.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Por que a vistoria de campo faz diferenca?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A vistoria evita que o relatorio seja apenas uma compilacao generica de informacoes. E em campo que se
              observam acessos, confrontantes, drenagem aparente, vegetacao existente, indicios de uso da area,
              restricoes fisicas, possiveis interferencias e pontos que podem mudar o escopo do estudo. Essa leitura
              tecnica melhora a precisao do diagnostico e reduz a chance de exigencias complementares por falta de informacao.
            </p>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Quais documentos ajudam a comecar?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antes da proposta e da definicao final de escopo, alguns materiais ajudam a entender a demanda:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8 ml-4">
              <li>matricula, cadastro imobiliario, planta, croqui ou memorial disponivel;</li>
              <li>endereco, coordenadas ou localizacao aproximada da area;</li>
              <li>exigencia, notificacao, termo de referencia ou orientacao recebida do orgao publico;</li>
              <li>descricao objetiva do empreendimento, atividade ou intervencao pretendida;</li>
              <li>fotos recentes do imovel, acessos, entorno e vegetacao existente.</li>
            </ul>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              RAP nao e so preencher um modelo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Um bom RAP precisa ser proporcional a demanda. Alguns casos exigem uma analise mais direta; outros
              precisam integrar mapas, levantamento de vegetacao, avaliacao de vizinhanca, registros de campo e
              interface com outros profissionais. O ponto central e construir um documento coerente com o processo,
              sem prometer conclusoes que dependem da analise do orgao competente.
            </p>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-12">
              <h3 className="text-xl font-cinzel text-emerald-dark mb-4">
                Precisa avaliar se o seu caso exige RAP?
              </h3>
              <p className="text-gray-700 mb-4">
                A GR Paisagismo & Consultoria Ambiental realiza avaliacao inicial, vistoria e elaboracao de estudos
                ambientais conforme o escopo do processo, com sede em Sao Roque e atendimento no Estado de Sao Paulo.
              </p>
              <a
                href="https://wa.me/5511950583364?text=Ola! Vi o artigo sobre RAP e gostaria de avaliar uma demanda ambiental."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gold hover:bg-gold/90 text-emerald-dark font-semibold">
                  Solicitar avaliacao pelo WhatsApp
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
