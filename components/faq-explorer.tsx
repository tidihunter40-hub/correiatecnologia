'use client';

import { useMemo, useState } from 'react';
import { faqCategories } from '../lib/faq';
import { FaqAccordion } from './faq-accordion';

function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
}

export function FaqExplorer() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('todas');
  const groups = useMemo(() => faqCategories
    .filter((group) => category === 'todas' || group.id === category)
    .map((group) => ({ ...group, items: group.items.filter((item) => normalize(`${item.question} ${item.answer}`).includes(normalize(query.trim()))) }))
    .filter((group) => group.items.length > 0), [category, query]);
  const count = groups.reduce((total, group) => total + group.items.length, 0);

  return <div className="faq-explorer">
    <label className="faq-search-label" htmlFor="faq-search">Pesquisar perguntas</label>
    <div className="faq-search-wrap"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg><input id="faq-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por equipamento, ponto, suporte..." /></div>
    <div className="faq-filters" role="group" aria-label="Filtrar por categoria">
      {[{ id: 'todas', title: 'Todas' }, ...faqCategories].map((group) => <button key={group.id} type="button" className={category === group.id ? 'is-selected' : ''} aria-pressed={category === group.id} onClick={() => setCategory(group.id)}>{group.title}</button>)}
    </div>
    <p className="faq-count" role="status">{count} {count === 1 ? 'pergunta encontrada' : 'perguntas encontradas'}</p>
    {groups.length ? groups.map((group) => <section className="faq-group" key={group.id} aria-labelledby={`faq-${group.id}`}><h2 id={`faq-${group.id}`}>{group.title}</h2><FaqAccordion items={group.items} /></section>) : <div className="faq-empty"><h2>Nenhuma pergunta encontrada</h2><p>Tente outra palavra ou selecione uma categoria diferente.</p><button type="button" onClick={() => { setQuery(''); setCategory('todas'); }}>Limpar filtros</button></div>}
  </div>;
}
