import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { VideoShowcase } from '../components/video-showcase';
import { featuredEquipment, segments, services, solutionPath, whatsappLink } from '../lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Correia Tecnologia e Automações | Ponto e Acesso Facial em Salvador' },
  description: 'Conheça a Correia Tecnologia e Automações. Soluções em relógio de ponto facial, controle de acesso e reconhecimento facial para empresas em Salvador e região.',
  alternates: { canonical: '/' },
  openGraph: { url: '/', title: 'Correia Tecnologia e Automações | Ponto e Acesso Facial em Salvador', description: 'Conheça a Correia Tecnologia e Automações. Soluções em relógio de ponto facial, controle de acesso e reconhecimento facial para empresas em Salvador e região.', images: [{ url: '/images/heroes/controle-acesso-facial.webp', width: 1672, height: 941, alt: 'Visitante usando terminal de reconhecimento facial em uma entrada corporativa' }] },
  twitter: { card: 'summary_large_image', title: 'Correia Tecnologia e Automações | Ponto e Acesso Facial em Salvador', description: 'Conheça a Correia Tecnologia e Automações. Soluções em relógio de ponto facial, controle de acesso e reconhecimento facial para empresas em Salvador e região.', images: ['/images/heroes/controle-acesso-facial.webp'] },
};

const homeServices = [
  { slug: services[0].slug, title: 'Controle de Acesso Facial', description: 'Leitura facial rápida e segura para empresas, condomínios e escolas.', image: '/images/solutions/acesso-facial.webp' },
  { slug: services[1].slug, title: 'Relógios de Ponto', description: 'Gestão completa de jornada de trabalho com reconhecimento facial.', image: '/images/heroes/relogio-ponto-facial.webp' },
  { slug: services[2].slug, title: 'Automação de Entradas', description: 'Catracas, portões e automação integrada para o seu ambiente.', image: '/images/solutions/catracas-entrada.webp' },
  { slug: services[3].slug, title: 'Venda de Equipamentos', description: 'Equipamentos das principais marcas com garantia e suporte.', image: '/images/equipamentos/linha-equipamentos.webp' },
  { slug: services[4].slug, title: 'Locação de Equipamentos', description: 'Soluções sob medida para o seu negócio, com instalação inclusa.', image: '/images/solutions/cameras-seguranca.webp' },
  { slug: services[5].slug, title: 'Instalação e Suporte Técnico', description: 'Equipe especializada para instalação, manutenção e suporte.', image: '/images/heroes/instalacao-controle-acesso.webp' },
];

function FeatureIcon({ kind }: { kind: string }) {
  if (kind === 'shield') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 27 7v8c0 7-4.6 11.8-11 14C9.6 26.8 5 22 5 15V7l11-4Z"/><path d="m11 16 3.2 3.2L21 12"/></svg>;
  if (kind === 'gear') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M13 3h6l1 3.2 2.4 1 3-1.2 3 5.2-2.5 2.3v2.8l2.5 2.3-3 5.2-3-1.2-2.4 1L19 27h-6l-1-3.4-2.4-1-3 1.2-3-5.2 2.5-2.3v-2.8L3.6 11l3-5.2 3 1.2 2.4-1L13 3Z"/><circle cx="16" cy="15.8" r="4"/></svg>;
  if (kind === 'bars') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 27h25M7 23V15h4v8m5 0V9h4v14m5 0V4h4v19"/></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 18v-4a11 11 0 0 1 22 0v4M5 17H3v7h6v-8H5Zm22 0h2v7h-6v-8h4Zm-5 8c-1 2-3 3-6 3h-2"/></svg>;
}

function MetricIcon({ kind }: { kind: string }) {
  if (kind === 'people') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="12" cy="10" r="5"/><circle cx="23" cy="12" r="4"/><path d="M3 28v-3c0-5 4-8 9-8s9 3 9 8v3H3Zm17-10c5-1 9 2 9 7v3h-6"/></svg>;
  if (kind === 'building') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 6h14v23H3zM19 12h10v17H19z"/><path fill="#061a32" d="M6 9h3v3H6zm6 0h3v3h-3zM6 15h3v3H6zm6 0h3v3h-3zM6 21h3v3H6zm6 0h3v3h-3zM22 16h3v3h-3zm0 6h3v3h-3z"/></svg>;
  if (kind === 'star') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 3 4 8 9 1-6.5 6.3L24 28l-8-4.6L8 28l1.5-9.7L3 12l9-1 4-8Z"/></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m13 3 6 0 1 3.2 2.4 1 3-1.2 3 5.2-2.5 2.3v2.8l2.5 2.3-3 5.2-3-1.2-2.4 1L19 27h-6l-1-3.4-2.4-1-3 1.2-3-5.2 2.5-2.3v-2.8L3.6 11l3-5.2 3 1.2 2.4-1L13 3Z"/><circle cx="16" cy="15.8" r="4"/></svg>;
}

