'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePWA } from './pwa-provider';
import { whatsappLink } from '../lib/site';

type MainItem = { id: 'home' | 'solutions' | 'equipment' | 'segments' | 'more'; label: string; href?: string };
const items: MainItem[] = [
  { id: 'home', label: 'Início', href: '/' },
  { id: 'solutions', label: 'Soluções', href: '/servicos' },
  { id: 'equipment', label: 'Equipamentos', href: '/catalogo' },
  { id: 'segments', label: 'Segmentos', href: '/segmentos' },
  { id: 'more', label: 'Mais' },
];

const moreLinks = [
  { label: 'Sobre a Empresa', href: '/sobre', icon: 'building' },
  { label: 'Projetos', href: '/projetos', icon: 'projects' },
  { label: 'Blog', href: '/blog', icon: 'blog' },
  { label: 'Contato', href: '/contato', icon: 'contact' },
  { label: 'Privacidade', href: '/privacidade', icon: 'privacy' },
];

function NavIcon({ name }: { name: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (name === 'home') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/></svg>;
  if (name === 'solutions') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="m12 3 8 3v5.5c0 5-3.2 8.3-8 9.8-4.8-1.5-8-4.8-8-9.8V6Z"/><path d="m8.5 12 2.3 2.3 4.8-5"/></svg>;
  if (name === 'equipment') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 7h6M9 16h6M8 11v2m8-2v2"/><circle cx="12" cy="11.5" r="1.5"/></svg>;
  if (name === 'segments') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-4h4v4"/></svg>;
  if (name === 'more') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="4" y="4" width="6" height="6" rx="1.3"/><rect x="14" y="4" width="6" height="6" rx="1.3"/><rect x="4" y="14" width="6" height="6" rx="1.3"/><rect x="14" y="14" width="6" height="6" rx="1.3"/></svg>;
  if (name === 'building') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M3 21h18M5 21V5h9v16M14 10h5v11M8 9h3M8 13h3M8 17h3M16 14h1M16 17h1"/></svg>;
  if (name === 'projects') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5m8-5v5M7 14h4m2 0h4"/></svg>;
  if (name === 'blog') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M5 4h14v16H5zM8 8h8m-8 4h8m-8 4h5"/></svg>;
  if (name === 'contact') return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M12 3 20 6v5.5c0 5-3.2 8.3-8 9.8-4.8-1.5-8-4.8-8-9.8V6Z"/><path d="M9 10h6m-6 3h6m-6 3h4"/></svg>;
}

function isRouteActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  if (href === '/servicos') return pathname === href || pathname.startsWith('/servicos/') || pathname.startsWith('/solucoes/');
  return pathname === href || pathname.startsWith(`${href}/`);
}

function InstallPWAButton() {
  const { canInstall, isInstalled, isIOS, isSafari, promptInstall } = usePWA();
  const [showInstructions, setShowInstructions] = useState(false);
  if (isInstalled) return <p className="install-status" role="status">Correia já está instalada neste dispositivo.</p>;
  if (canInstall) return <button className="install-pwa-button" type="button" onClick={() => void promptInstall()}><span className="install-pwa-icon" aria-hidden="true">↓</span><span><strong>Instalar aplicativo</strong><small>Adicionar Correia à tela inicial</small></span><span className="install-pwa-arrow" aria-hidden="true">→</span></button>;
  if (!isIOS && !isSafari) return null;
  const title = isIOS ? 'Como instalar no iPhone ou iPad' : 'Como instalar no Mac';
  const instructions = isIOS
    ? isSafari ? 'No Safari, toque em Compartilhar e escolha “Adicionar à Tela de Início”.' : 'Abra este site no Safari, toque em Compartilhar e escolha “Adicionar à Tela de Início”.'
    : 'No Safari para Mac, abra o menu Arquivo e escolha “Adicionar ao Dock”.';
  return <div className="ios-install-block"><button className="install-pwa-button" type="button" aria-expanded={showInstructions} onClick={() => setShowInstructions((open) => !open)}><span className="install-pwa-icon" aria-hidden="true">＋</span><span><strong>{title}</strong><small>{isIOS ? 'Instruções para adicionar à tela inicial' : 'Instruções para adicionar ao Dock'}</small></span><span className="install-pwa-arrow" aria-hidden="true">{showInstructions ? '−' : '→'}</span></button>{showInstructions && <p className="ios-install-help">{instructions}</p>}</div>;
}

