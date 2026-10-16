import type { Metadata } from 'next';
import Link from 'next/link';
import { FaqExplorer } from '../../components/faq-explorer';
import { faqCategories } from '../../lib/faq';
import { siteUrl, whatsappLink } from '../../lib/site';

const title = 'Perguntas Frequentes sobre Ponto e Controle de Acesso';
const description = 'Tire dúvidas sobre relógios de ponto, reconhecimento facial, sistemas Secullum, instalação e suporte da Correia Tecnologia em Salvador.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/perguntas-frequentes' },
  openGraph: { url: '/perguntas-frequentes', title: `${title} | Correia Tecnologia`, description },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${siteUrl}/perguntas-frequentes#faq`,
  mainEntity: faqCategories.flatMap((group) => group.items.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } }))),
};

export default function PerguntasFrequentesPage() {
  return <main id="conteudo" className="faq-page">
    <section className="faq-hero"><div className="container"><span className="eyebrow">Central de ajuda</span><h1>Perguntas Frequentes</h1><p>Encontre respostas para as principais dúvidas sobre nossas soluções em controle de ponto, reconhecimento facial e automação.</p></div></section>
    <section className="faq-content section" aria-label="Perguntas e respostas"><div className="container"><FaqExplorer /><nav className="faq-related" aria-label="Explore nossas soluções"><h2>Conheça nossas soluções</h2><div><Link href="/catalogo">Equipamentos <span aria-hidden="true">→</span></Link><Link href="/servicos">Soluções <span aria-hidden="true">→</span></Link><Link href="/contato">Contato <span aria-hidden="true">→</span></Link></div></nav></div></section>
    <section className="faq-contact"><div className="container faq-contact-inner"><div><span className="eyebrow">Estamos à disposição</span><h2>Ainda ficou alguma dúvida?</h2><p>Nossa equipe está pronta para ajudar você a encontrar a melhor solução para sua empresa.</p></div><div className="faq-contact-actions"><a className="button" href={whatsappLink('Olá! Tenho uma dúvida sobre as soluções da Correia Tecnologia.')} target="_blank" rel="noopener noreferrer">Falar com um especialista <span aria-hidden="true">↗</span></a><Link className="button button-white" href="/contato">Solicitar orçamento <span aria-hidden="true">→</span></Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </main>;
}
