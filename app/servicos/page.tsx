import type { Metadata } from 'next';
import Link from 'next/link';
import { SubpageHero } from '../../components/subpage-hero';
import { SolutionCard } from '../../components/cards';
import { services } from '../../lib/site';

export const metadata: Metadata = { title: 'Soluções de Acesso, Ponto e Automação em Salvador', description: 'Conheça as soluções da Correia Tecnologia em controle de acesso facial, relógios de ponto, automação, venda, locação e instalação em Salvador.', alternates: { canonical: '/servicos' }, openGraph: { url: '/servicos', title: 'Soluções em segurança e automação | Correia Tecnologia', description: 'Controle de acesso, relógios de ponto, automação, venda, locação e instalação em Salvador.', images: [{ url: '/images/reference/hero-acesso.webp', alt: 'Terminal de reconhecimento facial em entrada corporativa' }] } };

export default function Servicos() { return <main id="conteudo">
  <SubpageHero eyebrow="Nossas soluções" title={<>Soluções completas em segurança e <em>automação.</em></>} text="Tecnologia para controlar acessos, organizar rotinas de jornada e automatizar entradas em empresas, condomínios e estabelecimentos." image="/images/acesso-escritorio.png" imageAlt="Pessoa utilizando controle facial junto a uma catraca em ambiente corporativo" secondary={{ label: 'Falar com um especialista', href: '/contato' }} benefits={['Segurança para o ambiente', 'Gestão de acessos', 'Automação sob consulta']} />
  <section className="solutions-showcase" aria-labelledby="solutions-title">
    <div className="container">
      <div className="solutions-showcase-head">
        <div className="solutions-showcase-title">
          <span className="eyebrow">Nossas soluções</span>
          <h2 id="solutions-title">Tecnologia e segurança<br/><em>para cada necessidade.</em></h2>
        </div>
        <div className="solutions-showcase-intro">
          <p>Oferecemos soluções completas em reconhecimento facial, relógios de ponto, controle de acesso e automação para empresas e estabelecimentos.</p>
          <Link className="button" href="#servicos-lista">Conhecer todas as soluções <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="solutions-feature-grid" id="servicos-lista">
        {services.map((service) => <SolutionCard key={service.slug} item={service} />)}
      </div>
      <p className="solutions-image-note">Imagens ilustrativas. Equipamentos, modelos e disponibilidade são confirmados sob consulta.</p>
    </div>
  </section>
  <section className="section"><div className="container"><div className="bottom-cta"><h2>Quer conversar sobre uma solução?</h2><p>Envie sua necessidade e consulte os próximos passos com a equipe Correia.</p><Link className="button" href="/contato">Fale com um especialista <span>↗</span></Link></div></div></section>
</main>; }