function MoreMenuSheet({ open, onClose, pathname, triggerRef }: { open: boolean; onClose: () => void; pathname: string; triggerRef: React.RefObject<HTMLButtonElement | null> }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const previous = { position: document.body.style.position, top: document.body.style.top, width: document.body.style.width };
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 0);
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); return; }
      if (event.key !== 'Tab' || !sheetRef.current) return;
      const focusable = Array.from(sheetRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.position = previous.position;
      document.body.style.top = previous.top;
      document.body.style.width = previous.width;
      window.scrollTo(0, scrollY);
      triggerRef.current?.focus();
    };
  }, [open, onClose, triggerRef]);

  if (!open) return null;
  return <div className="more-sheet-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section id="more-menu-sheet" className="more-sheet" role="dialog" aria-modal="true" aria-labelledby="more-sheet-title" ref={sheetRef}>
      <div className="more-sheet-handle" aria-hidden="true" />
      <div className="more-sheet-heading"><div><span className="eyebrow">Correia Tecnologia</span><h2 id="more-sheet-title">Explorar Correia Tecnologia</h2></div><button className="more-sheet-close" ref={closeRef} type="button" aria-label="Fechar menu" onClick={onClose}>×</button></div>
      <nav className="more-sheet-links" aria-label="Mais páginas">
        {moreLinks.map((link) => { const active = pathname === link.href; return <Link key={link.href} href={link.href} className="more-sheet-link" aria-current={active ? 'page' : undefined} data-route-active={active || undefined} onClick={onClose}><span className="more-sheet-link-icon"><NavIcon name={link.icon}/></span><span>{link.label}</span><span className="more-sheet-link-arrow" aria-hidden="true">→</span></Link>; })}
        <a className="more-sheet-link more-sheet-quote" href={whatsappLink('Olá! Gostaria de solicitar um orçamento para as soluções da Correia Tecnologia.')} target="_blank" rel="noreferrer" onClick={onClose}><span className="more-sheet-link-icon"><NavIcon name="contact"/></span><span>Solicitar Orçamento</span><span className="more-sheet-link-arrow" aria-hidden="true">↗</span></a>
      </nav>
      <InstallPWAButton />
    </section>
  </div>;
}

export function BottomNavigation() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const morePathActive = ['/sobre', '/projetos', '/blog', '/contato', '/privacidade'].some((route) => pathname === route || pathname.startsWith(`${route}/`));
  const closeMore = useCallback(() => setMoreOpen(false), []);

  useEffect(() => { setMoreOpen(false); }, [pathname]);

  return <>
    <nav className="bottom-navigation" aria-label="Navegação inferior">
      {items.map((item) => {
        const active = item.id === 'more' ? morePathActive : isRouteActive(pathname, item.href!);
        if (item.id === 'more') return <button key={item.id} className="bottom-navigation-item" data-active={active || moreOpen || undefined} type="button" aria-label="Mais páginas" aria-expanded={moreOpen} aria-controls={moreOpen ? 'more-menu-sheet' : undefined} onClick={() => setMoreOpen((open) => !open)} ref={triggerRef}><span className="bottom-navigation-icon"><NavIcon name={item.id}/></span><span className="bottom-navigation-label">{item.label}</span></button>;
        return <Link key={item.id} className="bottom-navigation-item" data-active={active || undefined} href={item.href!} aria-current={active ? 'page' : undefined}><span className="bottom-navigation-icon"><NavIcon name={item.id}/></span><span className="bottom-navigation-label">{item.label}</span></Link>;
      })}
    </nav>
    <MoreMenuSheet open={moreOpen} onClose={closeMore} pathname={pathname} triggerRef={triggerRef}/>
  </>;
}
