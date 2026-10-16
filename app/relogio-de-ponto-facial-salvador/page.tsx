import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappLink, siteUrl, contact } from '../../lib/site';
import { serviceSeoContent } from '../../lib/service-seo';
import { catalogProducts, productPath } from '../../lib/catalog';

const canonicalPath = '/relogio-de-ponto-facial-salvador';
const pageTitle = serviceSeoContent['relogios-de-ponto'].title;
const pageDescription = serviceSeoContent['relogios-de-ponto'].description;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: canonicalPath },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website', url: canonicalPath, title: pageTitle, description: pageDescription,
    images: [{ url: '/images/heroes/relogio-ponto-facial.webp', alt: 'Relógio de ponto biométrico em ambiente de trabalho; imagem ilustrativa' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: ['/images/heroes/relogio-ponto-facial.webp'] },
};

const structuredData = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'Leitor e Relógio de Ponto Facial em Salvador, Bahia',
    serviceType: 'Venda, locação, instalação e suporte para relógios de ponto facial',
    description: pageDescription, url: `${siteUrl}${canonicalPath}`,
    areaServed: [{ '@type': 'City', name: 'Salvador' }, { '@type': 'AdministrativeArea', name: 'Bahia' }],
    provider: { '@id': `${siteUrl}/#localbusiness` },
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Soluções', item: `${siteUrl}/servicos` },
      { '@type': 'ListItem', position: 3, name: 'Relógios de Ponto Facial', item: `${siteUrl}${canonicalPath}` },
    ],
  },
];

export default function RelogiosDePontoPage() {
  const quoteLink = whatsappLink('Olá! Gostaria de um orçamento para relógios de ponto facial em Salvador.');
  const facialProduct = catalogProducts.find((product) => product.id === 'dixi-facial')!;

  return <main id="conteudo">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <section className="subpage-hero" aria-labelledby="point-page-title">
      <Image className="subpage-hero-photo" src="/images/heroes/relogio-ponto-facial.webp" alt="Relógio biométrico para registro de ponto em ambiente de trabalho; fotografia ilustrativa" fill priority quality={88} sizes="(max-width: 760px) 100vw, 58vw" />
      <div className="subpage-hero-shade" />
      <div className="container subpage-hero-inner"><div className="subpage-hero-copy">
        <span className="subpage-eyebrow">Gestão de jornada<i /></span>
        <h1 id="point-page-title">Leitor e Relógio de Ponto Facial <em>em Salvador, Bahia</em></h1>
        <p>{pageDescription}</p>
        <div className="subpage-actions">
          <a className="reference-button reference-button-primary" href={quoteLink} target="_blank" rel="noreferrer">Solicitar orçamento <span aria-hidden="true">→</span></a>
          <Link className="reference-button reference-button-outline" href="/catalogo">Ver equipamentos <span aria-hidden="true">→</span></Link>
        </div>
        <div className="subpage-benefits"><span><i aria-hidden="true">✓</i>Venda e locação</span><span><i aria-hidden="true">✓</i>Instalação sob consulta</span><span><i aria-hidden="true">✓</i>Atendimento em Salvador</span></div>
        <small className="subpage-disclaimer">Imagem ilustrativa; não representa modelo específico nem instalação realizada pela Correia Tecnologia.</small>
      </div></div>
    </section>

    <section className="section point-content-section"><div className="container point-content-wrap">
      <div className="point-content-intro"><span className="eyebrow">Controle de jornada</span>
        <h2>O que é um relógio de ponto facial?</h2>
        <p>É um equipamento de registro de jornada que identifica o colaborador pelo rosto antes de registrar a marcação. O leitor de ponto facial é o recurso de identificação; o relógio de ponto eletrônico reúne esse recurso e as funções de registro, conforme o modelo. Para escolher uma solução em Salvador, considere quantas pessoas marcarão ponto, os horários de maior movimento e a compatibilidade com os processos da empresa.</p>
      </div>
      <div className="point-content-grid">
        <article><h3>Como funciona o reconhecimento facial</h3><p>Após o cadastro autorizado, o terminal compara a face apresentada com os dados registrados no sistema compatível. Quando a identificação é aceita, a marcação de ponto pode ser registrada. Cadastro, armazenamento, integração e formas alternativas de identificação dependem do equipamento e da configuração escolhidos.</p></article>
        <article><h3>Benefícios e aplicações para empresas</h3><p>A identificação facial pode tornar a marcação mais prática e ajudar a associá-la ao colaborador cadastrado. Empresas, comércios, escolas e clínicas podem avaliar a solução para rotinas de entrada, saída e outras marcações de jornada. A escolha deve considerar o fluxo de pessoas e as regras de trabalho da operação.</p></article>
        <article><h3>Soluções disponíveis sob consulta</h3><p>A Correia Tecnologia e Automações recebe consultas sobre compra e locação de relógios de ponto. Modelos faciais, recursos, compatibilidade, disponibilidade, prazos e condições comerciais são confirmados pela equipe antes do orçamento.</p></article>
        <article><h3>Instalação e suporte</h3><p>A implantação pode incluir avaliação do local, instalação e configuração do equipamento. O escopo de suporte é confirmado conforme o modelo, a infraestrutura e as condições acordadas. O tratamento dos dados faciais deve ser definido pela empresa conforme sua finalidade e as obrigações aplicáveis.</p></article>
      </div>
      <section className="point-equipment" aria-labelledby="point-equipment-title"><div className="point-equipment-photo"><Image src={facialProduct.imagens[0].src} alt={facialProduct.imagens[0].alt} fill sizes="(max-width: 760px) 100vw, 300px" /></div><div><span className="eyebrow">Equipamento do catálogo</span><h2 id="point-equipment-title">Coletor de ponto facial DIXI</h2><p>Fotografia do produto disponibilizada pela fabricante. O coletor é usado com uma solução de ponto REP-P compatível; versão, integração e disponibilidade são confirmadas na proposta.</p><Link className="text-link" href={productPath(facialProduct)}>Ver produto e informações técnicas <span aria-hidden="true">→</span></Link></div></section>
      <div className="point-salvador-panel"><div><span className="eyebrow">Atendimento local</span><h2>Atendimento em Salvador e região</h2>
        <p>Para solicitar um orçamento, informe à Correia Tecnologia e Automações o número de colaboradores, os locais de instalação, os horários de maior fluxo e se precisa de integração com um sistema existente. A equipe confirma as opções de equipamento, instalação e suporte para Salvador, Bahia, e região.</p><p className="point-address">{contact.address}</p>
      </div><div className="point-actions"><a className="button" href={quoteLink} target="_blank" rel="noreferrer">Solicitar orçamento <span aria-hidden="true">↗</span></a><a className="text-link" href={`tel:${contact.phoneHref}`}>Ligar: {contact.phone} <span aria-hidden="true">↗</span></a><Link className="text-link" href="/contato">Outras formas de contato <span aria-hidden="true">→</span></Link></div></div>
      <section className="point-faq" aria-labelledby="point-faq-title"><h2 id="point-faq-title">Perguntas frequentes sobre relógio de ponto facial</h2>
        {serviceSeoContent['relogios-de-ponto'].questions.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
      </section>
      <div className="related-links"><Link href="/controle-de-acesso-facial-salvador">Controle de acesso facial em Salvador <b aria-hidden="true">→</b></Link><Link href="/sistemas/secullum-ponto-web">Secullum Ponto Web <b aria-hidden="true">→</b></Link><Link href="/sistemas/secullum-ponto-offline">Secullum Ponto Offline <b aria-hidden="true">→</b></Link></div>
    </div></section>
  </main>;
}
