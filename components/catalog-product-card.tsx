import Image from 'next/image';
import Link from 'next/link';
import { type CatalogHighlightIcon, type CatalogProduct, productCategoryName, productPath, productQuote } from '../lib/catalog';

function ProductIcon({ name }: { name: CatalogHighlightIcon }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (name === 'document') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M8 3h12l5 5v21H8zM20 3v6h5M12 15h9m-9 5h9m-9 5h6"/></svg>;
  if (name === 'gear') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="m14 3 4 0 .8 3.1 2.2 1 2.8-1.5 2.8 2.8-1.5 2.8 1 2.2L29 14v4l-2.9.8-1 2.2 1.5 2.8-2.8 2.8-2.8-1.5-2.2 1L18 29h-4l-.8-2.9-2.2-1-2.8 1.5-2.8-2.8 1.5-2.8-1-2.2L3 18v-4l2.9-.8 1-2.2-1.5-2.8 2.8-2.8L11 7.1l2.2-1z"/><circle cx="16" cy="16" r="4"/></svg>;
  if (name === 'print') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M9 11V4h14v7M9 24H5V12h22v12h-4"/><path d="M9 20h14v9H9zM22 16h1"/></svg>;
  if (name === 'clock') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><circle cx="16" cy="16" r="11"/><path d="M16 9v7l5 3"/></svg>;
  if (name === 'offline') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M5 5 27 27M6 19a10 10 0 0 1 3-12M14 6a10 10 0 0 1 11 14M7 23a10 10 0 0 0 15 2M12 17a5 5 0 0 1 6-5M13 23a5 5 0 0 0 6-4"/></svg>;
  if (name === 'fingerprint') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M7 15a9 9 0 0 1 18 0v4M4 16a12 12 0 0 1 24 0v4M10 17v3a6 6 0 0 0 12 0v-4a6 6 0 0 0-12 0m3 0v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-6 0m3 1v5c0 3-1 5-3 7"/></svg>;
  if (name === 'card') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><rect x="4" y="7" width="24" height="18" rx="3"/><path d="M4 13h24M9 19h7m5 0h2"/></svg>;
  if (name === 'network') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><rect x="3" y="4" width="10" height="8" rx="2"/><rect x="19" y="20" width="10" height="8" rx="2"/><rect x="3" y="20" width="10" height="8" rx="2"/><path d="M8 12v4h16v4M8 16v4"/></svg>;
  if (name === 'face') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M11 4H6v5m15-5h5v5M6 23v5h5m15-5v5h-5"/><circle cx="16" cy="15" r="5"/><path d="M9 25c1-4 4-6 7-6s6 2 7 6"/></svg>;
  if (name === 'shield') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="m16 3 11 4v9c0 7-4 11-11 14C9 27 5 23 5 16V7l11-4Z"/><path d="m11 16 3 3 7-7"/></svg>;
  if (name === 'touch') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><rect x="6" y="3" width="20" height="26" rx="3"/><path d="M12 8h8m-6 16h4M16 12v8m-4-4h8"/></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><circle cx="12" cy="11" r="4"/><path d="M3 27v-3a9 9 0 0 1 18 0v3M23 8a4 4 0 0 1 0 8m1 4a7 7 0 0 1 5 7"/></svg>;
}

export function CatalogProductCard({ product }: { product: CatalogProduct }) {
  const image = product.imagens[0];
  const benefitsIcons: CatalogHighlightIcon[] = product.id === 'dixi-printnox' ? ['document', 'gear', 'users'] : product.chamadasVisuais.map((item) => item.icon);
  return <article className={`catalog-product-card catalog-product-card--${product.id}`}>
    <div className="catalog-product-visual">
      <Link href={productPath(product)} className="catalog-product-media" aria-label={`Ver detalhes de ${product.nome}`}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 650px) 100vw, (max-width: 1100px) 50vw, 50vw" />
      </Link>
      <div className="catalog-product-highlights" aria-label="Destaques do equipamento">
        {product.chamadasVisuais.map((item) => <div className="catalog-product-highlight" key={item.label}><ProductIcon name={item.icon}/><span>{item.label}</span></div>)}
      </div>
    </div>
    <div className="catalog-product-content">
      <div className="catalog-product-meta"><span className="catalog-product-category"><ProductIcon name={product.categoriaPrincipal === 'cartograficos' ? 'document' : product.chamadasVisuais[0].icon}/>{productCategoryName(product.categoriaPrincipal)}</span><span className="catalog-product-brand">{product.marca === 'DIXI' ? <>DI<span>XI</span></> : product.marca}</span></div>
      <h3><Link href={productPath(product)}>{product.nome}</Link></h3>
      <p>{product.descricaoCurta}</p>
      <ul className="catalog-product-benefits">{product.beneficios.slice(0, 3).map((feature, index) => <li key={feature}><span className="catalog-benefit-icon"><ProductIcon name={benefitsIcons[index]}/></span><span>{feature}</span></li>)}</ul>
      <div className="catalog-product-actions"><Link className="catalog-detail-button" href={productPath(product)}>Ver detalhes <span aria-hidden="true">→</span></Link><a className="catalog-quote-button" href={productQuote(product)} target="_blank" rel="noopener noreferrer"><ProductIcon name="document"/>Solicitar orçamento <span aria-hidden="true">→</span></a></div>
    </div>
  </article>;
}
