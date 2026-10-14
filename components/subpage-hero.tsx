import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { whatsappLink } from '../lib/site';

type SubpageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  text: string;
  image: string;
  imageAlt: string;
  action?: string;
  secondary?: { label: string; href: string };
  benefits?: string[];
  illustrative?: boolean;
};

export function SubpageHero({ eyebrow, title, text, image, imageAlt, action = 'Solicitar orçamento', secondary, benefits = [], illustrative = false }: SubpageHeroProps) {
  return <section className="subpage-hero">
    <Image className="subpage-hero-photo" src={image} alt={imageAlt} fill priority quality={88} sizes="(max-width: 760px) 100vw, 58vw" />
    <div className="subpage-hero-shade" />
    <div className="container subpage-hero-inner">
      <div className="subpage-hero-copy">
        <span className="subpage-eyebrow">{eyebrow}<i /></span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="subpage-actions">
          <a className="reference-button reference-button-primary" href={whatsappLink(`Olá! Gostaria de ${action.toLowerCase()} para as soluções da Correia Tecnologia.`)} target="_blank" rel="noreferrer">{action}<span aria-hidden="true">→</span></a>
          {secondary && <Link className="reference-button reference-button-outline" href={secondary.href}>{secondary.label}<span aria-hidden="true">→</span></Link>}
        </div>
        {!!benefits.length && <div className="subpage-benefits">{benefits.map((benefit) => <span key={benefit}><i aria-hidden="true">✓</i>{benefit}</span>)}</div>}
        {illustrative && <small className="subpage-disclaimer">Imagem ilustrativa; não representa uma instalação realizada pela Correia Tecnologia.</small>}
      </div>
    </div>
  </section>;
}
