import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappLink, siteUrl, contact } from '../../../lib/site';
import { serviceSeoContent } from '../../../lib/service-seo';

const canonicalPath = '/solucoes/relogios-de-ponto';
const pageTitle = serviceSeoContent['relogios-de-ponto'].title;
const pageDescription = serviceSeoContent['relogios-de-ponto'].description;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: canonicalPath },
  openGraph: {
    type: 'website',
    url: canonicalPath,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: '/images/relogio-ponto-foto.webp', alt: 'Relógio eletrônico de ponto com leitor biométrico' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: ['/images/relogio-ponto-foto.webp'] },
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Relógio de Ponto Facial em Salvador',
    serviceType: 'Venda, locação, instalação e suporte para relógios de ponto facial',
    description: pageDescription,
    url: `${siteUrl}${canonicalPath}`,
    areaServed: [{ '@type': 'City', name: 'Salvador' }, { '@type': 'AdministrativeArea', name: 'Bahia' }],
    provider: { '@id': `${siteUrl}/#localbusiness` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Soluções', item: `${siteUrl}/servicos` },
      { '@type': 'ListItem', position: 3, name: 'Relógios de Ponto Facial', item: `${siteUrl}${canonicalPath}` },
    ],
  },
];

export default function RelogiosDePontoPage() {
  const quoteLink = whatsappLink('Olá! Gostaria de um orçamento para relógios de ponto facial em Salvador.');

  return <main id="conteudo">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <section className="subpage-hero" aria-labelledby="point-page-title">
      <Image className="subpage-hero-photo" src="/images/relogio-ponto-foto.webp" alt="Relógio eletrônico de ponto com leitor biométrico" fill priority sizes="(max-width: 760px) 100vw, 58vw" />
      <div className="subpage-hero-shade" />
      <div className="container subpage-hero-inner">
        <div className="subpage-hero-copy">
          <span className="subpage-eyebrow">Gestão de jornada<i /></span>
          <h1 id="point-page-title">Relógios de Ponto Facial <em>em Salvador</em></h1>
          <p>{pageDescription}</p>
          <div className="subpage-actions">
            <a className="reference-button reference-button-primary" href={quoteLink} target="_blank" rel="noreferrer">Solicitar orçamento <span aria-hidden="true">→</span></a>
            <Link className="reference-button reference-button-outline" href="/catalogo">Ver equipamentos <span aria-hidden="true">→</span></Link>
          </div>
          <div className="subpage-benefits"><span><i aria-hidden="true">✓</i>Venda e locação</span><span><i aria-hidden="true">✓</i>Instalação sob consulta</span><span><i aria-hidden="true">✓</i>Atendimento em Salvador</span></div>
        </div>
      </div>
    </section>

    <section className="section point-content-section">
      <div className="container point-content-wrap">
        <div className="point-content-intro">
          <span className="eyebrow">Controle de jornada</span>
          <h2>Registro de ponto pensado para a rotina da <em>sua empresa.</em></h2>
          <p>Relógios de ponto facial combinam registro de jornada com identificação por reconhecimento facial. O equipamento e a configuração adequados dependem da quantidade de pessoas, do fluxo e das necessidades de cada operação.</p>
        </div>

        <div className="point-content-grid">
          <article><h3>Como funciona o reconhecimento facial</h3><p>O terminal utiliza a identificação facial de acordo com os dados previamente cadastrados e os recursos do sistema compatível. Os procedimentos de cadastro e operação variam conforme o equipamento escolhido.</p></article>
          <article><h3>Aplicações em empresas</h3><p>Empresas podem usar relógios de ponto para organizar as marcações de colaboradores e apoiar as rotinas de acompanhamento da jornada. A capacidade, as integrações e os meios de identificação variam conforme o equipamento e devem ser confirmados antes da contratação.</p></article>
          <article><h3>Venda e locação</h3><p>A Correia Tecnologia atende consultas sobre compra e locação de equipamentos. A disponibilidade, os modelos, os prazos e as condições comerciais são avaliados com a equipe para cada necessidade.</p></article>
          <article><h3>Instalação e suporte</h3><p>A implantação pode incluir avaliação do local, instalação e configuração do equipamento. O escopo de suporte é confirmado com a equipe conforme o modelo, a infraestrutura e as condições acordadas.</p></article>
        </div>

        <div className="point-salvador-panel">
          <div><span className="eyebrow">Atendimento local</span><h2>Relógios de ponto facial em Salvador</h2><p>Fale com a Correia Tecnologia para explicar a rotina da sua empresa e consultar opções de venda, locação, instalação e suporte em Salvador, Bahia.</p><p className="point-address">{contact.address}</p></div>
          <div className="point-actions"><a className="button" href={quoteLink} target="_blank" rel="noreferrer">Solicitar orçamento <span aria-hidden="true">↗</span></a><a className="text-link" href={`tel:${contact.phoneHref}`}>Ligar: {contact.phone} <span aria-hidden="true">↗</span></a><Link className="text-link" href="/contato">Outras formas de contato <span aria-hidden="true">→</span></Link></div>
        </div>
        <section className="point-faq" aria-labelledby="point-faq-title">
          <h2 id="point-faq-title">Perguntas frequentes sobre relógio de ponto facial</h2>
          {serviceSeoContent['relogios-de-ponto'].questions.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
        </section>
      </div>
    </section>
  </main>;
}
