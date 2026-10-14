import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SubpageHero } from '../../components/subpage-hero';
import { segments } from '../../lib/site';

const segmentCards: Record<string, { image: string; alt: string; description: string; icon: 'home' | 'building' | 'school' | 'gym' | 'store' | 'clinic' }> = {
  condominios: { image: '/images/segments/condominios.webp', alt: 'Imagem ilustrativa gerada por IA de entrada de condomínio moderno com portaria e paisagismo', description: 'Organize a entrada de moradores, visitantes e prestadores com controle de acesso e segurança no fluxo do condomínio.', icon: 'home' },
  empresas: { image: '/images/segments/empresas.webp', alt: 'Imagem ilustrativa gerada por IA de edifício empresarial moderno com fachada de vidro azul', description: 'Integre o controle de acesso e a gestão de jornada de colaboradores com soluções sob medida para o seu negócio.', icon: 'building' },
  escolas: { image: '/images/segments/escolas.webp', alt: 'Imagem ilustrativa gerada por IA de sala de aula moderna com carteiras e cadeiras azuis', description: 'Garanta a segurança de alunos, equipes e visitantes com controle de acesso e soluções adequadas para o ambiente escolar.', icon: 'school' },
  academias: { image: '/images/segments/academias.webp', alt: 'Imagem ilustrativa gerada por IA de academia moderna com esteiras e equipamentos profissionais', description: 'Agilize a liberação de alunos e equipes com soluções de controle de acesso e gestão de frequência.', icon: 'gym' },
  comercios: { image: '/images/segments/comercios.webp', alt: 'Imagem ilustrativa gerada por IA de loja moderna e organizada com prateleiras e balcões', description: 'Apoie a operação da equipe e organize seus acessos com controles simples e eficientes.', icon: 'store' },
  clinicas: { image: '/images/segments/clinicas.webp', alt: 'Imagem ilustrativa gerada por IA de corredor de clínica moderna com consultórios e recepção', description: 'Controle a entrada de equipes e visitantes com soluções compatíveis com a rotina do atendimento.', icon: 'clinic' },
};

function SegmentIcon({ kind }: { kind: (typeof segmentCards)[string]['icon'] }) {
  const common = { viewBox: '0 0 32 32', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };
  if (kind === 'home') return <svg {...common}><path d="m4 14 12-10 12 10M7 12v16h18V12M13 28v-9h6v9"/></svg>;
  if (kind === 'building') return <svg {...common}><path d="M5 28V7l11-4 11 4v21M3 28h26M10 10h2m8 0h2M10 15h2m8 0h2M10 20h2m8 0h2M14 28v-5h4v5"/></svg>;
  if (kind === 'school') return <svg {...common}><path d="m3 12 13-8 13 8-13 8-13-8Z"/><path d="M9 16v7c4 4 10 4 14 0v-7M29 12v9"/></svg>;
  if (kind === 'gym') return <svg {...common}><path d="M4 12v8m4-11v14m16-14v14m4-11v8M8 16h16"/></svg>;
  if (kind === 'store') return <svg {...common}><path d="M5 12h22l-2-8H7l-2 8ZM7 12v16h18V12M12 28v-9h8v9M4 12c0 3 4 4 6 1 2 3 6 2 6-1 0 3 4 4 6 1 2 3 6 2 6-1"/></svg>;
  return <svg {...common}><path d="M12 4h8v8h8v8h-8v8h-8v-8H4v-8h8V4Z"/></svg>;
}
export const metadata: Metadata = { title: 'Controle de Acesso para Empresas e Condomínios em Salvador', description: 'Soluções de controle de acesso, automação e ponto para condomínios, empresas, escolas, academias, comércios e clínicas em Salvador e Bahia.', alternates: { canonical: '/segmentos' }, openGraph: { url: '/segmentos', title: 'Segmentos atendidos | Correia Tecnologia', description: 'Soluções de controle de acesso, automação e ponto para diferentes ambientes em Salvador e Bahia.', images: [{ url: '/images/segments/empresas.webp', alt: 'Imagem ilustrativa gerada por IA de edifício empresarial moderno' }] } };

export default function Segmentos() { return <main id="conteudo">
  <SubpageHero eyebrow="Segmentos atendidos" title={<>Soluções para <em>diferentes ambientes.</em></>} text="A tecnologia pode se adaptar às rotinas de condomínios, empresas, escolas, academias, comércios e clínicas." image="/images/acesso-catraca.webp" imageAlt="Pessoa utilizando controle facial ao entrar por uma catraca corporativa" secondary={{ label: 'Falar com um especialista', href: '/contato' }} benefits={['Soluções personalizadas', 'Mais organização dos acessos', 'Atendimento em Salvador']} />
  <section className="section segment-page-section"><div className="container"><div className="section-head"><div><span className="eyebrow">Conheça os segmentos <i aria-hidden="true"/></span><h2>Uma solução pensada<br/><em>para a sua rotina.</em></h2></div><p>O escopo é definido em conversa com a equipe, considerando o ambiente, os fluxos e as necessidades informadas.</p></div><div className="segment-photo-grid">{segments.map((segment) => { const card = segmentCards[segment.slug]; return <Link href={`/segmentos/${segment.slug}`} className="segment-photo-card" key={segment.slug} aria-label={`${segment.title}: saiba mais`}><div className="segment-photo"><Image src={card.image} alt={card.alt} fill quality={88} sizes="(max-width: 767px) calc(100vw - 44px), (max-width: 1024px) calc(50vw - 48px), (max-width: 1536px) calc(33vw - 48px), 440px"/><span className="segment-photo-icon"><SegmentIcon kind={card.icon}/></span></div><div className="segment-photo-copy"><h2>{segment.title}</h2><p>{card.description}</p><span className="segment-card-footer"><span className="text-link">Saiba mais <span aria-hidden="true">→</span></span><span className="segment-arrow" aria-hidden="true">→</span></span></div></Link>; })}</div><p className="segment-image-note">Imagens ilustrativas geradas por IA. Não representam clientes ou projetos específicos.</p></div></section>
</main>; }
