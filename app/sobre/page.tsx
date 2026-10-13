import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SubpageHero } from '../../components/subpage-hero';
import { services } from '../../lib/site';

export const metadata: Metadata = { title: 'Sobre', description: 'Conheça a história da Correia Tecnologia e Automações e sua atuação em controle de acesso, reconhecimento facial, relógios de ponto e automação em Salvador.', alternates: { canonical: '/sobre' }, openGraph: { url: '/sobre', title: 'Sobre a Correia Tecnologia', description: 'Conheça a trajetória da Correia Tecnologia e suas soluções de acesso, ponto e automação em Salvador.' } };

const differences = [
  ['◉', 'Segurança integrada', 'Soluções de controle de acesso pensadas para cada ambiente.'],
  ['⌘', 'Orientação próxima', 'A escolha do equipamento parte da rotina e da necessidade do espaço.'],
  ['▥', 'Tecnologia aplicada', 'Acesso, jornada e automação em uma proposta alinhada ao projeto.'],
  ['◌', 'Apoio especializado', 'Atendimento para orientar a implantação e o uso das soluções.'],
];

export default function Sobre() {
  return <main id="conteudo">
    <SubpageHero eyebrow="Sobre a Correia Tecnologia" title={<>Nossa história é feita de <em>evolução e confiança.</em></>} text="Da Correia Relógios e Crachás à Correia Tecnologia e Automações, seguimos ampliando soluções em acesso, ponto e automação para diferentes ambientes." image="/images/reference/institucional-edificio.webp" imageAlt="Edifício corporativo ilustrativo da referência visual" secondary={{ label: 'Conheça nossas soluções', href: '/servicos' }} benefits={['Experiência em tecnologia', 'Soluções completas', 'Atendimento em Salvador']} />
    <section className="section about-story"><div className="container about-detail"><div className="about-detail-photo"><Image src="/images/acesso-catraca.png" alt="Pessoa utilizando um leitor facial junto a uma catraca corporativa" fill sizes="(max-width: 760px) 100vw, 50vw"/><span className="photo-label">Imagem do site oficial</span></div><div><span className="eyebrow">Nossa essência</span><h2>Tecnologia, pessoas<br/>e <em>resultados.</em></h2><p>A Correia Tecnologia e Automações reúne soluções de reconhecimento facial, controle de acesso, relógios de ponto e automação de entradas.</p><p>Venda, locação e instalação são avaliadas conforme o local, o fluxo de pessoas e as necessidades apresentadas. A equipe orienta a escolha e os próximos passos do atendimento.</p><ul className="check-list"><li>Soluções em controle de acesso e ponto</li><li>Atendimento consultivo e especializado</li><li>Escopo definido conforme o ambiente</li></ul><Link className="button" href="/contato">Fale com a nossa equipe <span>↗</span></Link></div></div></section>
    <section className="difference-band"><div className="container"><span className="subpage-eyebrow">O que orienta o nosso trabalho</span><h2>Nossos diferenciais</h2><p>Conheça a abordagem da Correia para cada necessidade.</p><div className="difference-grid">{differences.map(([icon, title, copy]) => <article className="difference-card" key={title}><span>{icon}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">Como podemos ajudar</span><h2>Soluções para diferentes<br/><em>necessidades.</em></h2></div><Link className="text-link" href="/servicos">Ver todas as soluções <span>→</span></Link></div><div className="related-links">{services.map((service) => <Link href={`/servicos/${service.slug}`} key={service.slug}><span>{service.icon}</span>{service.title}<b>↗</b></Link>)}</div></div></section>
  </main>;
}
