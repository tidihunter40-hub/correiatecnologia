export const siteUrl = 'https://correiatecnologia.com.br';

export const solutionPaths: Record<string, string> = {
  'controle-de-acesso-facial': '/solucoes/controle-de-acesso-facial',
  'relogios-de-ponto': '/solucoes/relogios-de-ponto',
  'automacao-de-entradas': '/solucoes/automacao-de-entradas',
  'venda-de-equipamentos': '/solucoes/venda-de-equipamentos',
  'locacao-de-equipamentos': '/solucoes/locacao-de-equipamentos',
  'instalacao-de-solucoes': '/solucoes/instalacao-e-suporte',
};

export const solutionPath = (serviceSlug: string) => solutionPaths[serviceSlug] ?? '/servicos';

export const contact = {
  phone: '(71) 3018-9812',
  phoneHref: '+557130189812',
  whatsapp: '5571991504761',
  email: 'crrelogios.2024@gmail.com',
  address: 'Av. Fernandes da Cunha, 340 – sala 301 – Mares, Salvador – BA',
  streetAddress: 'Av. Fernandes da Cunha, 340, sala 301, Mares',
  city: 'Salvador',
  region: 'BA',
};

// The map query intentionally omits the postal code until its current value is reconfirmed.
export const mapDestination = `${contact.streetAddress}, ${contact.city}, ${contact.region}`;
export const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapDestination)}`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapDestination)}`;

export const services = [
  { slug: 'controle-de-acesso-facial', title: 'Controle de Acesso Facial', category: 'Controle de acesso', short: 'Mais segurança e praticidade no controle de entrada e saída de pessoas com tecnologia de reconhecimento facial.', icon: 'face', image: '/images/acesso-escritorio.png', alt: 'Pessoa utilizando leitor facial em entrada de ambiente corporativo, imagem ilustrativa', features: ['Identificação facial', 'Controle de entradas', 'Segurança inteligente'], detail: 'Soluções de identificação facial para organizar o fluxo de pessoas e apoiar a gestão de acessos. A configuração depende do local, do volume de circulação e das regras de cada operação.' },
  { slug: 'relogios-de-ponto', title: 'Relógios de Ponto', category: 'Gestão de jornada', short: 'Soluções tecnológicas para registro de ponto, identificação de colaboradores e gestão da jornada de trabalho.', icon: 'clock', image: '/images/relogio-ponto-foto.webp', alt: 'Relógio eletrônico de ponto com leitor biométrico', features: ['Registro de ponto', 'Identificação facial', 'Gestão de jornada'], detail: 'Relógios de ponto e soluções de tratamento de jornada para empresas. Modelos, integrações e requisitos devem ser avaliados conforme a operação e a legislação aplicável.' },
  { slug: 'automacao-de-entradas', title: 'Automação de Entradas', category: 'Automação', short: 'Tecnologia para controlar e organizar o fluxo de pessoas em empresas, condomínios e estabelecimentos.', icon: 'gate', image: '/images/acesso-catraca.png', alt: 'Equipamento de controle de acesso em ambiente com catracas, imagem ilustrativa', features: ['Catracas eletrônicas', 'Controle de passagem', 'Automação inteligente'], detail: 'Automação de entradas integrada às necessidades do espaço, com orientação sobre equipamentos e configuração adequada ao fluxo de pessoas.' },
  { slug: 'venda-de-equipamentos', title: 'Venda de Equipamentos', category: 'Equipamentos', short: 'Equipamentos e soluções tecnológicas para atender às necessidades de segurança e automação do seu negócio.', icon: 'box', image: '/images/reference/servico-venda.webp', alt: 'Conjunto ilustrativo de terminais para controle de acesso', features: ['Tecnologia moderna', 'Variedade de soluções', 'Orientação especializada'], detail: 'Orientação comercial para escolher equipamentos de controle de acesso e ponto. Consulte disponibilidade, modelos e especificações atualizadas.' },
  { slug: 'locacao-de-equipamentos', title: 'Locação de Equipamentos', category: 'Locação', short: 'Soluções flexíveis para empresas que buscam tecnologia e praticidade sem necessariamente adquirir os equipamentos.', icon: 'calendar', image: '/images/reference/servico-locacao.webp', alt: 'Equipamentos de controle de acesso em composição ilustrativa para locação', features: ['Soluções flexíveis', 'Equipamentos tecnológicos', 'Atendimento personalizado'], detail: 'Opções de locação mediante análise de prazo, local de instalação e modelo do equipamento. O site original apresenta a locação com suporte técnico; condições sob consulta.' },
  { slug: 'instalacao-de-solucoes', title: 'Instalação de Soluções', category: 'Instalação e suporte', short: 'Instalação e configuração de equipamentos tecnológicos para controle de acesso e automação.', icon: 'tools', image: '/images/reference/servico-instalacao.webp', alt: 'Técnico instalando terminal de controle de acesso, imagem ilustrativa', features: ['Instalação técnica', 'Configuração', 'Orientação especializada'], detail: 'Instalação e configuração de soluções de acesso e ponto após avaliação técnica do local e alinhamento do escopo. Opções de suporte técnico devem ser confirmadas com a equipe.' },
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
  { title: 'Terminal de reconhecimento facial', kind: 'Controle de acesso', description: 'Terminal para identificação facial em ambientes corporativos e de circulação controlada.', features: ['Identificação facial', 'Integração com seu projeto', 'Modelos e especificações sob consulta'], applications: 'Empresas, condomínios, clínicas e academias', icon: '◉', image: '/images/catalog/terminal-reconhecimento-facial.webp', alt: 'Terminal de reconhecimento facial instalado em uma entrada corporativa; imagem da referência enviada pelo cliente' },
  { title: 'Relógio eletrônico de ponto', kind: 'Gestão de jornada', description: 'Equipamentos para registro de ponto e suporte às rotinas da jornada de trabalho.', features: ['Opções biométricas e cartão', 'Compatibilidade varia por modelo', 'Consulte o modelo ideal'], applications: 'Empresas, comércios, escolas e clínicas', icon: '◷', image: '/images/catalog/relogio-eletronico-ponto.webp', alt: 'Relógio de ponto biométrico em ambiente de escritório; imagem da referência enviada pelo cliente' },
  { title: 'Catraca e controle de passagem', kind: 'Automação de entradas', description: 'Equipamentos para organizar passagens em entradas com fluxo definido.', features: ['Alta resistência e fluxo seguro', 'Possibilidade de integração', 'Configurações sob consulta'], applications: 'Academias, empresas, escolas e condomínios', icon: '↗', image: '/images/catalog/catraca-controle-passagem.webp', alt: 'Catracas de aço inox em uma entrada corporativa; imagem da referência enviada pelo cliente' },
  { title: 'Acessórios e suprimentos para ponto', kind: 'Acessórios', description: 'Itens de reposição e consumo para equipamentos de controle de ponto.', features: ['Bobinas e cartões compatíveis', 'Compatibilidade por modelo', 'Consulte o item necessário'], applications: 'Empresas e operações com relógio de ponto', icon: '▤', image: '/images/catalog/acessorios-suprimentos-ponto.webp', alt: 'Bobinas, cartões, pulseiras e acessórios para controle de ponto; imagem da referência enviada pelo cliente' },
];

