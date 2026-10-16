import type { Metadata } from 'next';
import Link from 'next/link';
import { SubpageHero } from '../../../components/subpage-hero';
import { contact, siteUrl, whatsappLink } from '../../../lib/site';

const path = '/sistemas/secullum-ponto-web';
const title = 'Secullum Ponto Web em Salvador BA | Correia Tecnologia';
const description = 'Conheça soluções em Secullum Ponto Web para gestão de ponto eletrônico em Salvador, Bahia. Consulte a Correia Tecnologia e Automações.';

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', url: path, title, description },
};

const schema = [
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Secullum Ponto Web em Salvador', serviceType: 'Comercialização, instalação e suporte para sistema de gestão de ponto', description, url: `${siteUrl}${path}`, areaServed: { '@type': 'City', name: 'Salvador' }, provider: { '@id': `${siteUrl}/#localbusiness` } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Soluções', item: `${siteUrl}/servicos` },
    { '@type': 'ListItem', position: 3, name: 'Secullum Ponto Web', item: `${siteUrl}${path}` },
  ] },
];

export default function SecullumPontoWebPage() {
  const quote = whatsappLink('Olá! Gostaria de conversar sobre venda, instalação ou suporte do Secullum Ponto Web em Salvador.');
  return <main id="conteudo">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <SubpageHero eyebrow="Sistema de gestão de ponto / Salvador" title={<>Sistema Secullum Ponto Web <em>em Salvador, Bahia</em></>} text="Organize marcações, acompanhe jornadas e avalie a integração com os equipamentos de ponto da sua empresa. A Correia Tecnologia e Automações comercializa, instala e presta suporte à solução em Salvador." image="/images/heroes/relogio-ponto-facial.webp" imageAlt="Equipamento de registro de ponto em ambiente empresarial; imagem ilustrativa" action="Solicitar orçamento de Secullum Ponto Web" secondary={{ label: 'Ver relógios de ponto', href: '/relogio-de-ponto-facial-salvador' }} benefits={['Gestão de jornada', 'Implantação sob avaliação', 'Atendimento em Salvador']} illustrative />
    <section className="section point-content-section"><div className="container point-content-wrap">
      <div className="point-content-intro"><span className="eyebrow">Software de ponto eletrônico</span><h2>Secullum Ponto Web para a rotina do RH</h2><p>O sistema reúne o tratamento das marcações e o acompanhamento da jornada em uma plataforma web. A configuração depende do plano contratado, da forma de registro escolhida e dos equipamentos existentes. A Secullum apresenta atualmente o Ponto Web sob a marca <strong>Secullum RH</strong>; confirme com a equipe a versão e as condições disponíveis para sua empresa.</p></div>
      <div className="point-content-grid">
        <article><h3>Registro e acompanhamento</h3><p>Centralize marcações de entrada, saída e intervalos e acompanhe informações de jornada. Recursos de aplicativos, relatórios e validação facial variam conforme o plano e a configuração.</p></article>
        <article><h3>Integração com relógios de ponto</h3><p>O sistema pode se comunicar com equipamentos compatíveis. Antes da implantação, verificamos modelo, versão, forma de comunicação e necessidades de cada unidade; compatibilidade não é presumida.</p></article>
        <article><h3>Implantação em Salvador</h3><p>A Correia Tecnologia comercializa, instala e presta suporte ao sistema para empresas em Salvador, Bahia. O escopo inclui uma avaliação da operação, dos cadastros, dos equipamentos e dos acessos necessários.</p></article>
        <article><h3>Como escolher a solução</h3><p>Informe a quantidade de colaboradores, unidades, turnos, equipamentos existentes e rotinas do departamento pessoal. Com esses dados, é possível avaliar plano, integração e proposta comercial.</p></article>
      </div>
      <div className="point-salvador-panel"><div><span className="eyebrow">Atendimento local</span><h2>Secullum Ponto Web em Salvador</h2><p>Converse com a Correia Tecnologia e Automações sobre contratação, instalação e suporte. Versão, recursos, disponibilidade e valores são confirmados no orçamento.</p><p className="point-address">{contact.address}</p></div><div className="point-actions"><a className="button" href={quote} target="_blank" rel="noopener noreferrer">Solicitar orçamento <span aria-hidden="true">↗</span></a><Link className="text-link" href="/contato">Outras formas de contato <span aria-hidden="true">→</span></Link></div></div>
      <section className="point-faq" aria-labelledby="secullum-web-faq"><h2 id="secullum-web-faq">Perguntas sobre o Secullum Ponto Web</h2><article><h3>O Secullum Ponto Web mudou de nome?</h3><p>A página oficial da fabricante informa que o Secullum Ponto Web agora é Secullum RH. Antes de contratar, confirme o produto e o plano atuais na proposta.</p></article><article><h3>Funciona com qualquer relógio de ponto?</h3><p>A integração depende do equipamento, da versão e dos recursos contratados. A compatibilidade deve ser verificada antes da implantação.</p></article><article><h3>O sistema web é igual ao Ponto Offline?</h3><p>São ofertas diferentes para necessidades de gestão e infraestrutura distintas. Consulte também a página do Secullum Ponto Offline para comparar a implantação.</p></article></section>
      <div className="related-links"><Link href="/sistemas/secullum-ponto-offline">Conhecer Secullum Ponto Offline <b aria-hidden="true">→</b></Link><Link href="/catalogo">Catálogo de relógios de ponto <b aria-hidden="true">→</b></Link><Link href="https://www.secullum.com.br/pt/produtos/secullum-rh/ponto" target="_blank" rel="noopener noreferrer">Informações da fabricante <b aria-hidden="true">↗</b></Link></div>
    </div></section>
  </main>;
}