function EquipmentFeatureIcon({ index }: { index: number }) {
  if (index === 0) return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5 17 5v5c0 4.4-2.9 7.3-7 8.8C5.9 17.3 3 14.4 3 10V5l7-2.5Z"/><path d="m7 10 2 2 4-4"/></svg>;
  if (index === 1) return <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.2"/><path d="M10 5.5v4.8l3 1.8"/></svg>;
  if (index === 2) return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 2 4 0 .7 2.2 1.5.7 2-.8 2 3.5-1.7 1.5v1.7l1.7 1.5-2 3.5-2-.8-1.5.7L12 18H8l-.7-2.2-1.5-.7-2 .8-2-3.5 1.7-1.5V9.2L3.8 7.7l2-.8 1.5-.7L8 2Z"/><circle cx="10" cy="10" r="2.4"/></svg>;
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 17h14M5 14v-4h3v4m2 0V7h3v7m2 0V3h3v11"/></svg>;
}

export default function Home() {
  return <main id="conteudo" className="reference-home">
    <section className="reference-hero" aria-labelledby="home-title">
      <Image className="reference-hero-photo" src="/images/heroes/controle-acesso-facial.webp" alt="Fotografia ilustrativa de visitante usando terminal de reconhecimento facial em uma entrada corporativa moderna" fill priority quality={88} sizes="(max-width: 760px) 100vw, 48vw" />
      <div className="reference-hero-shade" />
      <div className="reference-container reference-hero-inner">
        <div className="reference-hero-copy">
          <div className="reference-eyebrow"><span>CONTROLE DE ACESSO E AUTOMAÇÃO</span><i /></div>
          <h1 id="home-title">Tecnologia inteligente<br />para <em>proteger o que importa.</em></h1>
          <p>Soluções em reconhecimento facial, controle de acesso,<br className="desktop-break" /> relógios de ponto e automação para empresas, condomínios<br className="desktop-break" /> e estabelecimentos comerciais.</p>
          <div className="reference-actions">
            <a className="reference-button reference-button-primary" href={whatsappLink('Olá! Gostaria de solicitar um orçamento para as soluções da Correia Tecnologia.')} target="_blank" rel="noreferrer"><svg className="reference-whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5A12.2 12.2 0 0 0 5.5 22l-1.4 5 5.2-1.3A12.3 12.3 0 1 0 16 3.5Z"/><path d="M12 10.5c-.5 0-1 .4-1.2.9-.4 1-.2 2.4.9 4.1 1.4 2.2 3.2 3.8 5.5 4.7 1.5.6 2.8.5 3.6-.2.4-.4.7-1.6.4-2l-2.6-1.3c-.3-.2-.6-.2-.8.1l-1.1 1.2c-1.4-.5-3.3-2.2-3.8-3.5l.8-.9c.2-.2.3-.5.1-.8l-1.2-2.1c-.1-.2-.3-.2-.6-.2Z"/></svg>Solicitar Orçamento<span className="button-arrow" aria-hidden="true">→</span></a>
            <Link className="reference-button reference-button-outline" href="#solucoes">Conhecer Nossas Soluções<span className="button-arrow" aria-hidden="true">→</span></Link>
          </div>
          <div className="reference-benefits">
            <div><FeatureIcon kind="shield"/><span>Mais segurança<br/>para o seu ambiente</span></div>
            <div><FeatureIcon kind="gear"/><span>Automação<br/>e praticidade</span></div>
            <div><FeatureIcon kind="bars"/><span>Gestão eficiente<br/>de pessoas e acessos</span></div>
            <div><FeatureIcon kind="support"/><span>Suporte técnico<br/>especializado</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="reference-lower" aria-label="Sobre a Correia e segmentos atendidos">
      <div className="reference-about">
        <div className="reference-building"><Image src="/images/solutions/edificio-comercial.webp" alt="Edifício comercial contemporâneo, imagem ilustrativa" fill quality={88} sizes="(max-width: 760px) 100vw, 19vw" /></div>
        <div className="reference-about-copy">
          <div className="reference-eyebrow reference-eyebrow-light">SOBRE A CORREIA <em>TECNOLOGIA</em></div>
          <h2>Mais que equipamentos,<br/>soluções completas em<br/>segurança e automação.</h2>
          <p>A Correia Tecnologia e Automações é especializada em soluções de controle de acesso, reconhecimento facial, relógios de ponto e automação. Atuamos com venda, locação, instalação e suporte técnico, sempre com foco em inovação, qualidade e atendimento personalizado.</p>
          <Link className="reference-button reference-about-button" href="/sobre">Conheça nossa história <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="reference-right-column">
        <div className="reference-indicators" aria-label="Soluções oferecidas">
          <div><span className="indicator-symbol"><MetricIcon kind="people"/></span><span><strong>Acesso</strong><small>Controle inteligente</small></span></div>
          <div><span className="indicator-symbol"><MetricIcon kind="building"/></span><span><strong>Ponto</strong><small>Gestão de jornada</small></span></div>
          <div><span className="indicator-symbol"><MetricIcon kind="star"/></span><span><strong>Automação</strong><small>Entradas integradas</small></span></div>
          <div><span className="indicator-symbol"><MetricIcon kind="gear"/></span><span><strong>Suporte</strong><small>Orientação técnica</small></span></div>
        </div>
        <div className="reference-segments">
          <div className="reference-segments-head"><div><h2>Segmentos que atendemos</h2><p>Soluções personalizadas para diferentes necessidades.</p></div><Link href="/segmentos">Ver todos os segmentos <span aria-hidden="true">→</span></Link></div>
          <div className="reference-segment-grid">
            {segments.map((segment) => <Link key={segment.slug} href={`/segmentos/${segment.slug}`} className="reference-segment-card">
              <div><Image src={`/images/segments/${segment.slug}.webp`} alt={`Imagem ilustrativa de ${segment.title.toLowerCase()}`} fill quality={88} sizes="(max-width: 760px) 30vw, 15vw" /></div>
              <h3>{segment.title}</h3>
            </Link>)}
          </div>
        </div>
      </div>
    </section>

    <VideoShowcase
      id="dixi-facial"
      eyebrow="DIXI FACIAL · DEMONSTRAÇÃO"
      title="Controle de Ponto com Reconhecimento Facial"
      description="Conheça uma solução moderna para registrar a jornada de trabalho com praticidade, agilidade e tecnologia de reconhecimento facial."
      src="/videos/dixi-facial.mp4"
      poster="/videos/dixi-facial-poster.png"
      previewEnd={20}
      duration="prévia de 20 s · vídeo completo 1 min 18 s"
      highlights={['Registro de jornada com reconhecimento facial', 'Experiência prática para a rotina da equipe', 'Venda, locação e instalação sob consulta']}
      primaryLabel="Conhecer relógios de ponto"
      primaryHref={solutionPath('relogios-de-ponto')}
      quoteMessage="Olá! Gostaria de solicitar um orçamento para relógio de ponto DIXI Facial."
    />

    <section className="reference-services" id="solucoes" aria-label="Soluções da Correia Tecnologia">
      <div className="reference-container reference-service-grid">
        {homeServices.map((item) => <Link key={item.slug} href={solutionPath(item.slug)} className={`reference-service-card ${item.slug === services[5].slug ? 'reference-install-card' : ''}`}>
          <div className="reference-service-photo"><Image src={item.image} alt="" fill quality={88} sizes="(max-width: 760px) 35vw, 22vw" /></div>
          <div className="reference-service-copy"><h2>{item.title}</h2><p>{item.description}</p><span className="reference-card-link">Saiba mais <b aria-hidden="true">→</b></span></div>
        </Link>)}
      </div>
    </section>

    <section className="equipment-showcase" id="equipamentos" aria-labelledby="equipment-title">
      <div className="container equipment-showcase-inner">
        <div className="equipment-showcase-head">
          <div className="equipment-showcase-copy">
            <span className="eyebrow equipment-eyebrow">Equipamentos em destaque <i aria-hidden="true" /></span>
            <h2 id="equipment-title">Tecnologia que transforma<br/><em>a segurança do seu negócio.</em></h2>
            <p>Conheça nossas soluções em controle de acesso, reconhecimento facial, relógios de ponto e automação.</p>
          </div>
          <Link className="reference-button reference-button-primary equipment-catalog-button" href="/catalogo">Explorar catálogo <span className="button-arrow" aria-hidden="true">→</span></Link>
        </div>
        <div className="featured-equipment-grid">
          {featuredEquipment.map((item) => <article className="featured-equipment-card" key={item.title}>
            <div className="featured-equipment-image"><Image src={item.image} alt={item.alt} fill quality={88} sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div>
            <div className="featured-equipment-content">
              <span className="featured-equipment-category">{item.kind}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="equipment-feature-list">{item.features.map((feature, index) => <li key={feature}><EquipmentFeatureIcon index={index}/>{feature}</li>)}</ul>
              <a className="featured-equipment-quote" href={whatsappLink(item.quote)} target="_blank" rel="noreferrer">Solicitar orçamento <span aria-hidden="true">→</span></a>
            </div>
          </article>)}
        </div>
      </div>
    </section>
    <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">Vamos conversar?</span><h2>O próximo passo para<br/>um acesso mais <em>inteligente.</em></h2></div><Link className="button button-white" href="/contato">Fale com nossa equipe <span>↗</span></Link></div></section>
  </main>;
}
