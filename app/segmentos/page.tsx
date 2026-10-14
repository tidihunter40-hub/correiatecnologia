import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SubpageHero } from '../../components/subpage-hero';
import { segments } from '../../lib/site';

const photos = ['segmento-condominios','segmento-empresas','segmento-escolas','segmento-academias','segmento-comercios','segmento-clinicas'];
export const metadata: Metadata = { title: 'Controle de Acesso para Empresas e Condomínios em Salvador', description: 'Soluções de controle de acesso, automação e ponto para condomínios, empresas, escolas, academias, comércios e clínicas em Salvador e Bahia.', alternates: { canonical: '/segmentos' }, openGraph: { url: '/segmentos', title: 'Segmentos atendidos | Correia Tecnologia', description: 'Soluções de controle de acesso, automação e ponto para diferentes ambientes em Salvador e Bahia.', images: [{ url: '/images/reference/segmento-empresas.webp', alt: 'Imagem ilustrativa de ambiente empresarial' }] } };

export default function Segmentos() { return <main id="conteudo">
  <SubpageHero eyebrow="Segmentos atendidos" title={<>Soluções para <em>diferentes ambientes.</em></>} text="A tecnologia pode se adaptar às rotinas de condomínios, empresas, escolas, academias, comércios e clínicas." image="/images/acesso-catraca.png" imageAlt="Pessoa utilizando controle facial ao entrar por uma catraca corporativa" secondary={{ label: 'Falar com um especialista', href: '/contato' }} benefits={['Soluções personalizadas', 'Mais organização dos acessos', 'Atendimento em Salvador']} />
  <section className="section segment-page-section"><div className="container"><div className="section-head"><div><span className="eyebrow">Conheça os segmentos</span><h2>Uma solução pensada<br/><em>para a sua rotina.</em></h2></div><p>O escopo é definido em conversa com a equipe, considerando o ambiente, os fluxos e as necessidades informadas.</p></div><div className="segment-photo-grid">{segments.map((segment, index) => <Link href={`/segmentos/${segment.slug}`} className="segment-photo-card" key={segment.slug}><div className="segment-photo"><Image src={`/images/reference/${photos[index]}.webp`} alt={`Imagem ilustrativa de ${segment.title.toLowerCase()}`} fill sizes="(max-width: 760px) 100vw, 33vw"/><span className="image-caption">Imagem ilustrativa</span></div><div className="segment-photo-copy"><span className="segment-icon">{segment.icon}</span><h2>{segment.title}</h2><p>{segment.text}</p><span className="text-link">Saiba mais <span>→</span></span></div></Link>)}</div></div></section>
</main>; }
