export const siteUrl = 'https://correiatecnologia.com.br';

export const contact = {
  phone: '(71) 3018-9812',
  phoneHref: '+557130189812',
  whatsapp: '5571991504761',
  address: 'Av. Fernandes da Cunha, 340 – sala 301 – Mares, Salvador – BA, 40410-200',
  streetAddress: 'Av. Fernandes da Cunha, 340, sala 301, Mares',
  postalCode: '40410-200',
  city: 'Salvador',
  region: 'BA',
};

// The map query intentionally omits the postal code until its current value is reconfirmed.
export const mapDestination = `${contact.streetAddress}, ${contact.city}, ${contact.region}`;
export const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapDestination)}`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapDestination)}`;

export const services = [
  { slug: 'controle-de-acesso-facial', title: 'Controle de acesso facial', short: 'Identificação ágil e gestão de entradas para pessoas autorizadas.', icon: '◉', image: '/images/terminal-acesso.webp', alt: 'Leitor facial instalado na entrada de um ambiente corporativo', detail: 'Soluções de identificação facial para organizar o fluxo de pessoas e apoiar a gestão de acessos. A configuração depende do local, do volume de circulação e das regras de cada operação.' },
  { slug: 'relogios-de-ponto', title: 'Relógios de ponto', short: 'Equipamentos e sistemas para registro e acompanhamento da jornada.', icon: '◷', image: '/images/relogio-ponto-foto.webp', alt: 'Relógio eletrônico de ponto com leitor biométrico', detail: 'Relógios de ponto e soluções de tratamento de jornada para empresas. Modelos, integrações e requisitos devem ser avaliados conforme a operação e a legislação aplicável.' },
  { slug: 'automacao-de-entradas', title: 'Automação de entradas', short: 'Tecnologia para tornar acessos mais organizados e funcionais.', icon: '⌁', image: '/images/terminal-acesso.webp', alt: 'Leitor facial junto a uma porta de acesso', detail: 'Automação de entradas integrada às necessidades do espaço, com orientação sobre equipamentos e configuração adequada ao fluxo de pessoas.' },
  { slug: 'venda-de-equipamentos', title: 'Venda de equipamentos', short: 'Equipamentos selecionados de acordo com a necessidade do projeto.', icon: '▣', image: '/images/relogio-ponto-foto.webp', alt: 'Equipamento eletrônico de registro de ponto', detail: 'Orientação comercial para escolher equipamentos de controle de acesso e ponto. Consulte disponibilidade, modelos e especificações atualizadas.' },
  { slug: 'locacao-de-equipamentos', title: 'Locação de equipamentos', short: 'Alternativas de locação para diferentes cenários de uso.', icon: '↗', image: '/images/terminal-acesso.webp', alt: 'Equipamento de controle de acesso em uma entrada', detail: 'Opções de locação mediante análise de prazo, local de instalação e modelo do equipamento. O site original apresenta a locação com suporte técnico; condições sob consulta.' },
  { slug: 'instalacao-de-solucoes', title: 'Instalação de soluções', short: 'Implantação planejada para a infraestrutura do seu espaço.', icon: '⌘', image: '/images/terminal-acesso.webp', alt: 'Leitor facial instalado em uma entrada corporativa', detail: 'Instalação e configuração de soluções de acesso e ponto após avaliação técnica do local e alinhamento do escopo. Opções de suporte técnico devem ser confirmadas com a equipe.' },
];

export const segments = [
  { slug: 'condominios', title: 'Condomínios', text: 'Organize a entrada de moradores, visitantes e prestadores com controle de acesso adequado ao fluxo do condomínio.', icon: '⌂' },
  { slug: 'empresas', title: 'Empresas', text: 'Integre o controle de acesso e a gestão de jornada às rotinas e aos espaços de trabalho.', icon: '▦' },
  { slug: 'escolas', title: 'Escolas', text: 'Estruture acessos de alunos, equipes e visitantes com atenção às rotinas da comunidade escolar.', icon: '⌑' },
  { slug: 'academias', title: 'Academias', text: 'Agilize a liberação de alunos e equipes com soluções dimensionadas para horários de pico.', icon: '↗' },
  { slug: 'comercios', title: 'Comércios', text: 'Apoie a operação da equipe e organize áreas restritas com controles simples de administrar.', icon: '◫' },
  { slug: 'clinicas', title: 'Clínicas', text: 'Gerencie entradas de equipes e visitantes com soluções compatíveis com a rotina do atendimento.', icon: '＋' },
];

