export type ServiceSeoContent = {
  title: string;
  description: string;
  what: string;
  process: string;
  applications: string;
  segments: string[];
  benefits: string[];
  questions: { question: string; answer: string }[];
};

export const serviceSeoContent: Record<string, ServiceSeoContent> = {
  'controle-de-acesso-facial': {
    title: 'Controle de Acesso Facial em Salvador | Correia Tecnologia',
    description: 'Controle de acesso facial em Salvador para empresas e condomínios. Consulte equipamentos, avaliação do ambiente, instalação e orçamento com a Correia Tecnologia.',
    what: 'Controle de acesso facial usa a identificação do rosto para apoiar a liberação de entradas conforme as permissões configuradas para cada ambiente. Os recursos e o modo de operação dependem do equipamento escolhido.',
    process: 'A implantação começa pelo levantamento das entradas, do fluxo de pessoas e das regras de circulação. Com essas informações, a equipe pode orientar sobre o terminal e a configuração compatíveis com o local.',
    applications: 'Pode ser avaliado para entradas de empresas, condomínios, escolas, clínicas e outros estabelecimentos que precisem organizar a circulação de pessoas.',
    segments: ['empresas', 'condominios', 'escolas', 'clinicas'],
    benefits: ['Organização das permissões de entrada', 'Identificação facial conforme o equipamento', 'Solução avaliada para o fluxo e a estrutura do local'],
    questions: [
      { question: 'O sistema funciona em qualquer entrada?', answer: 'A compatibilidade depende da estrutura, do fluxo e do equipamento. A equipe avalia essas condições antes de indicar uma solução.' },
      { question: 'A Correia instala o controle de acesso facial em Salvador?', answer: 'A empresa atende consultas de venda, locação e instalação em Salvador. O escopo e a disponibilidade devem ser confirmados com a equipe.' },
    ],
  },
  'relogios-de-ponto': {
    title: 'Relógio de Ponto Facial em Salvador | Correia Tecnologia',
    description: 'Venda, locação e instalação de relógios de ponto facial em Salvador. Conheça nossas soluções e solicite um orçamento.',
    what: 'Relógios de ponto facial registram marcações de jornada com identificação por reconhecimento facial, conforme os recursos do modelo e do sistema compatível.',
    process: 'A escolha considera a rotina de marcação, o número de colaboradores, as formas de identificação desejadas e eventuais integrações. Modelos, requisitos e disponibilidade são confirmados antes da contratação.',
    applications: 'Empresas e operações que precisam organizar registros de entrada, saída e outras marcações de jornada podem consultar opções de relógios de ponto.',
    segments: ['empresas', 'comercios', 'escolas', 'clinicas'],
    benefits: ['Apoio ao registro da jornada de trabalho', 'Identificação facial nos modelos compatíveis', 'Consulta de compra, locação, instalação e suporte'],
    questions: [
      { question: 'Há relógio de ponto facial à venda em Salvador?', answer: 'A Correia Tecnologia recebe consultas sobre venda e locação em Salvador. Modelos e disponibilidade são confirmados com a equipe.' },
      { question: 'A instalação está incluída?', answer: 'O escopo de instalação e suporte depende do equipamento e das condições do projeto. Consulte a equipe ao solicitar o orçamento.' },
    ],
  },
  'automacao-de-entradas': {
    title: 'Automação de Entradas em Salvador | Correia Tecnologia',
    description: 'Consulte soluções de automação de entradas e catracas em Salvador. Avaliação do fluxo, equipamentos e orçamento com a Correia Tecnologia.',
    what: 'A automação de entradas combina equipamentos de passagem e controle para organizar a circulação de pessoas em um acesso definido.',
    process: 'A solução é avaliada considerando o espaço disponível, o fluxo esperado, as regras de acesso e a infraestrutura. Catracas e formas de controle são especificadas de acordo com as informações do local.',
    applications: 'Pode ser considerada em empresas, academias, escolas, condomínios e estabelecimentos com entradas que exijam organização do fluxo.',
    segments: ['empresas', 'academias', 'escolas', 'condominios', 'comercios'],
    benefits: ['Fluxo de passagem organizado', 'Equipamento avaliado conforme o espaço', 'Possibilidade de integrar controle de acesso conforme o projeto'],
    questions: [
      { question: 'A Correia fornece catracas eletrônicas em Salvador?', answer: 'A empresa recebe consultas sobre catracas e automação. Modelos, disponibilidade e compatibilidade são avaliados com a equipe.' },
      { question: 'Como escolher a catraca adequada?', answer: 'A escolha depende do fluxo, do espaço e das regras de circulação. Compartilhe essas informações para receber uma orientação inicial.' },
    ],
  },
  'venda-de-equipamentos': {
    title: 'Venda de Equipamentos de Acesso e Ponto em Salvador | Correia Tecnologia',
    description: 'Consulte equipamentos de controle de acesso, reconhecimento facial, catracas e relógios de ponto à venda em Salvador. Modelos e disponibilidade sob consulta.',
    what: 'A Correia Tecnologia recebe consultas comerciais para equipamentos de controle de acesso, automação de entradas e registro de ponto.',
    process: 'Informe o uso previsto, o ambiente e o tipo de equipamento procurado. A equipe confirma modelos, características, disponibilidade e condições comerciais antes do orçamento.',
    applications: 'As categorias atendem consultas para empresas, condomínios, escolas, academias, comércios e clínicas, conforme o equipamento e a necessidade.',
    segments: ['empresas', 'condominios', 'escolas', 'academias', 'comercios', 'clinicas'],
    benefits: ['Orientação para escolher a categoria', 'Consulta de disponibilidade e características', 'Orçamento alinhado ao uso informado'],
    questions: [
      { question: 'Quais equipamentos estão disponíveis para venda?', answer: 'O catálogo apresenta categorias. Modelos e disponibilidade atualizados devem ser confirmados diretamente com a equipe.' },
      { question: 'O catálogo informa preços?', answer: 'Não. Os equipamentos são apresentados sem checkout e sem preços publicados; solicite um orçamento para consultar as condições.' },
    ],
  },
  'locacao-de-equipamentos': {
    title: 'Locação de Controle de Acesso em Salvador | Correia Tecnologia',
    description: 'Consulte locação de equipamentos de controle de acesso, automação e ponto em Salvador. Prazo, disponibilidade, instalação e condições sob consulta.',
    what: 'A locação permite consultar o uso de equipamentos de controle de acesso, automação e ponto sem pressupor compra. As opções dependem do equipamento e das condições comerciais vigentes.',
    process: 'A equipe precisa entender a aplicação, o local e o período pretendido para verificar disponibilidade e condições. Instalação e suporte são tratados conforme o escopo acordado.',
    applications: 'Empresas e estabelecimentos podem consultar a modalidade para projetos de controle de acesso e gestão de ponto em Salvador.',
    segments: ['empresas', 'condominios'],
    benefits: ['Consulta de alternativa à compra', 'Opções avaliadas conforme aplicação e período', 'Condições comerciais confirmadas com a equipe'],
    questions: [
      { question: 'Quais equipamentos podem ser alugados?', answer: 'As opções variam conforme o catálogo e a disponibilidade. Informe o equipamento e a aplicação para receber uma confirmação.' },
      { question: 'A instalação acompanha a locação?', answer: 'A instalação e o suporte dependem das condições do projeto e devem ser confirmados no orçamento.' },
    ],
  },
  'instalacao-de-solucoes': {
    title: 'Instalação de Controle de Acesso em Salvador | Correia Tecnologia',
    description: 'Solicite instalação e configuração de controle de acesso, relógios de ponto e automação em Salvador. Escopo definido após avaliação do ambiente.',
    what: 'A instalação prepara os equipamentos de controle de acesso, ponto ou automação para o ambiente e a finalidade definidos no projeto.',
    process: 'Antes da implantação, são consideradas a infraestrutura existente, a posição dos equipamentos e as necessidades da operação. A configuração, o escopo e eventual suporte são confirmados com a equipe.',
    applications: 'Instalações podem ser avaliadas para empresas, condomínios e estabelecimentos que consultem soluções de acesso, ponto ou automação.',
    segments: ['empresas', 'condominios', 'escolas'],
    benefits: ['Avaliação prévia do ambiente', 'Configuração conforme o equipamento e o projeto', 'Orientação sobre escopo e suporte'],
    questions: [
      { question: 'A Correia instala equipamentos em Salvador?', answer: 'A empresa recebe consultas sobre instalação em Salvador. O local, a infraestrutura e o equipamento são avaliados para definir o escopo.' },
      { question: 'O suporte técnico está incluído?', answer: 'As condições de suporte variam conforme o equipamento e o serviço contratado. Confirme os detalhes no orçamento.' },
    ],
  },
};
