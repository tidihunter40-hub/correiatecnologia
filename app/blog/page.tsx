import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '../../components/site-chrome';

export const metadata: Metadata = {
  title: 'Conteúdos sobre Segurança e Automação em Salvador',
  description: 'Orientações sobre controle de acesso, reconhecimento facial, relógios de ponto e automação para empresas e condomínios em Salvador e na Bahia.',
  alternates: { canonical: '/blog' },
  openGraph: { url: '/blog', title: 'Blog | Correia Tecnologia', description: 'Conteúdos sobre controle de acesso, reconhecimento facial, relógios de ponto e automação em Salvador e Bahia.', images: [{ url: '/images/reference/hero-acesso.webp', alt: 'Terminal de reconhecimento facial em ambiente corporativo' }] },
};

const topics = [
  { id: 'controle-de-acesso', category: 'CONTROLE DE ACESSO', title: 'O que avaliar ao planejar o controle de acesso do seu espaço', text: 'Mapeie as entradas, os horários de maior movimento, os perfis de acesso e a infraestrutura disponível. Essas informações ajudam a dimensionar uma solução adequada a cada ambiente.' },
  { id: 'relogio-de-ponto', category: 'GESTÃO DE JORNADA', title: 'Como escolher um relógio de ponto para a sua operação', text: 'Considere o número de pessoas, as formas de identificação, as integrações necessárias e o suporte previsto para instalação e uso do equipamento.' },
  { id: 'compra-ou-locacao', category: 'EQUIPAMENTOS', title: 'Compra ou locação: qual formato faz sentido para o projeto?', text: 'Compare investimento inicial, prazo de uso, instalação e suporte. A disponibilidade e as condições de cada modalidade devem ser avaliadas com a equipe comercial.' },
];

export default function BlogPage() {
  return <main id="conteudo"><PageIntro eyebrow="Blog" title="Tecnologia para escolhas mais informadas." text="Informações sobre controle de acesso, relógios de ponto e automação para diferentes ambientes."/><section className="section"><div className="container blog-topic-grid">{topics.map((topic) => <article className="blog-topic" id={topic.id} key={topic.id}><span className="eyebrow">{topic.category}</span><h2>{topic.title}</h2><p>{topic.text}</p><Link className="text-link" href="/contato">Converse com a equipe <span aria-hidden="true">→</span></Link></article>)}</div></section></main>;
}
