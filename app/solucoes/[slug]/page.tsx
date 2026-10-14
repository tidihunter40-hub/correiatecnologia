import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SubpageHero } from '../../../components/subpage-hero';
import { serviceSeoContent } from '../../../lib/service-seo';
import { segments, services, siteUrl, solutionPath, whatsappLink } from '../../../lib/site';

const serviceByPathSlug = (slug: string) => services.find((service) => solutionPath(service.slug) === `/solucoes/${slug}`);

export function generateStaticParams() {
  return Object.keys(serviceSeoContent)
    .filter((serviceSlug) => serviceSlug !== 'relogios-de-ponto')
    .map((serviceSlug) => ({ slug: solutionPath(serviceSlug).split('/').pop()! }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceByPathSlug(slug);
  if (!service) return {};
  const content = serviceSeoContent[service.slug];
  const canonical = `/solucoes/${slug}`;
  return {
    title: { absolute: content.title },
    description: content.description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      url: canonical,
      title: content.title,
      description: content.description,
      images: [{ url: service.image, alt: service.alt }],
    },
    twitter: { card: 'summary_large_image', title: content.title, description: content.description, images: [service.image] },
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceByPathSlug(slug);
  if (!service) notFound();
  const content = serviceSeoContent[service.slug];
  const canonical = `${siteUrl}/solucoes/${slug}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.title,
      description: content.description,
      url: canonical,
      areaServed: [{ '@type': 'City', name: 'Salvador' }, { '@type': 'AdministrativeArea', name: 'Bahia' }],
      provider: { '@id': `${siteUrl}/#localbusiness` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Soluções', item: `${siteUrl}/servicos` },
        { '@type': 'ListItem', position: 3, name: service.title, item: canonical },
      ],
    },
  ];
  const quote = whatsappLink(`Olá! Gostaria de solicitar um orçamento sobre ${service.title} em Salvador.`);

  return <main id="conteudo">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <SubpageHero
      eyebrow={`Soluções / ${service.title}`}
      title={<>{service.title} para o seu <em>ambiente.</em></>}
      text={content.description}
      image={service.image}
      imageAlt={service.alt}
      secondary={{ label: 'Ver todas as soluções', href: '/servicos' }}
      benefits={['Avaliação da necessidade', 'Opções sob consulta', 'Atendimento em Salvador']}
      illustrative={service.slug !== 'relogios-de-ponto'}
    />
    <section className="section service-detail-section">
      <div className="container">
        <div className="point-content-intro">
          <span className="eyebrow">{service.category}</span>
          <h2>{service.title} em <em>Salvador.</em></h2>
          <p>{content.what}</p>
        </div>
        <div className="point-content-grid">
          <article><h3>Como funciona</h3><p>{content.process}</p></article>
          <article><h3>Aplicações</h3><p>{content.applications}</p></article>
          <article><h3>Equipamentos relacionados</h3><p>{service.short} Modelos e compatibilidade são confirmados com a equipe.</p><Link className="text-link" href="/catalogo">Consultar categorias no catálogo <span aria-hidden="true">→</span></Link></article>
          <article><h3>Atendimento e orçamento</h3><p>Converse com a Correia Tecnologia sobre venda, locação, instalação ou suporte, conforme a solução e o escopo oferecidos para sua necessidade em Salvador.</p><a className="text-link" href={quote} target="_blank" rel="noreferrer">Solicitar orçamento pelo WhatsApp <span aria-hidden="true">↗</span></a></article>
        </div>
        <div className="point-salvador-panel">
          <div><span className="eyebrow">Benefícios a considerar</span><h2>Uma solução avaliada para o seu espaço</h2><ul className="check-list">{content.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></div>
          <div className="point-actions"><Link className="button" href="/contato">Falar com a equipe <span aria-hidden="true">→</span></Link><Link className="text-link" href="/segmentos">Ver segmentos atendidos <span aria-hidden="true">→</span></Link></div>
        </div>
        <section className="segment-related service-segments" aria-labelledby="service-segments-title">
          <h2 className="subheading" id="service-segments-title">Segmentos atendidos</h2>
          <div className="related-links">{content.segments.map((slug) => {
            const segment = segments.find((item) => item.slug === slug);
            return segment ? <Link href={`/segmentos/${segment.slug}`} key={segment.slug}><span>{segment.icon}</span>{segment.title}<b aria-hidden="true">↗</b></Link> : null;
          })}</div>
        </section>
        <section className="point-faq" aria-labelledby="solution-faq-title">
          <h2 id="solution-faq-title">Perguntas frequentes</h2>
          {content.questions.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
        </section>
      </div>
    </section>
  </main>;
}
