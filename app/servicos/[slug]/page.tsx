import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SubpageHero } from '../../../components/subpage-hero';
import { services, siteUrl, whatsappLink } from '../../../lib/site';

const serviceSeo: Record<string, { title: string; description: string }> = {
  'controle-de-acesso-facial': { title: 'Controle de acesso facial em Salvador', description: 'Conheça soluções de controle de acesso facial para empresas e condomínios em Salvador. Avaliação do ambiente, opções de equipamentos e orçamento sob consulta.' },
  'relogios-de-ponto': { title: 'Relógios de ponto em Salvador', description: 'Consulte relógios de ponto para registro e gestão de jornada em empresas de Salvador. Modelos, formas de identificação, instalação e disponibilidade sob consulta.' },
  'automacao-de-entradas': { title: 'Automação de entradas em Salvador', description: 'Planeje catracas e automação de entradas em Salvador conforme o fluxo de pessoas e a infraestrutura do local. Fale com a Correia Tecnologia.' },
  'venda-de-equipamentos': { title: 'Venda de equipamentos de acesso e ponto', description: 'Consulte equipamentos de controle de acesso e relógios de ponto para sua operação em Salvador. Modelos e disponibilidade confirmados sob consulta.' },
  'locacao-de-equipamentos': { title: 'Locação de equipamentos em Salvador', description: 'Consulte opções de locação de equipamentos de controle de acesso e ponto em Salvador. Prazo, disponibilidade e condições avaliados para cada projeto.' },
  'instalacao-de-solucoes': { title: 'Instalação de controle de acesso em Salvador', description: 'Solicite avaliação para instalação de soluções de controle de acesso e ponto em Salvador. Configuração e escopo definidos conforme o ambiente.' },
};

const serviceHeroImages: Record<string, { src: string; alt: string }> = {
  'controle-de-acesso-facial': { src: '/images/reference/servico-acesso-facial.webp', alt: 'Terminal de reconhecimento facial, imagem ilustrativa da referência visual' },
  'relogios-de-ponto': { src: '/images/relogio-ponto-foto.webp', alt: 'Relógio eletrônico de ponto apresentado no site da Correia' },
  'automacao-de-entradas': { src: '/images/reference/servico-automacao.webp', alt: 'Catracas de entrada, imagem ilustrativa da referência visual' },
  'venda-de-equipamentos': { src: '/images/reference/servico-venda.webp', alt: 'Equipamentos de controle de acesso, imagem ilustrativa da referência visual' },
  'locacao-de-equipamentos': { src: '/images/reference/servico-locacao.webp', alt: 'Equipamentos de acesso, imagem ilustrativa da referência visual' },
  'instalacao-de-solucoes': { src: '/images/reference/servico-instalacao.webp', alt: 'Instalação de terminal de acesso, imagem ilustrativa da referência visual' },
};

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const seo = serviceSeo[slug];
  return service && seo ? {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `/servicos/${slug}` },
    openGraph: { type: 'website', url: `/servicos/${slug}`, title: `${seo.title} | Correia Tecnologia`, description: seo.description },
  } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = services.find((s) => s.slug === slug);
  if (!item) notFound();
  const hero = serviceHeroImages[item.slug];
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: item.title,
    serviceType: item.title,
    description: item.detail,
    url: `${siteUrl}/servicos/${item.slug}`,
    areaServed: [{ '@type': 'City', name: 'Salvador' }, { '@type': 'AdministrativeArea', name: 'Bahia' }],
    provider: { '@id': `${siteUrl}/#organization` },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Soluções', item: `${siteUrl}/servicos` },
      { '@type': 'ListItem', position: 3, name: item.title, item: `${siteUrl}/servicos/${item.slug}` },
    ],
  };
  return <main id="conteudo">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }} />
    <SubpageHero eyebrow={`Soluções / ${item.title}`} title={<>{item.title} para o seu <em>ambiente.</em></>} text={item.detail} image={hero.src} imageAlt={hero.alt} secondary={{ label: 'Ver todas as soluções', href: '/servicos' }} benefits={['Avaliação da necessidade', 'Opções sob consulta', 'Atendimento em Salvador']} illustrative={item.slug !== 'relogios-de-ponto'} />
    <section className="section service-detail-section"><div className="container detail-grid"><div className="detail-photo"><Image src={item.image || hero.src} alt={item.alt || hero.alt} fill sizes="(max-width: 760px) 100vw, 42vw"/><span className="photo-label">{item.slug === 'relogios-de-ponto' ? 'Equipamento apresentado no site' : 'Imagem ilustrativa'}</span></div><div className="detail-copy"><span className="eyebrow">Uma solução para sua realidade</span><h2>Planejada para o seu <em>dia a dia.</em></h2><p>{item.detail}</p><p>A recomendação considera o ambiente, o fluxo de pessoas, a infraestrutura e as necessidades específicas do projeto. Fale com a equipe para entender opções, disponibilidade e escopo.</p><ul className="check-list"><li>Avaliação inicial das necessidades</li><li>Indicação conforme o cenário apresentado</li><li>Orçamento e condições mediante consulta</li></ul><a className="button" href={whatsappLink(`Olá! Gostaria de conversar sobre ${item.title}.`)} target="_blank" rel="noreferrer">Consultar no WhatsApp <span>↗</span></a><Link className="back-link" href="/servicos">← Ver todas as soluções</Link></div></div></section>
  </main>;
}
