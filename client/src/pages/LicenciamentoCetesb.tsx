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

export default function LicenciamentoCetesb() {
  return (
    <ServiceLanding
      path="/servicos/licenciamento-ambiental-cetesb"
      seoTitle="Licenciamento Ambiental CETESB e Regularização | GR Paisagismo"
      seoDescription="Licenciamento e regularização ambiental na CETESB: licença prévia, de instalação e de operação, orientação e documentação técnica. Atendimento em SP e região."
      image="/images/ambiental-hero-campo-dap.jpeg"
      badge="Licenciamento • Regularização • CETESB"
      h1Before="Licenciamento Ambiental e Regularização na"
      h1Highlight="CETESB"
      intro="Orientação técnica para empresas e empreendimentos que precisam obter, renovar ou regularizar a licença ambiental: do enquadramento da atividade à documentação e ao acompanhamento do processo."
      whatsappService="licenciamento ambiental / regularização CETESB"
      whenTitle="Quando a empresa precisa de licenciamento ambiental"
      whenIntro="O licenciamento ambiental estadual é conduzido pela CETESB para atividades e empreendimentos potencialmente poluidores. Quais licenças se aplicam depende da atividade, do porte e da localização, por isso o primeiro passo é o enquadramento."
      whenItems={[
        {
          title: "Nova atividade ou empreendimento",
          text: "Dependendo da atividade, o licenciamento começa antes da obra, com a licença prévia e a licença de instalação.",
        },
        {
          title: "Atividade funcionando sem licença",
          text: "Empresas que já operam sem a licença de operação, ou com ela vencida, precisam avaliar como regularizar a situação.",
        },
        {
          title: "Renovação da licença de operação",
          text: "A licença de operação tem validade, que varia conforme a atividade, e precisa ser renovada após o vencimento.",
        },
        {
          title: "Ampliação ou mudança no processo",
          text: "Ampliação da área, aumento de capacidade ou mudança de processo podem exigir novo licenciamento ou alteração da licença.",
        },
        {
          title: "Notificação ou exigência da CETESB",
          text: "Recebeu uma notificação, um auto ou um pedido de documentos? Avaliamos o que foi solicitado e quais estudos ou documentos são necessários.",
        },
        {
          title: "Possível dispensa de licença",
          text: "Algumas atividades podem ser dispensadas do licenciamento. A análise técnica indica se esse é o seu caso.",
        },
      ]}
      includesTitle="O que fazemos"
      includes={[
        "Análise de enquadramento: se a atividade precisa de licença e de qual tipo",
        "Levantamento da documentação existente e do que ainda falta",
        "Elaboração dos estudos e documentos técnicos exigidos no processo",
        "Estudos ambientais complementares, como RAP, inventário arbóreo e caracterização de vegetação, quando exigidos",
        "Acompanhamento do processo e resposta a exigências técnicas",
        "Orientação sobre condicionantes e prazos de renovação",
      ]}
      stepsTitle="Como funciona"
      steps={[
        {
          title: "Diagnóstico inicial",
          text: "Você informa a atividade, o endereço, o porte e a situação atual da licença ou da exigência recebida.",
        },
        {
          title: "Enquadramento",
          text: "Avaliamos qual licença se aplica ao seu caso, ou se a atividade pode ser dispensada.",
        },
        {
          title: "Documentação e estudos",
          text: "Preparamos os documentos e estudos técnicos exigidos, com profissionais habilitados em cada área.",
        },
        {
          title: "Protocolo e acompanhamento",
          text: "Acompanhamos o processo e respondemos às exigências técnicas que surgirem.",
        },
        {
          title: "Condicionantes e renovação",
          text: "Orientamos o cumprimento das condicionantes e os prazos para renovação da licença.",
        },
      ]}
      areasTitle="Onde atendemos"
      areasText="Atendemos Cotia, Sorocaba, São Roque, Vargem Grande Paulista, Embu das Artes e Ibiúna, além de outras cidades do Estado de São Paulo, conforme disponibilidade e logística."
      areas={areas}
      faq={[
        {
          q: "Quais são as licenças ambientais da CETESB?",
          a: "As principais são a Licença Prévia (LP), que define os requisitos básicos nas fases de localização, instalação e operação; a Licença de Instalação (LI), que autoriza iniciar construção, reforma, instalação ou ampliação; e a Licença de Operação (LO), que autoriza o funcionamento após a conclusão das obras. Há ainda o Parecer de Viabilidade de Localização, opcional, que avalia as restrições ambientais do local antes do projeto.",
        },
        {
          q: "Minha empresa precisa de licença da CETESB?",
          a: "Depende da atividade, do porte e da localização. O licenciamento estadual se aplica a atividades potencialmente poluidoras previstas na legislação, e algumas atividades podem ser dispensadas ou tratadas por outro órgão, como a prefeitura. A análise de enquadramento esclarece o seu caso.",
        },
        {
          q: "O que acontece se a empresa funciona sem a licença exigida?",
          a: "Operar sem a licença exigida pode gerar autuação e outras penalidades. O melhor caminho é regularizar a situação com orientação técnica, o quanto antes.",
        },
        {
          q: "A licença de operação tem validade?",
          a: "Sim. A validade varia conforme a atividade, e a renovação é necessária após o vencimento. Acompanhar o prazo evita que a empresa fique irregular.",
        },
        {
          q: "Quanto tempo leva para obter a licença?",
          a: "O prazo depende da atividade, da complexidade do caso e da análise do órgão, e não é possível prometer uma data. Na avaliação inicial explicamos as etapas e o que pode influenciar o tempo.",
        },
        {
          q: "Vocês atendem a minha cidade?",
          a: "Atendemos Cotia, Sorocaba, São Roque, Vargem Grande Paulista, Embu das Artes, Ibiúna e outras cidades do Estado de São Paulo, conforme disponibilidade e logística.",
        },
      ]}
      related={[
        {
          href: "/servicos/autorizacao-corte-supressao-arvores",
          label: "Autorização para corte de árvores e inventário arbóreo",
        },
        {
          href: "/servicos/consultoria-ambiental",
          label: "RAP, EIV e demais estudos ambientais",
        },
        { href: "/blog", label: "Artigos do blog" },
      ]}
      note="As informações desta página são orientativas e não substituem a análise do seu caso. Exigências, prazos e procedimentos variam conforme a atividade, o município e a legislação vigente, e a decisão final cabe sempre ao órgão competente."
    />
  );
}
