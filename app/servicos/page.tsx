import type { Metadata } from 'next';
import Link from 'next/link';
import { SubpageHero } from '../../components/subpage-hero';
import { SolutionCard } from '../../components/cards';
import { VideoShowcase } from '../../components/video-showcase';
import { solutionShowcaseServices, solutionPath } from '../../lib/site';

export const metadata: Metadata = { title: 'Soluções de Acesso, Ponto e Automação em Salvador', description: 'Conheça as soluções da Correia Tecnologia em controle de acesso facial, relógios de ponto, automação, venda, locação e instalação em Salvador.', alternates: { canonical: '/servicos' }, openGraph: { url: '/servicos', title: 'Soluções em segurança e automação | Correia Tecnologia', description: 'Controle de acesso, relógios de ponto, automação, venda, locação e instalação em Salvador.', images: [{ url: '/images/solutions/acesso-facial.webp', alt: 'Terminal de reconhecimento facial em entrada corporativa' }] } };

export default function Servicos() { return <main id="conteudo">
  <SubpageHero eyebrow="Nossas soluções" title={<>Soluções completas em segurança e <em>automação.</em></>} text="Tecnologia para controlar acessos, organizar rotinas de jornada e automatizar entradas em empresas, condomínios e estabelecimentos." image="/images/acesso-escritorio.webp" imageAlt="Pessoa utilizando controle facial junto a uma catraca em ambiente corporativo" secondary={{ label: 'Falar com um especialista', href: '/contato' }} benefits={['Segurança para o ambiente', 'Gestão de acessos', 'Automação sob consulta']} />
  <section className="solutions-showcase" aria-labelledby="solutions-title">
    <div className="container">
      <div className="solutions-showcase-head">
        <div className="solutions-showcase-title">
          <span className="eyebrow">Nossas soluções</span>
          <h2 id="solutions-title">Tecnologia e segurança<br/><em>para cada necessidade.</em></h2>
        </div>
        <div className="solutions-showcase-intro">
          <p>Oferecemos soluções completas em segurança eletrônica, controle de acesso e automação, unindo tecnologia, praticidade e mais tranquilidade para empresas, condomínios e residências.</p>
          <Link className="button" href="#servicos-lista">Conhecer todas as soluções <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="solutions-feature-grid" id="servicos-lista">
        {solutionShowcaseServices.map((service) => <SolutionCard key={service.slug} item={service} />)}
      </div>
      <VideoShowcase
        id="evo-facial"
        eyebrow="EVO FACIAL · DEMONSTRAÇÃO"
        title="Tecnologia e Segurança em Reconhecimento Facial"
        description="Veja demonstrações de recursos de segurança e proteção contra tentativas de identificação por fotografias e vídeos."
        src="/videos/evo-facial.mp4"
        poster="/videos/evo-facial-poster.png"
        duration="13 s"
        highlights={['Reconhecimento facial para controle de acesso', 'Demonstração de recursos de segurança', 'Avaliação e instalação conforme o ambiente']}
        primaryLabel="Conhecer controle de acesso facial"
        primaryHref={solutionPath('controle-de-acesso-facial')}
        quoteMessage="Olá! Gostaria de solicitar um orçamento para uma solução EVO Facial."
      />
      <p className="solutions-image-note">Fotografias ilustrativas geradas por IA. Não representam instalações reais nem identificam modelos específicos à venda.</p>
    </div>
  </section>
  <section className="section"><div className="container"><div className="bottom-cta"><h2>Quer conversar sobre uma solução?</h2><p>Envie sua necessidade e consulte os próximos passos com a equipe Correia.</p><Link className="button" href="/contato">Fale com um especialista <span>↗</span></Link></div></div></section>
</main>; }
