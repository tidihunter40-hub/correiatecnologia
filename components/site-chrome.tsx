import Link from 'next/link';
import Image from 'next/image';
import { contact, mapsDirectionsUrl, solutionPath, whatsappLink } from '../lib/site';
import { MobileMenu } from './mobile-menu';
import { EmailText, MailIcon } from './mail-icon';

export function Header() {
  return <header className="site-header reference-header"><div className="reference-container reference-nav-wrap"><Link href="/" className="reference-brand" aria-label="Correia Tecnologia, início"><Image src="/images/correia-tecnologia-logo.png" alt="Correia Tecnologia" width={2151} height={731} priority sizes="(max-width: 360px) 116px, (max-width: 420px) 145px, (max-width: 760px) 165px, (max-width: 1050px) 155px, 215px" /></Link><nav aria-label="Navegação principal" className="reference-nav"><Link href="/" aria-current="page">Início</Link><Link href="/sobre">Sobre</Link><div className="reference-nav-dropdown"><Link href="/servicos" aria-haspopup="true">Soluções <span aria-hidden="true">⌄</span></Link><div className="reference-dropdown-menu"><Link href={solutionPath('controle-de-acesso-facial')}>Controle de acesso facial</Link><Link href={solutionPath('relogios-de-ponto')}>Relógios de ponto</Link><Link href={solutionPath('automacao-de-entradas')}>Automação de entradas</Link><Link href="/servicos">Todas as soluções</Link></div></div><Link href="/catalogo">Equipamentos</Link><Link href="/segmentos">Segmentos</Link><Link href="/projetos">Projetos</Link><Link href="/blog">Blog</Link><Link href="/contato">Contato</Link></nav><MobileMenu /><a className="reference-header-cta" href={whatsappLink('Olá! Gostaria de solicitar um orçamento para as soluções da Correia Tecnologia.')} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5A12.2 12.2 0 0 0 5.5 22l-1.4 5 5.2-1.3A12.3 12.3 0 1 0 16 3.5Z"/><path d="M12 10.5c-.5 0-1 .4-1.2.9-.4 1-.2 2.4.9 4.1 1.4 2.2 3.2 3.8 5.5 4.7 1.5.6 2.8.5 3.6-.2.4-.4.7-1.6.4-2l-2.6-1.3c-.3-.2-.6-.2-.8.1l-1.1 1.2c-1.4-.5-3.3-2.2-3.8-3.5l.8-.9c.2-.2.3-.5.1-.8l-1.2-2.1c-.1-.2-.3-.2-.6-.2Z"/></svg><span className="reference-header-cta-full">Solicitar Orçamento</span><span className="reference-header-cta-short" aria-hidden="true">Orçamento</span><b aria-hidden="true">→</b></a></div></header>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-company">
        <Link href="/" className="footer-logo" aria-label="Correia Tecnologia, início"><Image src="/images/correia-tecnologia-logo.png" alt="Correia Tecnologia" width={2151} height={731} sizes="(max-width: 760px) 260px, 300px" /></Link>
        <p className="footer-company-lead">Tecnologia inteligente para proteger o que importa.</p>
        <p className="footer-company-description">Soluções em controle de ponto, identificação e automação para empresas de todos os portes.</p>
        <div className="footer-location"><FooterIcon kind="pin" /><span>Atendimento em Salvador e região · Bahia</span></div>
      </div>
      <nav className="footer-explore" aria-label="Explore o site">
        <h2>Explore</h2>
        <Link href="/servicos">Soluções <span aria-hidden="true">›</span></Link>
        <Link href="/catalogo">Catálogo <span aria-hidden="true">›</span></Link>
        <Link href="/segmentos">Segmentos <span aria-hidden="true">›</span></Link>
        <Link href="/projetos">Projetos <span aria-hidden="true">›</span></Link>
      </nav>
      <div className="footer-contact">
        <h2>Contato</h2>
        <a href={`tel:${contact.phoneHref}`}><FooterIcon kind="phone" /><span>{contact.phone}</span></a>
        <a href={whatsappLink('Olá! Gostaria de conhecer as soluções da Correia Tecnologia.')} target="_blank" rel="noopener noreferrer"><FooterIcon kind="whatsapp" /><span>WhatsApp comercial <span aria-hidden="true">↗</span></span></a>
        <a className="footer-email-link" href={`mailto:${contact.email}`} aria-label={contact.email}><MailIcon /><EmailText address={contact.email} /></a>
        <div className="footer-address"><FooterIcon kind="pin" /><span>{contact.address}</span></div>
        <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer"><FooterIcon kind="map" /><span>Como chegar <span aria-hidden="true">↗</span></span></a>
      </div>
    </div>
    <div className="footer-bottom"><div className="container footer-bottom-inner"><span>© {new Date().getFullYear()} Correia Tecnologia. Todos os direitos reservados.</span><span>Feito para conectar segurança, pessoas e tecnologia.</span></div></div>
  </footer>;
}

function FooterIcon({ kind }: { kind: 'phone' | 'whatsapp' | 'pin' | 'map' }) {
  const paths = {
    phone: <path d="M6.7 2.5 4.1 4.2c-.8.5-1.1 1.5-.8 2.4 2.2 6.7 7.3 11.8 14 14 .9.3 1.9 0 2.4-.8l1.7-2.6c.5-.8.3-1.8-.4-2.4l-3.1-2.3c-.7-.5-1.6-.5-2.3 0l-1.6 1.2a16.1 16.1 0 0 1-4.7-4.7l1.2-1.6c.5-.7.5-1.6 0-2.3L9.1 2.9c-.6-.7-1.6-.9-2.4-.4Z" />,
    whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.5-5.1a8.5 8.5 0 1 1 16-3.9Z"/><path d="M8.8 8.2c-.4.4-.6 1.1-.3 1.9a9 9 0 0 0 5.3 5.3c.8.3 1.5.1 1.9-.3l.6-1-2.1-1.1-.8.8a7 7 0 0 1-3-3l.8-.8-1.1-2.1-1.3.6Z" transform="translate(0 4)"/></>,
    pin: <><path d="M12 21s7-5.9 7-12a7 7 0 1 0-14 0c0 6.1 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></>,
    map: <><path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5ZM9 3v16M15 5v16"/></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}
