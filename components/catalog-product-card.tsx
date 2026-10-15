import Image from 'next/image';
import Link from 'next/link';
import { type CatalogProduct, productCategoryName, productPath, productQuote } from '../lib/catalog';

export function CatalogProductCard({ product }: { product: CatalogProduct }) {
  const image = product.imagens[0];
  return <article className="catalog-product-card">
    <div className="catalog-product-visual">
      <Link href={productPath(product)} className="catalog-product-media" aria-label={`Ver detalhes de ${product.nome}`}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 33vw" />
      </Link>
      <span className="catalog-product-category">{productCategoryName(product.categoriaPrincipal)}</span>
    </div>
    <div className="catalog-product-content">
      <span className="catalog-product-brand">Fabricante <strong>{product.marca}</strong></span>
      <h3><Link href={productPath(product)}>{product.nome}</Link></h3>
      <span className="catalog-product-model">Modelo: {product.modelo}</span>
      <p>{product.descricaoCurta}</p>
      <ul>{product.beneficios.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul>
      <div className="catalog-product-actions"><Link className="catalog-detail-button" href={productPath(product)}>Ver detalhes <span aria-hidden="true">→</span></Link><a className="catalog-quote-button" href={productQuote(product)} target="_blank" rel="noopener noreferrer">Solicitar orçamento <span aria-hidden="true">↗</span></a></div>
    </div>
  </article>;
}
