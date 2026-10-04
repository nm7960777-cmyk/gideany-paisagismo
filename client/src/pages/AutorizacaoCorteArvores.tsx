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

export default function AutorizacaoCorteArvores() {
  return (
    <ServiceLanding
      path="/servicos/autorizacao-corte-supressao-arvores"
      seoTitle="Autorização para Corte de Árvores e Inventário Arbóreo | GR"
      seoDescription="Autorização para corte e supressão de árvores, inventário arbóreo, parecer técnico e compensação ambiental. Atendimento em Cotia, Sorocaba, São Roque, Ibiúna e região de SP."
      image="/images/ambiental-acompanhamento-supressao.jpeg"
      badge="Corte • Supressão • Inventário arbóreo"
      h1Before="Autorização para Corte de Árvores e"
      h1Highlight="Inventário Arbóreo"
      intro="Orientação técnica para quem precisa cortar, manejar ou suprimir árvores com segurança: do levantamento das árvores ao parecer técnico e à compensação ambiental, conforme as regras do órgão competente."
      whatsappService="autorização para corte de árvores / inventário arbóreo"
      whenTitle="Quando é preciso de autorização para cortar árvores"
      whenIntro="Em geral, a retirada de árvores exige autorização, e as regras mudam conforme o tipo de vegetação, a localização do imóvel (dentro ou fora de Área de Preservação Permanente) e o município. Antes de cortar, vale entender qual caminho se aplica ao seu caso."
      whenItems={[
        {
          title: "Árvore isolada em terreno urbano ou rural",
          text: "A retirada de árvores nativas isoladas costuma depender de autorização. Em alguns casos o procedimento é conduzido pela prefeitura; em outros, por órgão ambiental estadual.",
        },
        {
          title: "Obra, construção ou regularização de imóvel",
          text: "Quando há árvores na área da obra, o órgão pode pedir inventário arbóreo e definir medidas de compensação antes da liberação.",
        },
        {
          title: "Árvore com risco ou doente",
          text: "Árvores com risco de queda ou em mau estado costumam exigir parecer técnico para fundamentar o pedido de manejo ou remoção.",
        },
        {
          title: "Intervenção em Área de Preservação Permanente",
          text: "Qualquer intervenção em APP, como margens de córregos e nascentes, depende de autorização específica.",
        },
        {
          title: "Compensação ambiental",
          text: "Quando a supressão é autorizada, o órgão pode exigir compensação, geralmente por plantio de mudas ou outra medida definida conforme a legislação vigente.",
        },
        {
          title: "Notificação ou exigência recebida",
          text: "Recebeu um auto, notificação ou pedido de documentos sobre vegetação? Avaliamos o que foi solicitado e quais documentos técnicos são necessários.",
        },
      ]}
      includesTitle="O que fazemos"
      includes={[
        "Inventário e levantamento cadastral arbóreo, com identificação das árvores, medições e localização",
        "Parecer técnico para manejo ou supressão de árvores",
        "Plano de compensação arbórea ou vegetal, quando exigido",
        "Orientação sobre a documentação e o caminho junto ao órgão competente",
        "Acompanhamento técnico durante a supressão autorizada",
        "Monitoramento de plantio de mudas (TCRA e TCA), quando aplicável",
      ]}
      stepsTitle="Como funciona"
      steps={[
        {
          title: "Conversa e análise do caso",
          text: "Você informa a cidade, o imóvel, a situação das árvores e qualquer exigência recebida.",
        },
        {
          title: "Visita técnica e levantamento",
          text: "Quando necessário, fazemos o levantamento em campo para identificar e medir as árvores.",
        },
        {
          title: "Documentos técnicos",
          text: "Elaboramos o inventário, o parecer e o plano de compensação, conforme o que o órgão exige.",
        },
        {
          title: "Encaminhamento e acompanhamento",
          text: "Orientamos o pedido junto ao órgão competente e acompanhamos eventuais exigências técnicas.",
        },
        {
          title: "Execução e cumprimento",
          text: "Acompanhamos a supressão autorizada e o cumprimento das medidas de compensação.",
        },
      ]}
      areasTitle="Onde atendemos"
      areasText="Atendemos Cotia, Sorocaba, São Roque, Vargem Grande Paulista, Embu das Artes e Ibiúna, além de outras cidades do Estado de São Paulo, conforme disponibilidade e logística."
      areas={areas}
      faq={[
        {
          q: "Preciso de autorização para cortar uma árvore no meu terreno?",
          a: "Em geral, sim, principalmente quando se trata de árvore nativa ou de área protegida, e as regras variam conforme o município e a localização do imóvel. Árvores em Área de Preservação Permanente têm exigências próprias. Para espécies exóticas ou plantadas, a regra pode ser diferente e depende do município. O primeiro passo é uma análise técnica do seu caso.",
        },
        {
          q: "O que é um inventário arbóreo?",
          a: "É o levantamento das árvores de uma área, com identificação da espécie, medidas como diâmetro e altura, localização e condição de cada árvore. Ele serve de base para pedidos de autorização, projetos e definição de compensação.",
        },
        {
          q: "O que é compensação ambiental?",
          a: "É a medida exigida pelo órgão ambiental quando a supressão de árvores é autorizada, geralmente envolvendo o plantio de mudas ou outra ação equivalente. A forma e a quantidade são definidas pelo órgão, de acordo com a legislação vigente.",
        },
        {
          q: "Posso cortar a árvore primeiro e regularizar depois?",
          a: "Não recomendamos. Cortar árvores sem a autorização exigida pode configurar infração ambiental e gerar penalidades. Antes de qualquer corte, procure orientação técnica.",
        },
        {
          q: "Quanto tempo leva para conseguir a autorização?",
          a: "O prazo depende do tipo de intervenção, do município e do órgão responsável, e não é possível prometer uma data. Na avaliação inicial explicamos as etapas e o que pode influenciar o tempo.",
        },
        {
          q: "Vocês atendem a minha cidade?",
          a: "Atendemos Cotia, Sorocaba, São Roque, Vargem Grande Paulista, Embu das Artes, Ibiúna e outras cidades do Estado de São Paulo, conforme disponibilidade e logística.",
        },
      ]}
      related={[
        {
          href: "/servicos/licenciamento-ambiental-cetesb",
          label: "Licenciamento ambiental e CETESB",
        },
        {
          href: "/servicos/consultoria-ambiental",
          label: "RAP, EIV e demais estudos ambientais",
        },
        { href: "/blog", label: "Artigos do blog" },
      ]}
      note="As informações desta página são orientativas e não substituem a análise do seu caso. Exigências, prazos e procedimentos variam conforme o município, o tipo de vegetação e a legislação vigente, e a decisão final cabe sempre ao órgão competente."
    />
  );
}
