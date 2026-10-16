'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { solutionPath } from '../lib/site';

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Soluções' },
  { href: '/catalogo', label: 'Equipamentos' },
  { href: '/segmentos', label: 'Segmentos' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

function clean(path: string) {
  return path.replace(/\/+$/, '') || '/';
}

function isActive(pathname: string, href: string) {
  const path = clean(pathname);
  if (href === '/') return path === '/';
  if (href === '/servicos') return path === href || path.startsWith('/servicos/') || path.startsWith('/solucoes/') || path.startsWith('/sistemas/') || path === solutionPath('controle-de-acesso-facial') || path === solutionPath('relogios-de-ponto');
  return path === href || path.startsWith(`${href}/`);
}

export function DesktopNav() {
  const pathname = usePathname();
  return <nav aria-label="Navegação principal" className="reference-nav">{links.map((link) => link.href === '/servicos'
    ? <div className="reference-nav-dropdown" key={link.href}><Link href={link.href} aria-current={isActive(pathname, link.href) ? 'page' : undefined} aria-haspopup="true">{link.label} <span aria-hidden="true">⌄</span></Link><div className="reference-dropdown-menu"><Link href={solutionPath('controle-de-acesso-facial')}>Controle de acesso facial</Link><Link href={solutionPath('relogios-de-ponto')}>Relógios de ponto</Link><Link href={solutionPath('automacao-de-entradas')}>Automação de entradas</Link><Link href="/servicos">Todas as soluções</Link></div></div>
    : <Link href={link.href} key={link.href} aria-current={isActive(pathname, link.href) ? 'page' : undefined}>{link.label}</Link>)}</nav>;
}
