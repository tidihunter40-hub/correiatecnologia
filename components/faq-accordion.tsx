import type { FaqItem } from '../lib/faq';

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return <div className="faq-accordion">{items.map((item) => <details className="faq-item" key={item.question}>
    <summary><h3>{item.question}</h3><span className="faq-toggle" aria-hidden="true" /></summary>
    <div className="faq-answer"><p>{item.answer}</p></div>
  </details>)}</div>;
}