export const featuredEquipment = [
  {
    title: 'Terminal de Reconhecimento Facial',
    kind: 'Controle de acesso',
    description: 'Tecnologia para identificação facial e controle de entrada e saída em empresas, condomínios e estabelecimentos.',
    image: '/images/equipamentos/destaque-reconhecimento-facial.webp',
    alt: 'Pessoa utilizando terminal de reconhecimento facial instalado em uma entrada corporativa',
    features: ['Reconhecimento facial', 'Controle de acesso', 'Tecnologia moderna', 'Mais segurança'],
    quote: 'Olá! Conheci a Correia Tecnologia pelo site e gostaria de solicitar um orçamento para um terminal de reconhecimento facial.',
  },
  {
    title: 'Relógio de Ponto Biométrico',
    kind: 'Gestão de jornada',
    description: 'Soluções para registro de ponto e organização da jornada de trabalho, com mais precisão e confiabilidade.',
    image: '/images/equipamentos/destaque-relogio-ponto.webp',
    alt: 'Funcionário registrando o ponto em relógio biométrico com tela e leitor digital',
    features: ['Registro de ponto', 'Leitura biométrica', 'Gestão de jornada', 'Relatórios completos'],
    quote: 'Olá! Conheci a Correia Tecnologia pelo site e gostaria de solicitar um orçamento para um relógio de ponto.',
  },
  {
    title: 'Catracas e Controle de Acesso',
    kind: 'Automação de entradas',
    description: 'Equipamentos para organizar e controlar a circulação de pessoas em ambientes corporativos e comerciais.',
    image: '/images/equipamentos/destaque-catracas.webp',
    alt: 'Catracas eletrônicas com leitor de acesso em uma entrada corporativa',
    features: ['Controle de passagem', 'Automação de entradas', 'Segurança e praticidade', 'Integração com sistemas'],
    quote: 'Olá! Conheci a Correia Tecnologia pelo site e gostaria de solicitar um orçamento para catracas e controle de acesso.',
  },
];

export const whatsappLink = (message: string) => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
