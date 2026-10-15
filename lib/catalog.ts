import { siteUrl, whatsappLink } from './site';

export const catalogCategories = [
  { id: 'eletronicos', name: 'Pontos Eletrônicos', description: 'Registro digital de jornada com integração a sistemas de gestão.', benefits: ['Registro rápido e seguro', 'Integração com software', 'Ideal para empresas de todos os portes'] },
  { id: 'cartograficos', name: 'Pontos Cartográficos', description: 'Marcação impressa em cartões de ponto, com operação simples.', benefits: ['Impressão confiável e legível', 'Fácil operação e manutenção', 'Ideal para ambientes industriais'] },
  { id: 'biometricos', name: 'Pontos Biométricos', description: 'Identificação por impressão digital em modelos compatíveis.', benefits: ['Alta precisão na identificação', 'Ajuda a evitar marcações indevidas', 'Integração com sistemas de RH'] },
  { id: 'facial', name: 'Reconhecimento Facial', description: 'Identificação sem contato para ponto e controle de acesso.', benefits: ['Tecnologia rápida e precisa', 'Sem contato físico', 'Mais segurança e praticidade'] },
] as const;

export type CategoryId = (typeof catalogCategories)[number]['id'];
export type CatalogImage = { src: string; alt: string; source: string };
export type CatalogImages = [CatalogImage, ...CatalogImage[]];
export type CatalogHighlightIcon = 'print' | 'clock' | 'offline' | 'fingerprint' | 'card' | 'network' | 'face' | 'shield' | 'touch' | 'users' | 'document' | 'gear';
export type CatalogHighlight = { label: string; icon: CatalogHighlightIcon };
export type CatalogProduct = {
  id: string;
  slug: string;
  nome: string;
  marca: string;
  modelo: string;
  categoriaPrincipal: CategoryId;
  categorias: CategoryId[];
  descricaoCurta: string;
  descricaoCompleta: string;
  beneficios: string[];
  chamadasVisuais: [CatalogHighlight, CatalogHighlight, CatalogHighlight];
  funcionalidades: string[];
  especificacoes: { label: string; value: string }[];
  identificacao: string[];
  conectividade: string[];
  integracoes: string[];
  aplicacoes: string[];
  imagens: CatalogImages;
  videos: { src: string; poster: string; note: string }[];
  fonteTecnica: string[];
  observacoes: string[];
  destaque: boolean;
  seoTitle: string;
  seoDescription: string;
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: 'rwtech-blue', slug: 'relogio-ponto-rwtech-blue', nome: 'Relógio de Ponto Eletrônico RWTECH Blue', marca: 'RWTECH', modelo: 'Blue', categoriaPrincipal: 'eletronicos', categorias: ['eletronicos', 'biometricos'],
    descricaoCurta: 'Registro eletrônico de jornada em um equipamento compacto, com identificação e integração ao EzPoint conforme a versão.',
    descricaoCompleta: 'O Blue reúne registro de ponto e operação intuitiva em um formato compacto. A linha oferece opções de identificação e comunicação para apoiar a rotina do RH; a configuração exata deve ser definida conforme a versão comercializada.',
    beneficios: ['Registro de jornada com operação simples', 'Formato compacto para diferentes ambientes', 'Comunicação com a plataforma EzPoint'],
    chamadasVisuais: [{ label: 'Registro eletrônico', icon: 'clock' }, { label: 'Formato compacto', icon: 'touch' }, { label: 'Integração EzPoint', icon: 'network' }],
    funcionalidades: ['Registro eletrônico de ponto', 'Interface para administração local', 'Administração remota por Web Server', 'Operação offline e sincronização posterior, conforme configuração'],
    especificacoes: [{ label: 'Tela', value: 'Touchscreen de 2,8 polegadas na versão Blue documentada pela RWTECH' }, { label: 'Bobina', value: 'Até 360 m na versão com impressora' }, { label: 'Comprovante', value: 'Impresso ou digital, conforme versão contratada' }],
    identificacao: ['Impressão digital, cartão ou senha, conforme versão', 'QR/PIN informado na página atual da RWTECH; confirmar configuração disponível'], conectividade: ['Ethernet/TCP-IP na versão documentada', 'USB para transferência de dados conforme versão'], integracoes: ['EzPoint Web por protocolo Blue'], aplicacoes: ['Empresas que precisam registrar jornada', 'Unidades com espaço reduzido'],
    imagens: [{ src: '/images/products/rwtech-blue.webp', alt: 'Relógio de ponto Blue da RWTECH em perspectiva', source: 'https://www.rwtech.com.br/ajuda/relogio-de-ponto-blue/' }], videos: [],
    fonteTecnica: ['https://www.rwtech.com.br/ajuda/relogio-de-ponto-blue/', 'https://www.rwtech.com.br/blog/conheca-o-novo-relogio-de-ponto-blue-da-rwtech/'], observacoes: ['Confirmar a variante Blue comercializada antes de atribuir biometria, cartão, impressora ou certificação específica.'], destaque: true,
    seoTitle: 'Relógio de Ponto RWTECH Blue em Salvador BA', seoDescription: 'Conheça o relógio de ponto RWTECH Blue: recursos, versões e integração ao EzPoint. Solicite orçamento à Correia Tecnologia em Salvador, Bahia.'
  },
  {
    id: 'dixi-printnox', slug: 'relogio-ponto-dixi-printnox', nome: 'Relógio de Ponto Cartográfico DIXI PRINTNOX', marca: 'DIXI', modelo: 'PRINTNOX', categoriaPrincipal: 'cartograficos', categorias: ['cartograficos'],
    descricaoCurta: 'Marcação de jornada em cartão de cartolina com impressão automática e operação prática.', descricaoCompleta: 'O PRINTNOX é uma alternativa cartográfica para empresas que preferem um registro físico da jornada. Seu mecanismo posiciona o cartão e imprime a marcação, com configuração simples para a rotina da equipe.',
    beneficios: ['Registro físico de fácil conferência', 'Operação independente de conexão com a internet', 'Ideal para equipes menores'], funcionalidades: ['Impressão em cartão de ponto', 'Puxador e posicionamento automático do cartão', 'Display para leitura das marcações', 'Estrutura em ABS'],
    chamadasVisuais: [{ label: 'Impressão automática', icon: 'print' }, { label: 'Registro seguro', icon: 'clock' }, { label: 'Funciona sem internet', icon: 'offline' }],
    especificacoes: [{ label: 'Tipo', value: 'Relógio cartográfico com cartão de cartolina' }, { label: 'Alimentação', value: 'Fonte externa 100–240 V AC, 50/60 Hz, segundo a DIXI' }, { label: 'Acompanhamento', value: 'A página oficial informa 50 cartões e fita instalada; confirmar o pacote ofertado' }],
    identificacao: ['Cartão de ponto em papel'], conectividade: ['Funcionamento local; internet não necessária'], integracoes: ['Não há integração digital de ponto documentada para este modelo'], aplicacoes: ['Pequenas empresas', 'Operações que preferem cartões impressos'],
    imagens: [{ src: '/images/products/dixi-printnox.webp', alt: 'Relógio cartográfico DIXI PRINTNOX visto de frente', source: 'https://www.dixiponto.com.br/relogio-printnox/' }, { src: '/images/products/dixi-printnox-detail.webp', alt: 'Relógio DIXI PRINTNOX em perspectiva', source: 'https://www.dixiponto.com.br/relogio-printnox/' }], videos: [], fonteTecnica: ['https://www.dixiponto.com.br/relogio-printnox/'],
    observacoes: ['Equipamento cartográfico. Não possui biometria digital ou reconhecimento facial e não é apresentado como REP-C.', 'Marcação em duas cores e sirene programável dependem de confirmação da variante ofertada.'], destaque: false,
    seoTitle: 'Relógio Cartográfico DIXI PRINTNOX em Salvador', seoDescription: 'Conheça o relógio cartográfico DIXI PRINTNOX para registro em cartões impressos. Consulte a Correia Tecnologia em Salvador, Bahia.'
  },
  {
    id: 'control-id-idclass', slug: 'relogio-ponto-control-id-idclass', nome: 'Relógio de Ponto Biométrico Control iD iDClass', marca: 'Control iD', modelo: 'iDClass Bio', categoriaPrincipal: 'biometricos', categorias: ['biometricos', 'eletronicos'],
    descricaoCurta: 'Registro eletrônico com impressão digital, comprovante térmico e conectividade para a gestão de jornada.', descricaoCompleta: 'O iDClass Bio combina identificação por impressão digital e senha com impressão de comprovantes. A interface touchscreen e os recursos de rede apoiam a administração do ponto em empresas de diferentes portes.',
    beneficios: ['Identificação biométrica para as marcações', 'Comprovante impresso para o colaborador', 'Administração pela rede'], funcionalidades: ['Leitor biométrico óptico', 'Impressora térmica com guilhotina', 'Tela touchscreen colorida', 'Web server embarcado'],
    chamadasVisuais: [{ label: 'Leitura biométrica', icon: 'fingerprint' }, { label: 'Comprovante impresso', icon: 'print' }, { label: 'Gestão em rede', icon: 'network' }],
    especificacoes: [{ label: 'Tela', value: 'LCD touchscreen colorido de 2,4 polegadas (320 × 240)' }, { label: 'Capacidade', value: 'Até 15.000 usuários e 15.000 digitais na versão Bio' }, { label: 'Bobina', value: 'Até 400 m' }, { label: 'Impressão', value: '100 mm/s, com corte automático' }],
    identificacao: ['Impressão digital', 'Senha numérica'], conectividade: ['Ethernet 10/100 Mbps', 'Duas portas USB', 'Wi-Fi e GPRS opcionais'], integracoes: ['API e iDCloud opcionais, conforme contratação'], aplicacoes: ['Empresas com registro biométrico de jornada', 'Ambientes que exigem comprovante impresso'],
    imagens: [{ src: '/images/products/control-id-idclass-angle.webp', alt: 'Control iD iDClass Bio em perspectiva', source: 'https://www.controlid.com.br/relogio-de-ponto/idclass-bio/' }, { src: '/images/products/control-id-idclass-front.webp', alt: 'Control iD iDClass Bio visto de frente', source: 'https://www.controlid.com.br/relogio-de-ponto/idclass-bio/' }], videos: [], fonteTecnica: ['https://www.controlid.com.br/relogio-de-ponto/idclass-bio/'],
    observacoes: ['Dados verificados para iDClass Bio. Confirmar se essa é a variante comercializada; opções Bio Prox e outras podem diferir.'], destaque: true,
    seoTitle: 'Relógio de Ponto Control iD iDClass Bio em Salvador', seoDescription: 'Veja recursos do relógio biométrico Control iD iDClass Bio e solicite orçamento em Salvador, Bahia, à Correia Tecnologia.'
  },
  {
    id: 'henry-prisma', slug: 'relogio-ponto-henry-super-facil', nome: 'Relógio de Ponto Biométrico Henry Prisma SF Advanced', marca: 'Henry', modelo: 'Prisma SF Advanced — biometria digital e proximidade', categoriaPrincipal: 'biometricos', categorias: ['biometricos', 'eletronicos'],
    descricaoCurta: 'Registro eletrônico de jornada com biometria digital, cartão de proximidade e impressão de comprovantes.', descricaoCompleta: 'O Prisma SF Advanced é um relógio de ponto da Henry. As fotografias oficiais exibem a versão azul com leitor de impressão digital e cartão de proximidade. A linha possui configurações diferentes; a versão exata da unidade ofertada deve ser confirmada na proposta.',
    beneficios: ['Identificação biométrica e por proximidade', 'Comprovante físico de marcação', 'Configurações para diferentes rotinas de ponto'], funcionalidades: ['Registro eletrônico de jornada', 'Leitor de impressão digital na versão ilustrada', 'Leitor de cartão de proximidade na versão ilustrada', 'Impressão de comprovantes'],
    chamadasVisuais: [{ label: 'Biometria digital', icon: 'fingerprint' }, { label: 'Cartão de proximidade', icon: 'card' }, { label: 'Comprovante impresso', icon: 'print' }],
    especificacoes: [{ label: 'Linha', value: 'Prisma SF Advanced' }, { label: 'Versão ilustrada', value: 'Azul, com biometria digital e cartão de proximidade' }, { label: 'Comprovante', value: 'Impressão de comprovante de marcação' }],
    identificacao: ['Impressão digital e cartão de proximidade na versão ilustrada', 'Outras opções dependem da configuração da linha'], conectividade: ['Interfaces de comunicação conforme a versão contratada'], integracoes: ['Software de tratamento de ponto compatível sob consulta'], aplicacoes: ['Empresas que precisam registrar jornada com biometria', 'Operações que exigem comprovante impresso'],
    imagens: [{ src: '/images/products/henry-prisma-sf-advanced-angle.png', alt: 'Henry Prisma SF Advanced azul com biometria digital e cartão, em perspectiva', source: 'https://henry.com.br/produtos/prisma-sf-advanced/' }, { src: '/images/products/henry-prisma-sf-advanced-front.png', alt: 'Henry Prisma SF Advanced azul com biometria digital e cartão, vista frontal', source: 'https://henry.com.br/produtos/prisma-sf-advanced/' }], videos: [], fonteTecnica: ['https://henry.com.br/produtos/prisma-sf-advanced/', 'https://henry.com.br/wp-content/uploads/2024/08/PROSPECTO-DOC-2024-PDF.pdf'],
    observacoes: ['Fotos oficiais da versão azul com biometria digital e proximidade. Confirmar cor e recursos da unidade comercializada antes da proposta.'], destaque: false,
    seoTitle: 'Henry Prisma SF Advanced: Relógio de Ponto em Salvador', seoDescription: 'Conheça o Henry Prisma SF Advanced com biometria digital, cartão de proximidade e comprovante impresso. Consulte a Correia Tecnologia em Salvador.'
  },
  {
    id: 'topdata-inner', slug: 'relogio-ponto-topdata-inner-rep-plus', nome: 'Relógio de Ponto Topdata Inner REP Plus', marca: 'Topdata', modelo: 'Inner REP Plus V3 (ficha de referência)', categoriaPrincipal: 'eletronicos', categorias: ['eletronicos', 'biometricos'],
    descricaoCurta: 'Registrador eletrônico com comprovante impresso, tela touchscreen e integração com sistemas de ponto.', descricaoCompleta: 'O Inner REP Plus oferece registro eletrônico de jornada com impressão de comprovantes e comunicação em rede. A ficha V3 documenta alternativas de leitores e capacidades; a revisão do equipamento ofertado precisa ser conferida.',
    beneficios: ['Comprovante impresso em cada marcação', 'Administração e exportação de registros', 'Opções de leitores para diferentes operações'], funcionalidades: ['Impressora térmica com guilhotina', 'Tela colorida sensível ao toque', 'Servidor web embarcado', 'Porta fiscal USB'],
    chamadasVisuais: [{ label: 'Comprovante impresso', icon: 'print' }, { label: 'Tela touchscreen', icon: 'touch' }, { label: 'Comunicação em rede', icon: 'network' }],
    especificacoes: [{ label: 'Tela V3', value: 'Touchscreen de 4,3 polegadas' }, { label: 'Capacidade V3', value: 'Até 10.000 colaboradores e 10 milhões de registros' }, { label: 'Bobina V3', value: 'Até 360 m' }, { label: 'Impressão V3', value: 'Até 200 mm/s' }],
    identificacao: ['Impressão digital, proximidade, código de barras ou senha conforme versão'], conectividade: ['TCP/IP', 'USB fiscal e USB auxiliar'], integracoes: ['Servidor web embarcado', 'Software de tratamento compatível sob consulta'], aplicacoes: ['Empresas que exigem comprovante impresso', 'Operações com grande volume de marcações'],
    imagens: [{ src: '/images/products/topdata-inner-rep-plus.webp', alt: 'Relógio de ponto Topdata Inner REP Plus em perspectiva', source: 'https://www.topdata.com.br/relogio-de-ponto-eletronico/' }], videos: [], fonteTecnica: ['https://www.topdata.com.br/relogio-de-ponto-eletronico/', 'https://suporte.topdata.com.br/wp-content/uploads/Especificacoes-tecnicas-Inner-REP-Plus.pdf'],
    observacoes: ['Números e capacidades acima pertencem à ficha Inner REP Plus V3 e não devem ser aplicados a outras revisões. Confirmar o modelo disponível.'], destaque: false,
    seoTitle: 'Relógio Topdata Inner REP Plus em Salvador BA', seoDescription: 'Conheça o relógio de ponto Topdata Inner REP Plus e as especificações da versão V3. Solicite orientação e orçamento em Salvador.'
  },
  {
    id: 'dixi-facial', slug: 'coletor-ponto-facial-dixi', nome: 'Coletor de Ponto Facial DIXI', marca: 'DIXI', modelo: 'Coletor de Ponto Facial', categoriaPrincipal: 'facial', categorias: ['facial'],
    descricaoCurta: 'Identificação facial sem contato para coleta de marcações integrada a uma solução REP-P.', descricaoCompleta: 'O coletor facial DIXI registra marcações por reconhecimento facial e as encaminha ao sistema de ponto integrado. A câmera binocular e os métodos alternativos ajudam a adaptar a operação a diferentes ambientes.',
    beneficios: ['Marcação sem contato', 'Recursos para reduzir tentativas de fraude', 'Integração ao tratamento de jornada'], funcionalidades: ['Reconhecimento facial', 'Câmera binocular', 'Proteção contra leitura de fotos e vídeos', 'Interface touchscreen'],
    chamadasVisuais: [{ label: 'Reconhecimento facial', icon: 'face' }, { label: 'Marcação sem contato', icon: 'shield' }, { label: 'Integração REP-P', icon: 'network' }],
    especificacoes: [{ label: 'Categoria', value: 'Coletor integrado a solução REP-P; não é apresentado como REP-C' }, { label: 'Métodos alternativos', value: 'Cartão RFID e senha conforme configuração' }, { label: 'Capacidade', value: 'Confirmar variante: páginas oficiais da DIXI exibem capacidades diferentes' }],
    identificacao: ['Reconhecimento facial', 'RFID/cartão ou senha conforme configuração'], conectividade: ['TCP/IP', 'Wi-Fi conforme configuração'], integracoes: ['Sistema REP-P e tratamento de ponto compatível'], aplicacoes: ['Empresas que procuram marcação facial sem contato', 'Operações com fluxo de colaboradores'],
    imagens: [{ src: '/images/products/dixi-facial-angle.webp', alt: 'Coletores de ponto faciais DIXI em diferentes vistas', source: 'https://www.dixiponto.com.br/coletor-de-ponto-facial/' }, { src: '/images/products/dixi-facial.webp', alt: 'Coletor facial DIXI visto de frente', source: 'https://www.dixiponto.com.br/coletor-de-ponto-facial/' }],
    videos: [{ src: '/videos/dixi-facial.mp4', poster: '/videos/dixi-facial-poster.png', note: 'Vídeo DIXI Facial já utilizado na página inicial.' }], fonteTecnica: ['https://www.dixiponto.com.br/coletor-de-ponto-facial/', 'https://www.dixiponto.com.br/coletor-de-ponto-facial.php'],
    observacoes: ['O coletor depende de solução REP-P integrada. Capacidade e reconhecimento com máscara variam entre versões; confirmar a unidade ofertada.'], destaque: true,
    seoTitle: 'Coletor de Ponto Facial DIXI em Salvador BA', seoDescription: 'Veja o coletor facial DIXI para registro de jornada integrado a REP-P. Conheça a demonstração e solicite orçamento em Salvador.'
  },
  {
    id: 'evo-facial', slug: 'reconhecimento-facial-evo', nome: 'Leitor de Reconhecimento Facial EVO', marca: 'EVO Sistemas Inteligentes', modelo: 'EVO Facial 40 (referência)', categoriaPrincipal: 'facial', categorias: ['facial'],
    descricaoCurta: 'Leitor facial para controle de acesso com detecção de rosto vivo e proteção contra tentativas com imagens.', descricaoCompleta: 'O EVO Facial 40 é um controlador de acesso com reconhecimento facial e combinação de métodos de autenticação. Seu projeto oferece proteção contra fotos e vídeos e gabinete adequado a aplicações que exigem resistência.',
    beneficios: ['Identificação facial sem contato', 'Proteção contra tentativas com foto ou vídeo', 'Integração a projetos de controle de acesso'], funcionalidades: ['Detecção de rosto vivo', 'Proteção antifraude', 'Detecção de máscara configurável', 'Combinação de métodos de autenticação'],
    chamadasVisuais: [{ label: 'Reconhecimento facial', icon: 'face' }, { label: 'Proteção contra fotos', icon: 'shield' }, { label: 'Controle de acesso', icon: 'card' }],
    especificacoes: [{ label: 'Proteção', value: 'IP65 e IK06 para o EVO Facial 40' }, { label: 'Uso documentado', value: 'Controle de acesso' }, { label: 'Identificação', value: 'Reconhecimento facial; RFID e senha conforme versão da linha' }],
    identificacao: ['Reconhecimento facial', 'RFID e senha documentados para a linha Facial 40'], conectividade: ['Conexão de rede e interfaces de acesso: validar projeto de instalação'], integracoes: ['Controle de acesso', 'Uso como ponto depende de solução específica de registro de jornada'], aplicacoes: ['Portarias e entradas corporativas', 'Ambientes com controle de acesso facial'],
    imagens: [{ src: '/images/products/evo-facial-40.webp', alt: 'Leitor de reconhecimento facial EVO Facial 40 visto de frente', source: 'https://evosistemasinteligentes.com.br/produtos/controle-de-acesso-leitor-evo-facial-40/' }],
    videos: [{ src: '/videos/evo-facial.mp4', poster: '/videos/evo-facial-poster.png', note: 'Demonstração EVO Facial existente no projeto; confirmar se a unidade filmada é o Facial 40.' }], fonteTecnica: ['https://evosistemasinteligentes.com.br/produtos/controle-de-acesso-leitor-evo-facial-40/'],
    observacoes: ['O EVO Facial 40 da ficha consultada é controlador de acesso. Não é anunciado como REP-C.', 'Confirmar se o equipamento do vídeo e a variante comercializada são exatamente EVO Facial 40.'], destaque: true,
    seoTitle: 'Leitor Facial EVO Facial 40 em Salvador BA', seoDescription: 'Conheça o leitor de reconhecimento facial EVO Facial 40 para controle de acesso. Consulte aplicações e orçamento em Salvador, Bahia.'
  },
];

export const productPath = (product: CatalogProduct) => `/catalogo/${product.slug}`;
export const productCategoryName = (id: CategoryId) => catalogCategories.find((category) => category.id === id)!.name;
export const productQuote = (product: CatalogProduct) => whatsappLink(`Olá! Estou visitando o site da Correia Tecnologia e gostaria de solicitar um orçamento do ${product.nome}. Poderiam me passar mais informações? ${siteUrl}${productPath(product)}`);
