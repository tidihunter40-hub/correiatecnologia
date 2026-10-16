export type FaqItem = { question: string; answer: string };
export type FaqCategory = { id: string; title: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    id: 'equipamentos', title: 'Equipamentos', items: [
      { question: 'Quais equipamentos a Correia Tecnologia comercializa?', answer: 'A Correia Tecnologia trabalha com soluções para registro de ponto, controle de acesso e automação de entradas, incluindo relógios de ponto, terminais de reconhecimento facial e equipamentos de passagem. Consulte o catálogo e a equipe para confirmar modelos e disponibilidade.' },
      { question: 'Qual a diferença entre ponto eletrônico, cartográfico, biométrico e facial?', answer: 'O ponto eletrônico registra as marcações de jornada em equipamento ou sistema. O cartográfico utiliza cartões físicos; o biométrico identifica características como a impressão digital; e o facial usa o rosto da pessoa cadastrada. A forma de registro e os recursos disponíveis variam conforme o modelo e a solução contratada.' },
      { question: 'Como escolher o relógio de ponto ideal para minha empresa?', answer: 'Considere o número de colaboradores, os horários de maior movimento, os locais de instalação, a forma de identificação desejada e a necessidade de integração com um sistema de gestão. A equipe pode ajudar a avaliar essas informações antes do orçamento.' },
      { question: 'Os equipamentos funcionam sem internet?', answer: 'O funcionamento sem conexão depende do modelo, da configuração e das funções utilizadas. Antes de contratar, informe como é a infraestrutura do local para que a equipe confirme as opções adequadas.' },
      { question: 'Os equipamentos atendem pequenas e grandes empresas?', answer: 'Há soluções para operações de diferentes portes. A escolha depende do volume de pessoas, dos pontos de acesso e da rotina de cada empresa; por isso, a configuração é avaliada caso a caso.' },
    ],
  },
  {
    id: 'reconhecimento-facial', title: 'Reconhecimento facial', items: [
      { question: 'Como funciona o reconhecimento facial?', answer: 'Após o cadastro autorizado, um terminal compara o rosto apresentado com os dados registrados em um sistema compatível. Quando a identificação é aceita, o acesso ou a marcação de ponto pode ser registrado, conforme a finalidade e a configuração escolhidas.' },
      { question: 'O reconhecimento facial é seguro?', answer: 'A segurança depende do equipamento, da configuração, do controle de permissões e do tratamento adequado dos dados pessoais. A solução deve ser avaliada conforme o ambiente e as regras de privacidade aplicáveis.' },
      { question: 'Posso utilizar reconhecimento facial em condomínios?', answer: 'Sim, o reconhecimento facial pode ser avaliado para organizar a entrada de moradores, visitantes e prestadores. A implantação depende do fluxo, da infraestrutura, das regras do condomínio e dos cuidados com dados pessoais.' },
      { question: 'O reconhecimento facial pode ser integrado ao controle de acesso?', answer: 'Pode fazer parte de uma solução de controle de acesso e automação de entradas. A compatibilidade com catracas, portas, portões e sistemas existentes precisa ser confirmada para cada projeto.' },
    ],
  },
  {
    id: 'sistemas', title: 'Sistemas e softwares', items: [
      { question: 'A Correia Tecnologia trabalha com sistemas Secullum?', answer: 'Sim. O site apresenta soluções Secullum para tratamento de jornada, com comercialização, instalação e suporte em Salvador. Consulte a equipe para confirmar a versão e o escopo disponíveis.' },
      { question: 'Qual a diferença entre Secullum Ponto Web e Offline?', answer: 'São opções distintas para gestão de ponto, com formas de implantação e infraestrutura diferentes. O Ponto Web é apresentado como plataforma web, atualmente divulgada pela fabricante sob a marca Secullum RH. A escolha e os recursos contratados devem ser confirmados com a equipe.' },
      { question: 'Posso integrar meu relógio de ponto ao sistema?', answer: 'A integração pode ser possível, mas depende do modelo do relógio, da versão do software e dos recursos contratados. Informe à equipe os equipamentos e sistemas que você já utiliza para verificar a compatibilidade antes da implantação.' },
      { question: 'Como funciona o gerenciamento de jornada dos funcionários?', answer: 'As marcações de entrada, saída e intervalos podem ser reunidas em um sistema de tratamento de ponto para acompanhamento da jornada e geração de informações para o RH. Recursos e relatórios variam conforme a solução configurada.' },
    ],
  },
  {
    id: 'suporte', title: 'Instalação e suporte', items: [
      { question: 'A Correia Tecnologia realiza instalação de equipamentos?', answer: 'Sim. A empresa apresenta serviços de instalação de soluções de controle de acesso, ponto e automação. O escopo é definido após avaliação do local e dos equipamentos escolhidos.' },
      { question: 'A empresa oferece manutenção e suporte técnico?', answer: 'A Correia Tecnologia oferece orientação e suporte técnico para as soluções atendidas. A disponibilidade de manutenção e o alcance do atendimento são confirmados conforme o equipamento e as condições acordadas.' },
      { question: 'É possível solicitar assistência técnica?', answer: 'Sim. Entre em contato e informe o modelo do equipamento, o problema observado e o local de instalação. A equipe poderá avaliar as possibilidades de atendimento.' },
      { question: 'Vocês realizam configuração dos equipamentos?', answer: 'A instalação pode incluir configuração conforme o equipamento e o projeto. Cadastros, permissões e integrações necessários são definidos na avaliação técnica e na proposta.' },
    ],
  },
  {
    id: 'orcamentos', title: 'Orçamentos e contratação', items: [
      { question: 'A Correia Tecnologia vende ou aluga equipamentos?', answer: 'O site apresenta opções de venda e locação de equipamentos. Modelos disponíveis, instalação, suporte e condições comerciais são informados pela equipe conforme a necessidade do projeto.' },
      { question: 'Como solicitar um orçamento?', answer: 'Use a página de contato ou o WhatsApp comercial. Para agilizar a avaliação, informe o tipo de solução desejada, a quantidade de pessoas, o local de instalação e se já existem equipamentos ou sistemas no ambiente.' },
      { question: 'Qual o valor de um relógio de ponto eletrônico?', answer: 'O valor depende do modelo, da forma de identificação, dos recursos necessários e dos serviços incluídos. Solicite um orçamento para receber uma proposta adequada à sua empresa.' },
      { question: 'Onde a Correia Tecnologia realiza atendimentos?', answer: 'A empresa informa atendimento em Salvador e região, na Bahia. Para outros locais ou condições específicas de atendimento, consulte a equipe pelo WhatsApp ou pela página de contato.' },
    ],
  },
];

export const homeFaqQuestions = [
  faqCategories[0].items[0],
  faqCategories[0].items[2],
  faqCategories[1].items[0],
  faqCategories[2].items[0],
  faqCategories[3].items[0],
  faqCategories[4].items[1],
];