export const products = [
  { title: 'Terminal de reconhecimento facial', kind: 'Controle de acesso', description: 'Terminal para identificação facial em ambientes corporativos e de circulação controlada.', features: ['Identificação facial', 'Integração conforme projeto', 'Modelos e especificações sob consulta'], applications: 'Empresas, condomínios, clínicas e academias', icon: '◉', image: '/images/terminal-acesso.webp', alt: 'Acesso facial em entrada corporativa, com terminal instalado ao lado de uma porta de vidro' },
  { title: 'Relógio eletrônico de ponto', kind: 'Gestão de jornada', description: 'Equipamentos para registro de ponto e suporte às rotinas de jornada de trabalho.', features: ['Opções biométricas e outras modalidades', 'Compatibilidade varia por modelo', 'Consulte disponibilidade'], applications: 'Empresas, comércios, escolas e clínicas', icon: '◷', image: '/images/relogio-ponto-foto.webp', alt: 'Relógio eletrônico de ponto em close, com tela e leitor biométrico' },
  { title: 'Catraca e controle de passagem', kind: 'Automação de entradas', description: 'Equipamentos para organizar passagens em entradas com fluxo definido.', features: ['Avaliação de fluxo e espaço', 'Possibilidade de integração', 'Configuração sob consulta'], applications: 'Academias, empresas, escolas e condomínios', icon: '↗', image: '/images/acesso-catraca.png', alt: 'Instalação de controle de acesso em entrada com catracas' },
  { title: 'Acessórios e suprimentos para ponto', kind: 'Acessórios', description: 'Itens de reposição e consumíveis para equipamentos de controle de ponto.', features: ['Bobinas, cartões e acessórios conforme disponibilidade', 'Compatibilidade por modelo', 'Consulte o item necessário'], applications: 'Empresas e operações com relógio de ponto', icon: '▤' },
];

export const featuredEquipment = [
  {
    title: 'Terminal de Reconhecimento Facial',
    kind: 'Controle de acesso',
    description: 'Tecnologia para identificação facial e controle de entrada e saída em empresas, condomínios e estabelecimentos.',
    image: '/images/terminal-acesso.png',
    alt: 'Terminal de reconhecimento facial instalado junto a uma entrada corporativa',
    features: ['Reconhecimento facial', 'Controle de acesso', 'Tecnologia moderna'],
    quote: 'Olá! Conheci a Correia Tecnologia pelo site e gostaria de solicitar um orçamento para um terminal de reconhecimento facial.',
  },
  {
    title: 'Relógio de Ponto Biométrico',
    kind: 'Gestão de jornada',
    description: 'Soluções para registro de ponto e organização da jornada de trabalho dos colaboradores.',
    image: '/images/relogio-ponto-foto.webp',
    alt: 'Relógio eletrônico de ponto biométrico em close',
    features: ['Registro de ponto', 'Leitura biométrica', 'Gestão de jornada'],
    quote: 'Olá! Conheci a Correia Tecnologia pelo site e gostaria de solicitar um orçamento para um relógio de ponto.',
  },
  {
    title: 'Catracas e Controle de Acesso',
    kind: 'Automação de entradas',
    description: 'Equipamentos para organizar e controlar a circulação de pessoas em ambientes corporativos e comerciais.',
    image: '/images/acesso-catraca.png',
    alt: 'Instalação de controle de acesso em uma entrada corporativa',
    features: ['Controle de passagem', 'Automação de entradas', 'Segurança e praticidade'],
    quote: 'Olá! Conheci a Correia Tecnologia pelo site e gostaria de solicitar um orçamento para catracas e controle de acesso.',
  },
];

export const whatsappLink = (message: string) => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
