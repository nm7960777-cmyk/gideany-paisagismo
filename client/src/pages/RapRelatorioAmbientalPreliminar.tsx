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

export default function RapRelatorioAmbientalPreliminar() {
  return (
    <ServiceLanding
      path={"/servicos/rap-relatorio-ambiental-preliminar"}
      seoTitle={"RAP: Relatório Ambiental Preliminar em SP | GR Paisagismo"}
      seoDescription={"Elaboração de RAP (Relatório Ambiental Preliminar) para licenciamento e regularização ambiental. Atendimento em Cotia, Sorocaba, São Roque e região de SP."}
      image={"/images/ambiental-rap-medicao-dap.jpeg"}
      badge={"RAP • Licenciamento • Estudo ambiental"}
      h1Before={"RAP: Relatório Ambiental"}
      h1Highlight={"Preliminar"}
      intro={"Elaboração do Relatório Ambiental Preliminar para empreendimentos que precisam de avaliação ambiental no licenciamento, com diagnóstico do local, avaliação de impactos e medidas de controle."}
      whatsappService={"RAP (Relatório Ambiental Preliminar)"}
      whenTitle={"Quando o RAP pode ser exigido"}
      whenIntro={"O RAP é um estudo ambiental simplificado, usado em processos de licenciamento de atividades e empreendimentos de menor potencial de impacto. Quem define se ele é necessário é o órgão ambiental, conforme a atividade, o porte e a localização."}
      whenItems={[
        {
          "title": "Novo empreendimento em licenciamento",
          "text": "Dependendo da atividade, o órgão pode pedir o RAP junto com o pedido de licença."
        },
        {
          "title": "Loteamentos, condomínios e obras",
          "text": "Empreendimentos imobiliários e obras que alteram a área podem exigir avaliação ambiental."
        },
        {
          "title": "Área com vegetação nativa",
          "text": "Quando há vegetação ou necessidade de supressão, o estudo costuma incluir levantamento da cobertura vegetal."
        },
        {
          "title": "Proximidade de APP ou corpos d'água",
          "text": "A presença de nascentes, córregos ou APP exige atenção no diagnóstico e nas medidas de proteção."
        },
        {
          "title": "Ampliação de atividade existente",
          "text": "Aumentos de área ou de capacidade podem pedir nova avaliação ambiental."
        },
        {
          "title": "Exigência do órgão ambiental",
          "text": "Recebeu um pedido de estudo? Analisamos o que foi solicitado e o conteúdo necessário."
        }
      ]}
      includesTitle={"O que fazemos"}
      includes={[
        "Análise do enquadramento e do que o órgão exige para o caso",
        "Diagnóstico ambiental da área: meio físico, biótico e uso do solo",
        "Levantamento de vegetação, árvores e fauna, quando necessário",
        "Avaliação dos impactos e proposição de medidas de controle, mitigação e compensação",
        "Elaboração do relatório com mapas, fotos e anexos",
        "Acompanhamento de exigências técnicas durante a análise"
      ]}
      stepsTitle={"Como funciona"}
      steps={[
        {
          "title": "Conversa inicial",
          "text": "Você informa o tipo de empreendimento, a localização e o que o órgão solicitou."
        },
        {
          "title": "Levantamento",
          "text": "Visita à área e coleta dos dados de campo e da documentação."
        },
        {
          "title": "Elaboração",
          "text": "Elaboração do diagnóstico, da avaliação de impactos e das medidas propostas."
        },
        {
          "title": "Protocolo e acompanhamento",
          "text": "Protocolo do estudo e resposta às exigências técnicas que surgirem."
        },
        {
          "title": "Entrega e orientação",
          "text": "Orientação sobre condicionantes e próximos passos do licenciamento."
        }
      ]}
      areasTitle="Onde atendemos"
      areasText="Atendemos Cotia, Sorocaba, São Roque, Vargem Grande Paulista, Embu das Artes e Ibiúna, além de outras cidades do Estado de São Paulo, conforme disponibilidade e logística."
      areas={areas}
      faq={[
        {
          "q": "O que é o RAP?",
          "a": "É o Relatório Ambiental Preliminar, um estudo técnico que descreve o empreendimento e o local, avalia os possíveis impactos ambientais e propõe medidas de controle. É usado no licenciamento de atividades de menor potencial de impacto."
        },
        {
          "q": "Qual a diferença entre RAP e EIA/RIMA?",
          "a": "O EIA/RIMA é um estudo mais amplo, destinado a empreendimentos de maior impacto ambiental. O RAP é uma avaliação mais simples. Qual se aplica depende da atividade e da decisão do órgão ambiental."
        },
        {
          "q": "Meu empreendimento precisa de RAP?",
          "a": "Depende da atividade, do porte, da localização e da exigência do órgão. A análise inicial indica se o estudo é exigido no seu caso."
        },
        {
          "q": "O RAP substitui a licença ambiental?",
          "a": "Não. O RAP é um estudo que embasa a análise do órgão, e a licença só é emitida pelo órgão competente, se aprovado o pedido."
        },
        {
          "q": "Quanto tempo leva para elaborar o RAP?",
          "a": "O prazo depende da complexidade do caso, da área e dos levantamentos de campo, e não é possível prometer uma data. Na avaliação inicial explicamos as etapas."
        },
        {
          "q": "Vocês atendem a minha cidade?",
          "a": "Atendemos Cotia, Sorocaba, São Roque, Vargem Grande Paulista, Embu das Artes, Ibiúna e outras cidades do Estado de São Paulo, conforme disponibilidade e logística."
        }
      ]}
      related={[
        {
          "href": "/servicos/licenciamento-ambiental-cetesb",
          "label": "Licenciamento ambiental e CETESB"
        },
        {
          "href": "/servicos/autorizacao-corte-supressao-arvores",
          "label": "Corte de árvores e inventário arbóreo"
        },
        {
          "href": "/servicos/eiv-estudo-impacto-vizinhanca",
          "label": "EIV: Estudo de Impacto de Vizinhança"
        }
      ]}
      note={"As informações desta página são orientativas e não substituem a análise do seu caso. Exigências, prazos e procedimentos variam conforme o município, a atividade e a legislação vigente, e a decisão final cabe sempre ao órgão competente."}
    />
  );
}
