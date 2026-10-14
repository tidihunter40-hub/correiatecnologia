export const siteUrl = 'https://www.correiatecnologia.com.br';

export const solutionPaths: Record<string, string> = {
  'controle-de-acesso-facial': '/controle-de-acesso-facial-salvador',
  'relogios-de-ponto': '/relogio-de-ponto-facial-salvador',
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
  { slug: 'controle-de-acesso-facial', title: 'Controle de Acesso Facial', category: 'Controle de acesso', short: 'Mais segurança e praticidade no controle de entrada e saída de pessoas com tecnologia de reconhecimento facial.', icon: 'face', image: '/images/solutions/acesso-facial.webp', alt: 'Visitante utilizando terminal de reconhecimento facial em entrada corporativa; imagem ilustrativa', features: ['Identificação facial', 'Controle de entradas', 'Segurança inteligente'], detail: 'Soluções de identificação facial para organizar o fluxo de pessoas e apoiar a gestão de acessos. A configuração depende do local, do volume de circulação e das regras de cada operação.' },
  { slug: 'relogios-de-ponto', title: 'Relógios de Ponto', category: 'Gestão de jornada', short: 'Soluções tecnológicas para registro de ponto, identificação de colaboradores e gestão da jornada de trabalho.', icon: 'clock', image: '/images/heroes/relogio-ponto-facial.webp', alt: 'Colaborador registrando ponto em terminal biométrico; imagem ilustrativa', features: ['Registro de ponto', 'Identificação facial', 'Gestão de jornada'], detail: 'Relógios de ponto e soluções de tratamento de jornada para empresas. Modelos, integrações e requisitos devem ser avaliados conforme a operação e a legislação aplicável.' },
  { slug: 'automacao-de-entradas', title: 'Automação de Entradas', category: 'Automação', short: 'Tecnologia para controlar e organizar o fluxo de pessoas em empresas, condomínios e estabelecimentos.', icon: 'gate', image: '/images/solutions/catracas-entrada.webp', alt: 'Catracas eletrônicas em entrada corporativa; imagem ilustrativa', features: ['Catracas eletrônicas', 'Controle de passagem', 'Automação inteligente'], detail: 'Automação de entradas integrada às necessidades do espaço, com orientação sobre equipamentos e configuração adequada ao fluxo de pessoas.' },
  { slug: 'venda-de-equipamentos', title: 'Venda de Equipamentos', category: 'Equipamentos', short: 'Equipamentos e soluções tecnológicas para atender às necessidades de segurança e automação do seu negócio.', icon: 'box', image: '/images/equipamentos/linha-equipamentos.webp', alt: 'Linha ilustrativa de equipamentos para controle de acesso e ponto', features: ['Tecnologia moderna', 'Variedade de soluções', 'Orientação especializada'], detail: 'Orientação comercial para escolher equipamentos de controle de acesso e ponto. Consulte disponibilidade, modelos e especificações atualizadas.' },
  { slug: 'locacao-de-equipamentos', title: 'Locação de Equipamentos', category: 'Locação', short: 'Soluções flexíveis para empresas que buscam tecnologia e praticidade sem necessariamente adquirir os equipamentos.', icon: 'calendar', image: '/images/solutions/cameras-seguranca.webp', alt: 'Câmeras de segurança em ambiente comercial; imagem ilustrativa', features: ['Soluções flexíveis', 'Equipamentos tecnológicos', 'Atendimento personalizado'], detail: 'Opções de locação mediante análise de prazo, local de instalação e modelo do equipamento. O site original apresenta a locação com suporte técnico; condições sob consulta.' },
  { slug: 'instalacao-de-solucoes', title: 'Instalação de Soluções', category: 'Instalação e suporte', short: 'Instalação e configuração de equipamentos tecnológicos para controle de acesso e automação.', icon: 'tools', image: '/images/heroes/instalacao-controle-acesso.webp', alt: 'Técnico instalando terminal de controle de acesso; imagem ilustrativa', features: ['Instalação técnica', 'Configuração', 'Orientação especializada'], detail: 'Instalação e configuração de soluções de acesso e ponto após avaliação técnica do local e alinhamento do escopo. Opções de suporte técnico devem ser confirmadas com a equipe.' },
];

