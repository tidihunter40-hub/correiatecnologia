import Link from 'next/link';
import Image from 'next/image';
import { whatsappLink } from '../lib/site';

export function ServiceCard({ item }: { item: { slug: string; title: string; short: string; icon: string; image?: string; alt?: string } }) {
  return <Link href={`/servicos/${item.slug}`} className="service-card">{item.image ? <div className="service-card-photo"><Image src={item.image} alt={item.alt || item.title} fill sizes="(max-width: 760px) 100vw, 33vw" /></div> : <span className="card-icon" aria-hidden="true">{item.icon}</span>}<span className="card-arrow" aria-hidden="true">↗</span><h3>{item.title}</h3><p>{item.short}</p><span className="text-link">Saiba mais <span aria-hidden="true">→</span></span></Link>;
}

export function ProductCard({ item }: { item: { title: string; kind: string; description: string; features: string[]; applications: string; icon: string; image?: string; alt?: string } }) {
  return <article className="product-card"><div className={`product-visual ${item.image ? 'product-photo' : 'product-image-pending'}`}><span className="product-pill">{item.kind}</span>{item.image ? <Image src={item.image} alt={item.alt || item.title} fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: 'cover' }} /> : <span className="product-image-note">Foto do item disponível sob consulta</span>}{item.image && <span className="product-caption">Imagem do equipamento ou da instalação</span>}</div><div className="product-info"><h3>{item.title}</h3><p>{item.description}</p><strong>Características</strong><ul>{item.features.map((f) => <li key={f}>{f}</li>)}</ul><strong>Aplicações</strong><p className="application">{item.applications}</p><a className="button button-outline" href={whatsappLink(`Olá! Gostaria de um orçamento para: ${item.title}.`)} target="_blank" rel="noreferrer">Pedir orçamento <span aria-hidden="true">↗</span></a></div></article>;
}
