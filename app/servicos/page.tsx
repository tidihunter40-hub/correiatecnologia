import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SubpageHero } from '../../components/subpage-hero';
import { ServiceCard } from '../../components/cards';
import { services } from '../../lib/site';

export const metadata: Metadata = { title: 'Soluções de acesso, ponto e automação em Salvador', description: 'Conheça as soluções da Correia Tecnologia em controle de acesso facial, relógios de ponto, automação, venda, locação e instalação em Salvador.', alternates: { canonical: '/servicos' }, openGraph: { url: '/servicos', title: 'Soluções em segurança e automação | Correia Tecnologia', description: 'Controle de acesso, relógios de ponto, automação, venda, locação e instalação em Salvador.' } };

export default function Servicos() { return <main id="conteudo">
  <SubpageHero eyebrow="Nossas soluções" title={<>Soluções completas em segurança e <em>automação.</em></>} text="Tecnologia para controlar acessos, organizar rotinas de jornada e automatizar entradas em empresas, condomínios e estabelecimentos." image="/images/acesso-escritorio.png" imageAlt="Pessoa utilizando controle facial junto a uma catraca em ambiente corporativo" secondary={{ label: 'Falar com um especialista', href: '/contato' }} benefits={['Segurança para o ambiente', 'Gestão de acessos', 'Automação sob consulta']} />
  <section className="section solutions-section"><div className="container"><div className="section-head"><div><span className="eyebrow">Conheça nossas soluções</span><h2>O que sua operação<br/><em>precisa resolver?</em></h2></div><p>Conte à equipe sobre o ambiente e o fluxo de pessoas para receber orientação sobre as opções.</p></div><div className="service-grid service-grid-page">{services.map((service) => <ServiceCard key={service.slug} item={service}/>)}</div></div></section>
  <section className="solutions-feature"><div className="solutions-feature-photo"><Image src="/images/relogio-ponto-foto.webp" alt="Relógio eletrônico de ponto com leitor biométrico" fill sizes="(max-width: 760px) 100vw, 50vw"/><span className="photo-label">Equipamento apresentado no site original</span></div><div className="solutions-feature-copy"><span className="eyebrow">Soluções que se adaptam ao seu ambiente</span><h2>Uma escolha alinhada<br/>à sua <em>operação.</em></h2><p>Os modelos, recursos e condições variam conforme a necessidade. Fale com a equipe para avaliar a aplicação e as especificações disponíveis.</p><Link className="button" href="/contato">Solicitar orientação <span>↗</span></Link></div></section>
  <section className="section"><div className="container"><div className="bottom-cta"><h2>Quer conversar sobre uma solução?</h2><p>Envie sua necessidade e consulte os próximos passos com a equipe Correia.</p><Link className="button" href="/contato">Fale com um especialista <span>↗</span></Link></div></div></section>
</main>; }
