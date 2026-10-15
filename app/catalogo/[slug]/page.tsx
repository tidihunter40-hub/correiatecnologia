import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CatalogProductCard } from '../../../components/catalog-product-card';
import { ProductGallery } from '../../../components/product-gallery';
import { catalogProducts, productCategoryName, productPath, productQuote } from '../../../lib/catalog';
import { siteUrl } from '../../../lib/site';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return catalogProducts.map((product) => ({ slug: product.slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) return {};
  const image = product.imagens[0];
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: productPath(product) },
    openGraph: { type: 'website', url: productPath(product), title: `${product.seoTitle} | Correia Tecnologia`, description: product.seoDescription, images: [{ url: image.src, alt: image.alt }] },
    twitter: { card: 'summary_large_image', title: product.seoTitle, description: product.seoDescription, images: [image.src] },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) notFound();
  const path = productPath(product);
  const sharedCategory = catalogProducts.filter((item) => item.id !== product.id && item.categorias.some((category) => product.categorias.includes(category)));
  const related = (sharedCategory.length ? sharedCategory : catalogProducts.filter((item) => item.id !== product.id && item.categorias.some((category) => category !== 'facial'))).slice(0, 3);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Product', '@id': `${siteUrl}${path}#product`, name: product.nome, brand: { '@type': 'Brand', name: product.marca }, model: product.modelo, description: product.descricaoCurta, category: productCategoryName(product.categoriaPrincipal), image: product.imagens.map((image) => `${siteUrl}${image.src}`), url: `${siteUrl}${path}` },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Catálogo', item: `${siteUrl}/catalogo` }, { '@type': 'ListItem', position: 3, name: product.nome, item: `${siteUrl}${path}` }] },
    ],
  };
  return <main id="conteudo" className="product-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <section className="product-hero"><div className="container"><nav className="catalog-breadcrumb" aria-label="Navegação estrutural"><Link href="/">Início</Link><span aria-hidden="true">/</span><Link href="/catalogo">Catálogo</Link><span aria-hidden="true">/</span><span aria-current="page">{product.modelo}</span></nav><div className="product-hero-grid"><ProductGallery images={product.imagens} name={product.nome}/><div className="product-hero-copy"><span className="product-label">{product.marca} <i aria-hidden="true"/> {productCategoryName(product.categoriaPrincipal)}</span><h1>{product.nome}</h1><p className="product-model">Modelo: {product.modelo}</p><p className="product-hero-description">{product.descricaoCurta}</p><ul className="product-hero-benefits">{product.beneficios.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><div className="product-hero-actions"><a className="product-primary-button" href={productQuote(product)} target="_blank" rel="noopener noreferrer">Solicitar orçamento <span aria-hidden="true">↗</span></a><a className="product-secondary-button" href="#ficha-tecnica">Ver ficha técnica <span aria-hidden="true">↓</span></a></div><small>Atendimento em Salvador e região · Bahia. Versão e disponibilidade sob consulta.</small></div></div></div></section>
    <nav className="product-section-nav" aria-label="Seções do produto"><div className="container"><a href="#visao-geral">Visão geral</a><a href="#beneficios">Benefícios</a><a href="#caracteristicas">Características</a><a href="#ficha-tecnica">Ficha técnica</a>{product.videos.length > 0 && <a href="#video">Vídeo</a>}<a href="#orcamento">Orçamento</a></div></nav>
    <section className="product-overview product-section" id="visao-geral"><div className="container product-overview-grid"><div><span className="eyebrow">Visão geral</span><h2>Tecnologia para uma jornada <em>mais organizada.</em></h2></div><p>{product.descricaoCompleta}</p></div></section>
    <section className="product-section product-benefit-section" id="beneficios"><div className="container"><span className="eyebrow">Benefícios</span><h2>O que este equipamento oferece</h2><div className="product-benefit-grid">{product.beneficios.map((benefit, index) => <article key={benefit}><span>0{index + 1}</span><h3>{benefit}</h3></article>)}</div></div></section>
    <section className="product-section product-features-section" id="caracteristicas"><div className="container"><span className="eyebrow">Características</span><h2>Funcionalidades e aplicações</h2><div className="product-feature-grid"><article><h3>Funcionalidades</h3><ul>{product.funcionalidades.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Identificação</h3><ul>{product.identificacao.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Conectividade</h3><ul>{product.conectividade.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Integrações</h3><ul>{product.integracoes.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Aplicações recomendadas</h3><ul>{product.aplicacoes.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>
    <section className="product-section product-spec-section" id="ficha-tecnica"><div className="container product-spec-grid"><div><span className="eyebrow">Ficha técnica</span><h2>Dados confirmados para a <em>versão indicada.</em></h2><p>Os detalhes abaixo seguem as páginas e fichas de referência do fabricante. Variantes podem apresentar recursos diferentes.</p></div><div><dl>{product.especificacoes.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl><div className="product-notes"><h3>Versões e compatibilidade</h3>{product.observacoes.map((note) => <p key={note}>{note}</p>)}</div><div className="product-sources"><strong>Fontes técnicas:</strong>{product.fonteTecnica.map((source, index) => <a href={source} target="_blank" rel="noopener noreferrer" key={source}>Fonte {index + 1} ↗</a>)}</div></div></div></section>
    {product.videos.length > 0 && <section className="product-section product-video-section" id="video"><div className="container"><span className="eyebrow">Vídeo</span><h2>Veja a tecnologia em ação</h2><div className="product-video-grid">{product.videos.map((video) => <figure key={video.src}><video controls playsInline preload="none" poster={video.poster}><source src={video.src} type="video/mp4"/>Seu navegador não suporta vídeo.</video><figcaption>{video.note}</figcaption></figure>)}</div></div></section>}
    <section className="product-quote-section" id="orcamento"><div className="container product-quote-inner"><div><span className="eyebrow">Solicitar orçamento</span><h2>Vamos encontrar a configuração <em>ideal para sua empresa?</em></h2><p>Envie sua necessidade à equipe comercial. Confirmamos o modelo, as integrações e as condições da proposta.</p></div><a href={productQuote(product)} target="_blank" rel="noopener noreferrer">Solicitar orçamento no WhatsApp <span aria-hidden="true">↗</span></a></div></section>
    {related.length > 0 && <section className="product-related product-section"><div className="container"><div className="product-related-head"><div><span className="eyebrow">Continue explorando</span><h2>Equipamentos relacionados</h2></div><Link href="/catalogo">Voltar ao catálogo <span aria-hidden="true">→</span></Link></div><div className="catalog-products-grid">{related.map((item) => <CatalogProductCard key={item.id} product={item}/>)}</div></div></section>}
    <div className="container product-back"><Link href="/catalogo">← Voltar ao catálogo completo</Link></div>
  </main>;
}
