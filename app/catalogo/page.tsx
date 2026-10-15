import type { Metadata } from 'next';
import Link from 'next/link';
import { CatalogFilter } from '../../components/catalog-filter';
import { ProductCard } from '../../components/cards';
import { products, siteUrl, solutionPath } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Relógios de Ponto e Equipamentos Profissionais em Salvador',
  description: 'Catálogo de relógios de ponto eletrônicos, cartográficos, biométricos e leitores faciais. Conheça modelos reais e solicite orçamento em Salvador, Bahia.',
  alternates: { canonical: '/catalogo' },
  openGraph: { url: '/catalogo', title: 'Relógios de Ponto e Equipamentos Profissionais | Correia Tecnologia', description: 'Veja relógios de ponto e coletores faciais de marcas reconhecidas em Salvador, Bahia.', images: [{ url: '/images/products/control-id-idclass-angle.webp', alt: 'Relógio de ponto Control iD iDClass' }] },
};

export default function Catalogo() {
  return <main id="conteudo" className="catalog-new-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Catálogo', item: `${siteUrl}/catalogo` }] }).replace(/</g, '\\u003c') }} />
    <section className="catalog-hero"><div className="container catalog-hero-inner"><nav className="catalog-breadcrumb" aria-label="Navegação estrutural"><Link href="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">Catálogo</span></nav><span className="catalog-hero-kicker">CATÁLOGO CORREIA TECNOLOGIA</span><h1>Relógios de ponto e<br/><em>equipamentos profissionais.</em></h1><p>Tecnologia e segurança para o controle de jornada da sua empresa. Conheça nossas soluções em ponto eletrônico, biometria e reconhecimento facial.</p><a href="#produtos" className="catalog-hero-action">Conhecer equipamentos <span aria-hidden="true">↓</span></a></div><div className="catalog-hero-orbit" aria-hidden="true"/></section>
    <section className="catalog-new-content"><div className="container"><div className="catalog-category-heading"><div className="catalog-category-title"><span className="catalog-category-eyebrow">Soluções em controle de ponto</span><h2>Quatro caminhos para uma<br/><em>jornada melhor organizada.</em></h2></div><p>Tecnologias completas para registrar, identificar e gerenciar a jornada de trabalho da sua empresa com mais segurança, praticidade e eficiência.</p><ul aria-label="Benefícios das soluções"><li>Mais segurança</li><li>Mais eficiência</li><li>Gestão simplificada</li></ul></div><CatalogFilter /></div></section>
    <section className="catalog-other"><div className="container"><div className="catalog-other-head"><div><span className="eyebrow">Outras soluções</span><h2>Além do controle de ponto.</h2></div><p>Catracas, controle de acesso e suprimentos seguem disponíveis para projetos integrados.</p></div><div className="product-grid catalog-other-grid">{products.filter((product) => product.kind !== 'Gestão de jornada').map((product) => <ProductCard key={product.title} item={product} />)}</div><div className="related-links"><Link href={solutionPath('controle-de-acesso-facial')}>Controle de acesso facial em Salvador <b aria-hidden="true">→</b></Link><Link href={solutionPath('automacao-de-entradas')}>Automação de entradas <b aria-hidden="true">→</b></Link></div></div></section>
    <section className="catalog-contact-strip"><div className="catalog-contact-photo" aria-hidden="true"/><div><span className="eyebrow">Precisa de orientação?</span><h2>Encontre o modelo<br/><em>adequado à sua operação.</em></h2><p>Conte à nossa equipe como sua empresa registra a jornada hoje. Verificamos versões, compatibilidade e disponibilidade no orçamento.</p><Link className="button" href="/contato">Falar com a equipe <span>↗</span></Link></div></section>
  </main>;
}
