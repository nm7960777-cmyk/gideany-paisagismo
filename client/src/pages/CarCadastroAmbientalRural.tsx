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

export default function CarCadastroAmbientalRural() {
  return (
    <ServiceLanding
      path={"/servicos/car-cadastro-ambiental-rural"}
      seoTitle={"CAR: Cadastro Ambiental Rural em SP | GR Paisagismo"}
      seoDescription={"Inscrição, retificação e regularização do CAR (Cadastro Ambiental Rural) para propriedades rurais em Cotia, Sorocaba, São Roque, Ibiúna e região de SP."}
      image={"/images/ambiental-caracterizacao-vegetacao.jpeg"}
      badge={"CAR • Propriedade rural • Regularização"}
      h1Before={"CAR: Cadastro Ambiental Rural para sua"}
      h1Highlight={"Propriedade"}
      intro={"Inscrição, retificação e regularização do CAR com apoio técnico: mapeamento do imóvel, delimitação das áreas protegidas e acompanhamento das pendências no sistema."}
      whatsappService={"CAR (Cadastro Ambiental Rural)"}
      whenTitle={"Quando é preciso inscrever ou retificar o CAR"}
      whenIntro={"O CAR é um registro eletrônico dos imóveis rurais, previsto no Código Florestal (Lei 12.651/2012). Ele reúne informações sobre a propriedade, as áreas de preservação e a vegetação nativa. Cada caso depende das características do imóvel."}
      whenItems={[
        {
          "title": "Imóvel rural ainda sem inscrição",
          "text": "Propriedades e posses rurais devem ser inscritas no CAR. Avaliamos o imóvel e preparamos o cadastro."
        },
        {
          "title": "Inscrição com pendências",
          "text": "Quando o sistema aponta inconsistências, como sobreposição ou divergência de área, é preciso retificar o cadastro."
        },
        {
          "title": "Compra, venda ou financiamento",
          "text": "O CAR costuma ser pedido em negociações, crédito rural e outros processos que exigem a situação ambiental do imóvel."
        },
        {
          "title": "Áreas de preservação e vegetação nativa",
          "text": "O cadastro identifica APP, reserva legal e vegetação nativa, que influenciam o que pode ser feito no imóvel."
        },
        {
          "title": "Possível adequação ambiental",
          "text": "Quando há passivo ambiental, pode ser necessário avaliar a regularização, conforme as regras estaduais."
        },
        {
          "title": "Atualização de dados",
          "text": "Mudanças de proprietário, divisão ou unificação de áreas podem exigir atualização do cadastro."
        }
      ]}
      includesTitle={"O que fazemos"}
      includes={[
        "Análise da documentação do imóvel e da situação no cadastro",
        "Mapeamento e delimitação do perímetro, das áreas de preservação e da vegetação nativa",
        "Inscrição ou retificação do CAR",
        "Acompanhamento de pendências apontadas pelo sistema",
        "Orientação sobre regularização ambiental, quando aplicável",
        "Integração com outros estudos, como inventário e caracterização de vegetação"
      ]}
      stepsTitle={"Como funciona"}
      steps={[
        {
          "title": "Conversa inicial",
          "text": "Você informa a localização do imóvel, a matrícula ou o documento da posse e a situação do cadastro."
        },
        {
          "title": "Levantamento",
          "text": "Reunimos a documentação e, quando necessário, fazemos o mapeamento da área."
        },
        {
          "title": "Elaboração",
          "text": "Preparamos as informações geográficas e cadastrais exigidas pelo sistema."
        },
        {
          "title": "Protocolo e acompanhamento",
          "text": "Fazemos a inscrição ou a retificação e acompanhamos as pendências."
        },
        {
          "title": "Entrega e orientação",
          "text": "Explicamos o resultado e os próximos passos para a regularidade do imóvel."
        }
      ]}
      areasTitle="Onde atendemos"
      areasText="Atendemos Cotia, Sorocaba, São Roque, Vargem Grande Paulista, Embu das Artes e Ibiúna, além de outras cidades do Estado de São Paulo, conforme disponibilidade e logística."
      areas={areas}
      faq={[
        {
          "q": "O que é o CAR?",
          "a": "É o Cadastro Ambiental Rural, um registro eletrônico nacional e obrigatório dos imóveis rurais, criado pelo Código Florestal. Ele reúne dados do imóvel e das áreas protegidas para controle, monitoramento e planejamento ambiental."
        },
        {
          "q": "Todo imóvel rural precisa de CAR?",
          "a": "Em regra, sim: propriedades e posses rurais devem ser inscritas. Como detalhes dependem do caso e da legislação vigente, a análise do imóvel esclarece a sua situação."
        },
        {
          "q": "O CAR é o mesmo que escritura ou regularização fundiária?",
          "a": "Não. O CAR é um cadastro ambiental e não comprova propriedade nem substitui a escritura ou a matrícula do imóvel."
        },
        {
          "q": "Meu CAR tem pendência. O que fazer?",
          "a": "Pendências, como sobreposição de áreas ou divergências de informação, geralmente exigem retificação do cadastro com os dados corretos. Avaliamos o apontamento e indicamos o caminho."
        },
        {
          "q": "Quanto tempo leva para fazer o CAR?",
          "a": "O prazo depende da documentação disponível, do tamanho do imóvel e da necessidade de mapeamento, e não é possível prometer uma data. Na avaliação inicial explicamos as etapas."
        },
        {
          "q": "Vocês atendem a minha cidade?",
          "a": "Atendemos Cotia, Sorocaba, São Roque, Vargem Grande Paulista, Embu das Artes, Ibiúna e outras cidades do Estado de São Paulo, conforme disponibilidade e logística."
        }
      ]}
      related={[
        {
          "href": "/servicos/autorizacao-corte-supressao-arvores",
          "label": "Corte de árvores e inventário arbóreo"
        },
        {
          "href": "/servicos/licenciamento-ambiental-cetesb",
          "label": "Licenciamento ambiental e CETESB"
        },
        {
          "href": "/servicos/rap-relatorio-ambiental-preliminar",
          "label": "RAP: Relatório Ambiental Preliminar"
        }
      ]}
      note={"As informações desta página são orientativas e não substituem a análise do seu caso. Exigências, prazos e procedimentos variam conforme o município, a atividade e a legislação vigente, e a decisão final cabe sempre ao órgão competente."}
    />
  );
}
