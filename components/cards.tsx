import Link from 'next/link';
import Image from 'next/image';
import { whatsappLink } from '../lib/site';

export function ServiceCard({ item }: { item: { slug: string; title: string; short: string; icon: string; image?: string; alt?: string } }) {
  return <Link href={`/servicos/${item.slug}`} className="service-card">{item.image ? <div className="service-card-photo"><Image src={item.image} alt={item.alt || item.title} fill sizes="(max-width: 760px) 100vw, 33vw" /></div> : <span className="card-icon" aria-hidden="true">{item.icon}</span>}<span className="card-arrow" aria-hidden="true">↗</span><h3>{item.title}</h3><p>{item.short}</p><span className="text-link">Saiba mais <span aria-hidden="true">→</span></span></Link>;
}

type SolutionCardItem = {
  slug: string;
  title: string;
  category: string;
  short: string;
  icon: string;
  image: string;
  alt: string;
  features: string[];
};

function SolutionIcon({ kind }: { kind: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (kind === 'face') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M11 4H7a3 3 0 0 0-3 3v4m17-7h4a3 3 0 0 1 3 3v4M4 21v4a3 3 0 0 0 3 3h4m17-7v4a3 3 0 0 1-3 3h-4"/><circle cx="16" cy="14" r="4.5"/><path d="M9.5 24c1.4-3.1 3.5-4.5 6.5-4.5s5.1 1.4 6.5 4.5"/></svg>;
  if (kind === 'clock') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><circle cx="16" cy="16" r="12"/><path d="M16 9v7l5 3"/></svg>;
  if (kind === 'gate') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M5 28V7a2 2 0 0 1 2-2h6v23M19 28V5h6a2 2 0 0 1 2 2v21M4 28h24M13 11h6v3h-6"/><path d="M16 14v8"/></svg>;
  if (kind === 'box') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="m16 3 12 6.5v13L16 29 4 22.5v-13L16 3Z"/><path d="m4.5 9.5 11.5 6 11.5-6M16 16v13M10 6l12 6.5"/></svg>;
  if (kind === 'calendar') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><rect x="4" y="6" width="24" height="22" rx="3"/><path d="M10 3v6m12-6v6M4 12h24m-17 6h4m4 0h4m-12 5h4"/></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="m19 5 4-2 6 6-2 4M4 28l8-2 15-15-6-6L6 20l-2 8Z"/><path d="m18 8 6 6M5 5l4 4M3 9l6-6m17 20 3 3"/></svg>;
}

export function SolutionCard({ item }: { item: SolutionCardItem }) {
  const containImage = ['face', 'box', 'calendar'].includes(item.icon);
  return <article className="solution-feature-card">
    <div className={`solution-card-image ${containImage ? 'solution-card-image-contain' : ''}`}>
      <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw" style={{ objectFit: containImage ? 'contain' : 'cover' }} />
    </div>
    <div className="solution-card-content">
      <div className="solution-card-category"><span className="solution-card-icon"><SolutionIcon kind={item.icon} /></span><span>{item.category}</span></div>
      <h3>{item.title}</h3>
      <p>{item.short}</p>
      <ul className="solution-feature-list" aria-label={`Diferenciais de ${item.title}`}>
        {item.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}
      </ul>
      <Link className="solution-card-button" href={`/servicos/${item.slug}`}>Conhecer solução <span aria-hidden="true">→</span></Link>
    </div>
  </article>;
}

export function ProductCard({ item }: { item: { title: string; kind: string; description: string; features: string[]; applications: string; icon: string; image?: string; alt?: string } }) {
  return <article className="product-card"><div className={`product-visual ${item.image ? 'product-photo' : 'product-image-pending'}`}><span className="product-pill">{item.kind}</span>{item.image ? <Image src={item.image} alt={item.alt || item.title} fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: 'cover' }} /> : <span className="product-image-note">Foto do item disponível sob consulta</span>}{item.image && <span className="product-caption">Imagem do equipamento ou da instalação</span>}</div><div className="product-info"><h3>{item.title}</h3><p>{item.description}</p><strong>Características</strong><ul>{item.features.map((f) => <li key={f}>{f}</li>)}</ul><strong>Aplicações</strong><p className="application">{item.applications}</p><a className="button button-outline" href={whatsappLink(`Olá! Gostaria de um orçamento para: ${item.title}.`)} target="_blank" rel="noreferrer">Pedir orçamento <span aria-hidden="true">↗</span></a></div></article>;
}
