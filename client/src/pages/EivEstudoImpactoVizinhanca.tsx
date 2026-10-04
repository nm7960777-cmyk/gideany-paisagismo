import ServiceLanding from "@/components/ServiceLanding";

const areas = [
  "Cotia",
  "Sorocaba",
  "São Roque",
  "Vargem Grande Paulista",
  "Embu das Artes",
  "Ibiúna",
  "Demais cidades do Estado de São Paulo",
];

export default function EivEstudoImpactoVizinhanca() {
  return (
    <ServiceLanding
      path={"/servicos/eiv-estudo-impacto-vizinhanca"}
      seoTitle={"EIV: Estudo de Impacto de Vizinhança em SP | GR Paisagismo"}
      seoDescription={"Elaboração de EIV (Estudo de Impacto de Vizinhança) para empreendimentos urbanos. Atendimento em Cotia, Sorocaba, São Roque, Embu das Artes e região de SP."}
      image={"/images/ambiental-eiv-area-estudo.jpeg"}
      badge={"EIV • Empreendimento urbano • Prefeitura"}
      h1Before={"EIV: Estudo de Impacto de"}
      h1Highlight={"Vizinhança"}
      intro={"Elaboração do Estudo de Impacto de Vizinhança para empreendimentos que precisam de análise da prefeitura, avaliando efeitos sobre o entorno, como tráfego, ruído, paisagem e infraestrutura."}
      whatsappService={"EIV (Estudo de Impacto de Vizinhança)"}
      whenTitle={"Quando o EIV pode ser exigido"}
      whenIntro={"O EIV é previsto no Estatuto da Cidade (Lei 10.257/2001) e regulamentado por lei municipal. Cada município define quais empreendimentos precisam do estudo, por isso é importante consultar a regra da sua cidade."}
      whenItems={[
        {
          "title": "Empreendimentos de grande porte",
          "text": "Condomínios, loteamentos, edifícios, shoppings e centros logísticos costumam estar entre os casos analisados."
        },
        {
          "title": "Atividades com efeito no entorno",
          "text": "Atividades que geram tráfego, ruído, geração de resíduos ou alteração da paisagem podem exigir o estudo."
        },
        {
          "title": "Exigência da prefeitura",
          "text": "Muitos municípios pedem o EIV no processo de aprovação de projeto ou de alvará."
        },
        {
          "title": "Alteração de uso do solo",
          "text": "Mudanças de uso ou aumento da área construída podem exigir avaliação de impacto."
        },
        {
          "title": "Relação com o meio ambiente",
          "text": "Quando há vegetação ou áreas protegidas, o EIV pode caminhar junto com outros estudos ambientais."
        },
        {
          "title": "Audiência e participação pública",
          "text": "Em alguns casos, o estudo fica disponível à consulta da população, conforme a legislação local."
        }
      ]}
      includesTitle={"O que fazemos"}
      includes={[
        "Verificação do que a lei do município exige para o seu caso",
        "Caracterização do empreendimento e do entorno",
        "Análise dos impactos sobre tráfego, ruído, paisagem, infraestrutura e meio ambiente",
        "Proposição de medidas mitigadoras e compensatórias",
        "Elaboração do relatório técnico com mapas e anexos",
        "Acompanhamento de exigências durante a análise na prefeitura"
      ]}
      stepsTitle={"Como funciona"}
      steps={[
        {
          "title": "Conversa inicial",
          "text": "Você informa o tipo de empreendimento, o endereço e a fase em que ele se encontra."
        },
        {
          "title": "Levantamento",
          "text": "Visita ao local e levantamento do entorno e das informações disponíveis."
        },
        {
          "title": "Elaboração",
          "text": "Elaboração da análise de impactos e das medidas propostas."
        },
        {
          "title": "Protocolo e acompanhamento",
          "text": "Protocolo do estudo e resposta a exigências técnicas da prefeitura."
        },
        {
          "title": "Entrega e orientação",
          "text": "Orientação sobre as medidas e os próximos passos do processo."
        }
      ]}
      areasTitle="Onde atendemos"
      areasText="Atendemos Cotia, Sorocaba, São Roque, Vargem Grande Paulista, Embu das Artes e Ibiúna, além de outras cidades do Estado de São Paulo, conforme disponibilidade e logística."
      areas={areas}
      faq={[
        {
          "q": "O que é o EIV?",
          "a": "É o Estudo de Impacto de Vizinhança, um documento técnico que avalia os efeitos positivos e negativos de um empreendimento sobre o entorno e sobre a qualidade de vida da população."
        },
        {
          "q": "Meu empreendimento precisa de EIV?",
          "a": "Depende da lei municipal da cidade onde ele será implantado, do porte e da atividade. A análise inicial verifica a regra aplicável."
        },
        {
          "q": "Qual a diferença entre EIV e licenciamento ambiental?",
          "a": "O EIV é conduzido pela prefeitura e trata dos efeitos urbanos no entorno. O licenciamento ambiental trata do impacto ambiental e é conduzido pelo órgão ambiental. Alguns empreendimentos precisam dos dois."
        },
        {
          "q": "O EIV substitui o estudo ambiental?",
          "a": "Não. A exigência do EIV não dispensa estudos ou licenças ambientais que sejam exigidos para a atividade."
        },
        {
          "q": "Quanto tempo leva para elaborar o EIV?",
          "a": "O prazo depende da complexidade do empreendimento e da análise do município, e não é possível prometer uma data. Na avaliação inicial explicamos as etapas."
        },
        {
          "q": "Vocês atendem a minha cidade?",
          "a": "Atendemos Cotia, Sorocaba, São Roque, Vargem Grande Paulista, Embu das Artes, Ibiúna e outras cidades do Estado de São Paulo, conforme disponibilidade e logística."
        }
      ]}
      related={[
        {
          "href": "/servicos/rap-relatorio-ambiental-preliminar",
          "label": "RAP: Relatório Ambiental Preliminar"
        },
        {
          "href": "/servicos/licenciamento-ambiental-cetesb",
          "label": "Licenciamento ambiental e CETESB"
        },
        {
          "href": "/servicos/autorizacao-corte-supressao-arvores",
          "label": "Corte de árvores e inventário arbóreo"
        }
      ]}
      note={"As informações desta página são orientativas e não substituem a análise do seu caso. Exigências, prazos e procedimentos variam conforme o município, a atividade e a legislação vigente, e a decisão final cabe sempre ao órgão competente."}
    />
  );
}
