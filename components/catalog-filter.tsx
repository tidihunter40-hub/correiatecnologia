'use client';

import { useState } from 'react';
import { ProductCard } from './cards';
import { products } from '../lib/site';

const filters = [
  { label: 'Todos', kind: null },
  { label: 'Controle de acesso', kind: 'Controle de acesso' },
  { label: 'Relógios de ponto', kind: 'Gestão de jornada' },
  { label: 'Catracas e automação', kind: 'Automação de entradas' },
  { label: 'Acessórios', kind: 'Acessórios' },
] as const;

export function CatalogFilter() {
  const [activeKind, setActiveKind] = useState<string | null>(null);
  const visibleProducts = activeKind
    ? products.filter((product) => product.kind === activeKind)
    : products;

  return <>
    <div className="catalog-categories" role="group" aria-label="Filtrar equipamentos por categoria">
      {filters.map((filter) => {
        const active = activeKind === filter.kind;
        return <button
          key={filter.label}
          type="button"
          className={active ? 'active' : undefined}
          aria-pressed={active}
          onClick={() => setActiveKind(filter.kind)}
        >{filter.label}</button>;
      })}
    </div>
    <p className="catalog-filter-status" role="status" aria-live="polite">
      {visibleProducts.length} {visibleProducts.length === 1 ? 'categoria de equipamento' : 'categorias de equipamentos'}
    </p>
    <div className="product-grid catalog-grid">
      {visibleProducts.map((product) => <ProductCard key={product.title} item={product} />)}
    </div>
  </>;
}
