import type { Metadata } from 'next';
import Link from 'next/link';
import { SubpageHero } from '../../../components/subpage-hero';
import { contact, siteUrl, whatsappLink } from '../../../lib/site';

const path = '/sistemas/secullum-ponto-offline';
const title = 'Secullum Ponto Offline em Salvador | Correia Tecnologia';
const description = 'Informações sobre Secullum Ponto Offline, controle de ponto e soluções para empresas em Salvador, Bahia. Conheça a Correia Tecnologia e Automações.';

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', url: path, title, description },
};

const schema = [
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Secullum Ponto Offline em Salvador', serviceType: 'Comercialização, instalação e suporte para sistema de gestão de ponto', description, url: `${siteUrl}${path}`, areaServed: { '@type': 'City', name: 'Salvador' }, provider: { '@id': `${siteUrl}/#localbusiness` } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Soluções', item: `${siteUrl}/servicos` },
    { '@type': 'ListItem', position: 3, name: 'Secullum Ponto Offline', item: `${siteUrl}${path}` },
  ] },
];

export default function SecullumPontoOfflinePage() {
  const quote = whatsappLink('Olá! Gostaria de conversar sobre venda, instalação ou suporte do Secullum Ponto Offline em Salvador.');
  return <main id="conteudo">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <SubpageHero eyebrow="Sistema de gestão de ponto / Salvador" title={<>Sistema Secullum Ponto Offline <em>em Salvador, Bahia</em></>} text="Uma solução para tratamento de ponto na infraestrutura da empresa. A Correia Tecnologia e Automações comercializa, instala e presta suporte ao Secullum Ponto Offline em Salvador." image="/images/heroes/relogio-ponto-facial.webp" imageAlt="Equipamento de registro de ponto em ambiente empresarial; imagem ilustrativa" action="Solicitar orçamento de Secullum Ponto Offline" secondary={{ label: 'Ver relógios de ponto', href: '/relogio-de-ponto-facial-salvador' }} benefits={['Tratamento de jornada', 'Instalação sob avaliação', 'Atendimento em Salvador']} illustrative />
    <section className="section point-content-section"><div className="container point-content-wrap">
      <div className="point-content-intro"><span className="eyebrow">Software instalado na empresa</span><h2>Controle de ponto com Secullum Ponto Offline</h2><p>O Secullum Ponto Offline apoia o tratamento das marcações e os cálculos de jornada. A implantação considera o computador ou servidor, o banco de dados, os equipamentos e as rotinas do RH. Funcionalidades e integrações devem ser confirmadas para a versão e a modalidade contratadas.</p></div>
      <div className="point-content-grid">
        <article><h3>Tratamento das marcações</h3><p>Consulte horas trabalhadas, faltas, atrasos e banco de horas conforme as regras configuradas. A equipe avalia os critérios de jornada e a estrutura disponível antes da instalação.</p></article>
        <article><h3>Equipamentos compatíveis</h3><p>A comunicação com relógios de ponto varia por fabricante, modelo, firmware e versão do software. Fazemos a conferência técnica antes de indicar a integração.</p></article>
        <article><h3>Instalação e suporte em Salvador</h3><p>A Correia Tecnologia comercializa, instala e presta suporte ao Secullum Ponto Offline. O trabalho é dimensionado conforme quantidade de usuários, unidades, equipamentos e infraestrutura da empresa.</p></article>
        <article><h3>Continuidade e migração</h3><p>Para empresas que usam Ponto Secullum 4, é necessário avaliar modalidade de licença, dados e processo de transição. Não instale atualizadores de produtos diferentes sem orientação técnica.</p></article>
      </div>
      <section className="point-faq" aria-labelledby="secullum-offline-faq"><h2 id="secullum-offline-faq">Ponto Secullum 4 e Secullum Ponto Offline</h2><article><h3>O Ponto Secullum 4 ainda é o produto atual?</h3><p>Não. A Secullum informa que o Ponto Secullum 4 foi descontinuado e evoluiu para o Secullum Ponto Offline. Clientes da modalidade de aquisição podem continuar usando a última versão antiga, sem novas atualizações. A migração depende do contrato e deve ser avaliada caso a caso.</p></article><article><h3>Posso instalar o atualizador do Ponto Offline sobre o Ponto Secullum 4?</h3><p>A fabricante alerta que clientes do Ponto Secullum 4 na modalidade de aquisição podem perder o registro ao tentar essa atualização. Consulte o suporte antes de alterar a instalação.</p></article><article><h3>O Ponto Offline funciona sem qualquer conexão?</h3><p>O nome se refere à modalidade do sistema. Comunicação com equipamentos, suporte remoto e alguns fluxos podem exigir rede ou internet. A arquitetura adequada depende do projeto.</p></article></section>
      <div className="point-salvador-panel"><div><span className="eyebrow">Atendimento local</span><h2>Secullum Ponto Offline em Salvador</h2><p>Conte quais sistemas e relógios de ponto sua empresa utiliza. A Correia Tecnologia e Automações avalia contratação, instalação, eventual migração e suporte antes de apresentar uma proposta.</p><p className="point-address">{contact.address}</p></div><div className="point-actions"><a className="button" href={quote} target="_blank" rel="noopener noreferrer">Solicitar orçamento <span aria-hidden="true">↗</span></a><Link className="text-link" href="/contato">Outras formas de contato <span aria-hidden="true">→</span></Link></div></div>
      <div className="related-links"><Link href="/sistemas/secullum-ponto-web">Conhecer Secullum Ponto Web <b aria-hidden="true">→</b></Link><Link href="/catalogo">Catálogo de relógios de ponto <b aria-hidden="true">→</b></Link><Link href="https://www.secullum.com.br/pt/perguntas-frequentes/1123" target="_blank" rel="noopener noreferrer">Nota oficial sobre o Ponto 4 <b aria-hidden="true">↗</b></Link></div>
    </div></section>
  </main>;
}
