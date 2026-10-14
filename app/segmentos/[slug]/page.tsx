import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SubpageHero } from '../../../components/subpage-hero';
import { segments, services, siteUrl, solutionPath, whatsappLink } from '../../../lib/site';

export function generateStaticParams() { return segments.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const segment = segments.find((item) => item.slug === slug);
  if (!segment) return {};
  const title = `Controle de acesso para ${segment.title.toLowerCase()} em Salvador`;
  const description = `${segment.text} Conheça soluções da Correia Tecnologia para ${segment.title.toLowerCase()} em Salvador e Bahia.`;
  return { title, description, alternates: { canonical: `/segmentos/${slug}` }, openGraph: { url: `/segmentos/${slug}`, title: `${title} | Correia Tecnologia`, description, images: [{ url: `/images/segments/${segment.slug}.webp`, alt: `Imagem ilustrativa de ${segment.title.toLowerCase()}` }] } };
}

export default async function SegmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = segments.find((s) => s.slug === slug);
  if (!item) notFound();
  const photo = `/images/segments/${item.slug}.webp`;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Segmentos', item: `${siteUrl}/segmentos` },
      { '@type': 'ListItem', position: 3, name: item.title, item: `${siteUrl}/segmentos/${item.slug}` },
    ],
  };
  return <main id="conteudo">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <SubpageHero eyebrow={`Segmentos / ${item.title}`} title={<>Soluções para <em>{item.title.toLowerCase()}.</em></>} text={item.text} image={photo} imageAlt={`Imagem ilustrativa de ambiente relacionado a ${item.title.toLowerCase()}`} secondary={{ label: 'Conheça outros segmentos', href: '/segmentos' }} benefits={['Soluções conforme o ambiente', 'Organização de acessos', 'Atendimento em Salvador']} illustrative />
    <section className="section"><div className="container"><div className="segment-detail-feature"><div className="segment-detail-photo"><Image src={photo} alt={`Imagem ilustrativa de ${item.title.toLowerCase()}`} fill quality={88} sizes="(max-width: 760px) 100vw, 40vw"/><span className="photo-label">Imagem ilustrativa</span></div><div className="segment-detail-copy"><span className="eyebrow">Tecnologia ajustada ao seu contexto</span><h2>Mais clareza para<br/><em>cada entrada.</em></h2><p>A escolha do equipamento depende da estrutura, do fluxo e das regras de acesso do local. A Correia Tecnologia pode orientar a avaliação inicial e as alternativas disponíveis.</p><p>{item.text}</p><a className="button" href={whatsappLink(`Olá! Tenho interesse em soluções para ${item.title.toLowerCase()}.`)} target="_blank" rel="noreferrer">Conversar pelo WhatsApp <span>↗</span></a></div></div><div className="segment-related"><h2 className="subheading">Soluções que podem fazer sentido</h2><div className="related-links">{services.slice(0, 3).map((s) => <Link key={s.slug} href={solutionPath(s.slug)}><span>{s.icon}</span>{s.title}<b>↗</b></Link>)}</div></div></div></section>
  </main>;
}
