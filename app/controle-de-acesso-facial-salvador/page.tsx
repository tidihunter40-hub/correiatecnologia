import type { Metadata } from 'next';
import Link from 'next/link';
import { SubpageHero } from '../../components/subpage-hero';
import { contact, services, siteUrl, solutionPath, whatsappLink } from '../../lib/site';
import { serviceSeoContent } from '../../lib/service-seo';
import Image from 'next/image';
import { catalogProducts, productPath } from '../../lib/catalog';

const canonicalPath = '/controle-de-acesso-facial-salvador';
const service = services.find((item) => item.slug === 'controle-de-acesso-facial')!;
const content = serviceSeoContent['controle-de-acesso-facial'];
const pageTitle = 'Controle de Acesso Facial em Salvador BA | Correia Tecnologia';
const pageDescription = 'Conheça soluções de controle de acesso facial em Salvador para empresas e condomínios. Consulte equipamentos, instalação e suporte com a Correia Tecnologia.';

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: canonicalPath },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website', url: canonicalPath, title: pageTitle, description: pageDescription,
    images: [{ url: service.image, alt: 'Terminal de reconhecimento facial em entrada corporativa; imagem ilustrativa' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: [service.image] },
};

const structuredData = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'Controle de Acesso Facial em Salvador', serviceType: 'Controle de acesso facial',
    description: pageDescription, url: `${siteUrl}${canonicalPath}`,
    areaServed: [{ '@type': 'City', name: 'Salvador' }, { '@type': 'AdministrativeArea', name: 'Bahia' }],
    provider: { '@id': `${siteUrl}/#localbusiness` },
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Soluções', item: `${siteUrl}/servicos` },
      { '@type': 'ListItem', position: 3, name: 'Controle de Acesso Facial', item: `${siteUrl}${canonicalPath}` },
    ],
  },
];

export default function ControleDeAcessoFacialPage() {
  const quote = whatsappLink('Olá! Gostaria de solicitar um orçamento para controle de acesso facial em Salvador.');
  const facialAccess = catalogProducts.find((product) => product.id === 'evo-facial')!;
  return <main id="conteudo">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <SubpageHero
      eyebrow="Reconhecimento facial / Salvador"
      title={<>Controle de Acesso Facial <em>em Salvador, Bahia</em></>}
      text={pageDescription}
      image={service.image}
      imageAlt="Terminal de reconhecimento facial instalado junto a uma entrada corporativa; imagem ilustrativa"
      action="Solicitar orçamento para controle de acesso facial em Salvador"
      secondary={{ label: 'Ver equipamentos', href: '/catalogo' }}
      benefits={['Avaliação do ambiente', 'Opções sob consulta', 'Atendimento em Salvador']}
      illustrative
    />
    <section className="section service-detail-section"><div className="container">
      <div className="point-content-intro"><span className="eyebrow">Controle de acesso biométrico</span>
        <h2>Reconhecimento facial aplicado ao <em>controle de entradas.</em></h2>
        <p>{content.what} Diferentemente do registro de jornada, o objetivo aqui é permitir ou negar a passagem conforme as permissões de acesso. O projeto considera as entradas, a circulação de pessoas e a infraestrutura de cada local.</p>
      </div>
      <div className="point-content-grid">
        <article><h3>Como funciona a identificação facial</h3><p>O terminal compara a face apresentada com os cadastros e permissões configurados no sistema compatível. Os recursos, requisitos e procedimentos de cadastro dependem do modelo e do projeto.</p></article>
        <article><h3>Aplicações para empresas e condomínios</h3><p>Empresas podem controlar acessos de colaboradores e visitantes a entradas ou áreas definidas. Condomínios podem avaliar a identificação de moradores e prestadores conforme suas regras de entrada. Escolas, clínicas e academias também podem consultar soluções para seus próprios fluxos.</p></article>
        <article><h3>Benefícios para a operação</h3><p>A solução pode apoiar a organização das permissões e reduzir etapas manuais de identificação. O resultado esperado depende do dimensionamento, da configuração e das regras adotadas em cada local.</p></article>
        <article><h3>Instalação, suporte e dados</h3><p>A equipe pode avaliar o local, indicar equipamentos compatíveis e definir o escopo de instalação e suporte. Como dados biométricos são sensíveis, a empresa deve estabelecer finalidade, acesso e retenção adequados ao seu contexto e às obrigações aplicáveis.</p></article>
      </div>
      <section className="point-equipment" aria-labelledby="access-equipment-title"><div className="point-equipment-photo"><Image src={facialAccess.imagens[0].src} alt={facialAccess.imagens[0].alt} fill sizes="(max-width: 760px) 100vw, 300px" /></div><div><span className="eyebrow">Equipamento do catálogo</span><h2 id="access-equipment-title">Leitor de reconhecimento facial EVO</h2><p>Fotografia do produto disponibilizada pela fabricante. O EVO Facial 40 é voltado ao controle de acesso; recursos e integração dependem do projeto e da versão.</p><Link className="text-link" href={productPath(facialAccess)}>Ver produto e informações técnicas <span aria-hidden="true">→</span></Link></div></section>
      <div className="point-salvador-panel"><div><span className="eyebrow">Atendimento local</span><h2>Controle de acesso facial em Salvador</h2>
        <p>A Correia Tecnologia e Automações recebe consultas sobre equipamentos e projetos para Salvador e região. Para solicitar um orçamento, informe o tipo de entrada, o fluxo de pessoas, as regras de liberação e os equipamentos já instalados. A equipe confirma as opções e o escopo de instalação e suporte.</p><p className="point-address">{contact.address}</p>
      </div><div className="point-actions"><a className="button" href={quote} target="_blank" rel="noreferrer">Orçamento pelo WhatsApp <span aria-hidden="true">↗</span></a><Link className="text-link" href="/contato">Outras formas de contato <span aria-hidden="true">→</span></Link><a className="text-link" href={`tel:${contact.phoneHref}`}>Ligar: {contact.phone} <span aria-hidden="true">↗</span></a></div></div>
      <section className="segment-related service-segments" aria-labelledby="related-segments-title">
        <h2 className="subheading" id="related-segments-title">Soluções para diferentes ambientes</h2>
        <div className="related-links">{content.segments.map((slug) => <Link href={`/segmentos/${slug}`} key={slug}>{slug[0].toUpperCase() + slug.slice(1)} <b aria-hidden="true">↗</b></Link>)}</div>
      </section>
      <section className="segment-related service-segments" aria-labelledby="related-solutions-title">
        <h2 className="subheading" id="related-solutions-title">Conheça também</h2>
        <div className="related-links"><Link href={solutionPath('relogios-de-ponto')}>Relógio de ponto facial em Salvador <b aria-hidden="true">→</b></Link><Link href="/catalogo">Catálogo de equipamentos <b aria-hidden="true">→</b></Link></div>
      </section>
      <section className="point-faq" aria-labelledby="access-faq-title"><h2 id="access-faq-title">Perguntas frequentes sobre controle de acesso facial</h2>
        {content.questions.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
      </section>
    </div></section>
  </main>;
}
