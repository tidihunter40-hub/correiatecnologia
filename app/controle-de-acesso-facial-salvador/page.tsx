import type { Metadata } from 'next';
import Link from 'next/link';
import { SubpageHero } from '../../components/subpage-hero';
import { contact, services, siteUrl, solutionPath, whatsappLink } from '../../lib/site';
import { serviceSeoContent } from '../../lib/service-seo';

const canonicalPath = '/controle-de-acesso-facial-salvador';
const service = services.find((item) => item.slug === 'controle-de-acesso-facial')!;
const content = serviceSeoContent['controle-de-acesso-facial'];
const pageTitle = 'Controle de Acesso Facial em Salvador | Correia Tecnologia';
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
  return <main id="conteudo">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <SubpageHero
      eyebrow="Reconhecimento facial / Salvador"
      title={<>Controle de Acesso Facial <em>em Salvador</em></>}
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
        <p>{content.what} Um sistema de reconhecimento facial pode ser avaliado junto com as regras de circulação e a infraestrutura de cada local. Quando o projeto também envolve automação empresarial em Salvador, a integração deve considerar os equipamentos e os fluxos existentes.</p>
      </div>
      <div className="point-content-grid">
        <article><h3>Como funciona a identificação facial</h3><p>O terminal compara a face apresentada com os cadastros e permissões configurados no sistema compatível. Os recursos, requisitos e procedimentos de cadastro dependem do modelo e do projeto.</p></article>
        <article><h3>Aplicações para empresas e condomínios</h3><p>Empresas e condomínios podem consultar a tecnologia para organizar a entrada de colaboradores, moradores, visitantes e prestadores, de acordo com os perfis e fluxos definidos para o ambiente.</p></article>
        <article><h3>Benefícios para a operação</h3><p>A solução pode apoiar a organização das permissões e reduzir etapas manuais de identificação. O resultado esperado depende do dimensionamento, da configuração e das regras adotadas em cada local.</p></article>
        <article><h3>Instalação, suporte e dados</h3><p>A equipe pode avaliar o local, indicar equipamentos compatíveis e definir o escopo de instalação e suporte. Como dados biométricos são sensíveis, a empresa deve estabelecer finalidade, acesso e retenção adequados ao seu contexto e às obrigações aplicáveis.</p></article>
      </div>
      <div className="point-salvador-panel"><div><span className="eyebrow">Atendimento local</span><h2>Controle de acesso facial em Salvador</h2>
        <p>A Correia Tecnologia e Automações recebe consultas sobre equipamentos e projetos para Salvador e região. Compartilhe o tipo de ambiente e o fluxo de pessoas para conversar sobre alternativas.</p><p className="point-address">{contact.address}</p>
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