export const solutionShowcaseServices = [
  { slug: 'controle-de-acesso-facial', title: 'Controle de Acesso Facial', category: 'Controle de acesso', short: 'Mais segurança e praticidade no controle de entrada e saída de pessoas com tecnologia de reconhecimento facial.', icon: 'face', image: '/images/solutions/acesso-facial.webp', alt: 'Imagem ilustrativa gerada por IA de mulher utilizando terminal de reconhecimento facial em entrada corporativa', features: ['Identificação rápida', 'Controle de entradas', 'Segurança inteligente'] },
  { slug: 'relogios-de-ponto', title: 'Relógios de Ponto', category: 'Gestão de jornada', short: 'Soluções tecnológicas para registro de ponto, identificação de colaboradores e gestão da jornada de trabalho.', icon: 'clock', image: '/images/solutions/relogio-ponto.webp', alt: 'Imagem ilustrativa gerada por IA de funcionário registrando ponto por biometria', features: ['Registro de ponto', 'Gestão de jornada', 'Relatórios completos'] },
  { slug: 'automacao-de-entradas', title: 'Automação de Entradas', category: 'Automação', short: 'Tecnologia para controlar e organizar o fluxo de pessoas em empresas, condomínios e espaços corporativos.', icon: 'gate', image: '/images/solutions/catracas-entrada.webp', alt: 'Imagem ilustrativa gerada por IA de catracas automáticas em recepção corporativa', features: ['Catracas e torniquetes', 'Controle de passagem', 'Automação inteligente'] },
  { slug: 'venda-de-equipamentos', title: 'Venda de Equipamentos', category: 'Equipamentos', short: 'Equipamentos de segurança eletrônica das melhores marcas para atender às necessidades do seu projeto.', icon: 'camera', image: '/images/solutions/cameras-seguranca.webp', alt: 'Imagem ilustrativa gerada por IA de câmeras de segurança instaladas em edifício corporativo', features: ['Câmeras e gravadores', 'Controles de acesso', 'Equipamentos completos'] },
  { slug: 'locacao-de-equipamentos', title: 'Locação de Equipamentos', category: 'Locação', short: 'Soluções flexíveis para empresas que buscam tecnologia e praticidade sem investimento inicial em equipamentos.', icon: 'pin', image: '/images/equipamentos/linha-equipamentos.webp', alt: 'Equipamentos de segurança e controle de acesso em composição comercial ilustrativa', features: ['Soluções sob medida', 'Equipamentos atualizados', 'Atendimento especializado'] },
  { slug: 'instalacao-de-solucoes', title: 'Instalação de Soluções', category: 'Instalação e suporte', short: 'Instalação e configuração de equipamentos tecnológicos com equipe especializada e suporte contínuo.', icon: 'tools', image: '/images/heroes/instalacao-controle-acesso.webp', alt: 'Técnico instalando terminal de controle de acesso; imagem ilustrativa', features: ['Instalação técnica', 'Configuração completa', 'Suporte e manutenção'] },
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
  { title: 'Terminal de reconhecimento facial', kind: 'Controle de acesso', description: 'Terminal para identificação facial em ambientes corporativos e de circulação controlada.', features: ['Identificação facial', 'Integração com seu projeto', 'Modelos e especificações sob consulta'], applications: 'Empresas, condomínios, clínicas e academias', icon: '◉', image: '/images/solutions/acesso-facial.webp', alt: 'Terminal de reconhecimento facial em uma entrada corporativa; imagem ilustrativa' },
  { title: 'Relógio eletrônico de ponto', kind: 'Gestão de jornada', description: 'Equipamentos para registro de ponto e suporte às rotinas da jornada de trabalho.', features: ['Opções biométricas e cartão', 'Compatibilidade varia por modelo', 'Consulte o modelo ideal'], applications: 'Empresas, comércios, escolas e clínicas', icon: '◷', image: '/images/solutions/relogio-ponto.webp', alt: 'Relógio de ponto biométrico em ambiente de escritório; imagem ilustrativa' },
  { title: 'Catraca e controle de passagem', kind: 'Automação de entradas', description: 'Equipamentos para organizar passagens em entradas com fluxo definido.', features: ['Alta resistência e fluxo seguro', 'Possibilidade de integração', 'Configurações sob consulta'], applications: 'Academias, empresas, escolas e condomínios', icon: '↗', image: '/images/solutions/catracas-entrada.webp', alt: 'Catracas de aço inox em entrada corporativa; imagem ilustrativa' },
  { title: 'Acessórios e suprimentos para ponto', kind: 'Acessórios', description: 'Itens de reposição e consumo para equipamentos de controle de ponto.', features: ['Bobinas e cartões compatíveis', 'Compatibilidade por modelo', 'Consulte o item necessário'], applications: 'Empresas e operações com relógio de ponto', icon: '▤', image: '/images/equipamentos/suprimentos-ponto.webp', alt: 'Bobinas, cartões e acessórios para controle de ponto; imagem ilustrativa' },
];

export const featuredEquipment = [
  {
    title: 'Terminal de Reconhecimento Facial',
    kind: 'Controle de acesso',
    description: 'Tecnologia para identificação facial e controle de entrada e saída em empresas, condomínios e estabelecimentos.',
    image: '/images/solutions/acesso-facial.webp',
    alt: 'Visitante usando terminal de reconhecimento facial instalado em entrada corporativa',
    features: ['Reconhecimento facial', 'Controle de acesso', 'Tecnologia moderna', 'Mais segurança'],
    quote: 'Olá! Conheci a Correia Tecnologia pelo site e gostaria de solicitar um orçamento para um terminal de reconhecimento facial.',
  },
  {
    title: 'Relógio de Ponto Biométrico',
    kind: 'Gestão de jornada',
    description: 'Soluções para registro de ponto e organização da jornada de trabalho, com mais precisão e confiabilidade.',
    image: '/images/heroes/relogio-ponto-facial.webp',
    alt: 'Terminal biométrico de registro de ponto em ambiente de escritório',
    features: ['Registro de ponto', 'Leitura biométrica', 'Gestão de jornada', 'Relatórios completos'],
    quote: 'Olá! Conheci a Correia Tecnologia pelo site e gostaria de solicitar um orçamento para um relógio de ponto.',
  },
  {
    title: 'Catracas e Controle de Acesso',
    kind: 'Automação de entradas',
    description: 'Equipamentos para organizar e controlar a circulação de pessoas em ambientes corporativos e comerciais.',
    image: '/images/solutions/catracas-entrada.webp',
    alt: 'Catracas eletrônicas com leitores de acesso em uma entrada corporativa',
    features: ['Controle de passagem', 'Automação de entradas', 'Segurança e praticidade', 'Integração com sistemas'],
    quote: 'Olá! Conheci a Correia Tecnologia pelo site e gostaria de solicitar um orçamento para catracas e controle de acesso.',
  },
];

export const whatsappLink = (message: string) => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
