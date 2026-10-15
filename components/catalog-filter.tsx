'use client';

import { useState } from 'react';
import { CatalogProductCard } from './catalog-product-card';
import { catalogCategories, catalogProducts, type CategoryId } from '../lib/catalog';

function CategoryIcon({ id }: { id: CategoryId }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (id === 'eletronicos') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><circle cx="16" cy="16" r="11"/><path d="M16 9v8l5 3"/></svg>;
  if (id === 'cartograficos') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><rect x="4" y="7" width="24" height="18" rx="3"/><path d="M4 13h24M9 19h7m7 0h.1"/></svg>;
  if (id === 'biometricos') return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M7 15a9 9 0 0 1 18 0v4M4 16a12 12 0 0 1 24 0v4M10 17v3a6 6 0 0 0 12 0v-4a6 6 0 0 0-12 0m3 0v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-6 0m3 1v5c0 3-1 5-3 7m7-3c1 2 2 3 4 4"/></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M11 5H6v5m15-5h5v5M6 22v5h5m15-5v5h-5"/><circle cx="16" cy="15" r="4"/><path d="M9 24c1-3 4-5 7-5s6 2 7 5"/></svg>;
}

export function CatalogFilter() {
  const [active, setActive] = useState<CategoryId | 'todos'>('todos');
  const visible = active === 'todos' ? catalogProducts : catalogProducts.filter((product) => product.categorias.includes(active));
  const select = (id: CategoryId | 'todos') => {
    setActive(id);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('produtos')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return <>
    <div className="catalog-category-grid" aria-label="Categorias do catálogo">
      {catalogCategories.map((category) => <article className={`catalog-category-card catalog-category-card--${category.id}`} key={category.id}>
          <div className="catalog-category-copy">
            <div className="catalog-category-name"><span className="catalog-category-icon"><CategoryIcon id={category.id} /></span><h3>{category.name}</h3></div>
            <p>{category.description}</p>
            <ul>{category.benefits.map((benefit) => <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>)}</ul>
          </div>
          <div className="catalog-category-photo" role="img" aria-label={`Imagem ilustrativa de equipamento de ${category.name.toLowerCase()}`}><span className={`catalog-reference-crop catalog-reference-crop--${category.id}`} aria-hidden="true"/><span className="catalog-category-disclaimer">Imagem ilustrativa</span></div>
          <button type="button" onClick={() => select(category.id)} aria-label={`Explorar produtos de ${category.name}`}>Explorar produtos <span aria-hidden="true">→</span></button>
        </article>)}
    </div>
    <section className="catalog-list-section" id="produtos" aria-labelledby="catalog-products-title">
      <div className="catalog-list-heading"><div><span className="eyebrow">Catálogo de equipamentos</span><h2 id="catalog-products-title">Encontre o equipamento <em>certo para sua operação.</em></h2></div><p>Modelos, versões e compatibilidade são confirmados com a equipe no orçamento.</p></div>
      <div className="catalog-filter-tabs" role="group" aria-label="Filtrar equipamentos por categoria">
        <button type="button" aria-pressed={active === 'todos'} className={active === 'todos' ? 'active' : ''} onClick={() => select('todos')}>Todos</button>
        {catalogCategories.map((category) => <button type="button" key={category.id} aria-pressed={active === category.id} className={active === category.id ? 'active' : ''} onClick={() => select(category.id)}>{category.name.replace('Pontos ', '')}</button>)}
      </div>
      <p className="catalog-filter-count" role="status" aria-live="polite">{visible.length} {visible.length === 1 ? 'equipamento encontrado' : 'equipamentos encontrados'}</p>
      <div className="catalog-products-grid">{visible.map((product) => <CatalogProductCard key={product.id} product={product} />)}</div>
    </section>
  </>;
}
