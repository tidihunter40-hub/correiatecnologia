'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { whatsappLink } from '../lib/site';

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre a empresa' },
  { href: '/servicos', label: 'Soluções e serviços' },
  { href: '/catalogo', label: 'Equipamentos e catálogo' },
  { href: '/segmentos', label: 'Segmentos atendidos' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

function routeActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  if (href === '/servicos') return pathname === href || pathname.startsWith('/solucoes/') || pathname.startsWith('/servicos/') || pathname === '/controle-de-acesso-facial-salvador' || pathname === '/relogio-de-ponto-facial-salvador';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => closeRef.current?.focus(), 0);
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); return; }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  return <div className="mobile-menu-root">
    <button
      ref={triggerRef}
      className="mobile-menu-trigger"
      type="button"
      aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={open}
      aria-controls="mobile-site-menu"
      onClick={() => setOpen((value) => !value)}
    ><span /><span /><span /></button>
    {open && <section id="mobile-site-menu" className="mobile-menu-panel" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title" ref={panelRef}>
      <div className="mobile-menu-heading"><div><span>Correia Tecnologia</span><h2 id="mobile-menu-title">Explore o site</h2></div><button ref={closeRef} className="mobile-menu-close" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)}>×</button></div>
      <nav className="mobile-menu-links" aria-label="Navegação mobile">
        {links.map((link) => <Link key={link.href} href={link.href} aria-current={routeActive(pathname, link.href) ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">→</span></Link>)}
      </nav>
      <a className="mobile-menu-quote" href={whatsappLink('Olá! Gostaria de solicitar um orçamento para as soluções da Correia Tecnologia.')} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Solicitar orçamento <span aria-hidden="true">↗</span></a>
    </section>}
  </div>;
}
