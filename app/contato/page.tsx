'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { contact, mapDestination, mapSearchUrl, mapsDirectionsUrl, whatsappLink } from '../../lib/site';

const fullAddress = contact.address;
const embeddedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapDestination)}&output=embed`;

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length < 3) return digits ? `(${digits}` : '';
  if (digits.length < 8) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function Contato() {
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState('');
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(fullAddress);
      } else {
        const field = document.createElement('textarea');
        field.value = fullAddress;
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const successful = document.execCommand('copy');
        field.remove();
        if (!successful) throw new Error('A cópia não foi autorizada pelo navegador.');
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      setCopied(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Olá! Conheci a Correia Tecnologia pelo site e gostaria de solicitar um orçamento.',
      '',
      `Nome: ${data.get('name')}`,
      `Empresa: ${data.get('company') || 'Não informado'}`,
      `WhatsApp: ${data.get('phone')}`,
      `E-mail: ${data.get('email')}`,
      `Interesse: ${data.get('solution')}`,
      `Mensagem: ${data.get('message')}`,
    ].join('\n');
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  function updatePhone(event: ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(event.target.value));
  }

  return <main id="conteudo" className="contact-page">
    <section className="contact-hero">
      <div className="container contact-hero-grid">
        <div className="contact-hero-copy">
          <span className="contact-kicker">FALE COM A CORREIA TECNOLOGIA</span>
          <h1>Estamos prontos para encontrar a <em>solução ideal.</em></h1>
          <p>Nossa equipe está preparada para ajudar você a encontrar as melhores soluções em controle de acesso, reconhecimento facial e automação.</p>
          <div className="contact-hero-actions">
            <a className="button" href={whatsappLink('Olá! Gostaria de falar com a Correia Tecnologia.')} target="_blank" rel="noreferrer">Falar pelo WhatsApp <span>↗</span></a>
            <a className="button button-outline-light" href={mapsDirectionsUrl} target="_blank" rel="noreferrer">Como chegar <span>⌖</span></a>
          </div>
        </div>
        <div className="contact-hero-photo">
          <Image src="/images/contato-acesso.png" alt="Pessoa utilizando um terminal de reconhecimento facial em uma entrada corporativa; imagem ilustrativa" fill priority sizes="(max-width: 760px) 100vw, 48vw" />
          <span>Imagem ilustrativa de uma solução de acesso</span>
        </div>
      </div>
    </section>

    <section className="section contact-channels" aria-labelledby="contact-channels-title">
      <div className="container">
        <div className="section-head contact-section-head"><div><span className="eyebrow">Atendimento Correia Tecnologia</span><h2 id="contact-channels-title">Como podemos ajudar você?</h2></div><p>Escolha a maneira mais conveniente para conversar com nossa equipe.</p></div>
        <div className="contact-channel-grid">
          <article className="contact-channel-card"><span className="contact-channel-icon">◉</span><h3>Atendimento pelo WhatsApp</h3><p>Converse diretamente com nossa equipe comercial.</p><a href={whatsappLink('Olá! Gostaria de conversar com a equipe da Correia Tecnologia.')} target="_blank" rel="noreferrer">Iniciar conversa <b>↗</b></a></article>
          <article className="contact-channel-card"><span className="contact-channel-icon">☎</span><h3>Ligue para nossa equipe</h3><p>Fale com a Correia Tecnologia pelo telefone comercial.</p><a href={`tel:${contact.phoneHref}`}>{contact.phone} <b>↗</b></a></article>
          <article className="contact-channel-card"><span className="contact-channel-icon">⌖</span><h3>Venha nos visitar</h3><p>{contact.address}</p><a href={mapSearchUrl} target="_blank" rel="noreferrer">Ver no Google Maps <b>↗</b></a></article>
          <article className="contact-channel-card"><span className="contact-channel-icon">✉</span><h3>Peça um orçamento</h3><p>Conte um pouco sobre sua necessidade e receba o retorno pelo WhatsApp.</p><a href="#orcamento">Preencher formulário <b>↓</b></a></article>
        </div>
      </div>
    </section>

    <section className="contact-location-section" aria-labelledby="location-title">
      <div className="container">
        <div className="section-head contact-section-head"><div><span className="eyebrow">Estamos em Salvador, Bahia</span><h2 id="location-title">Onde estamos localizados?</h2></div><p>Consulte o endereço e escolha como abrir a localização ou iniciar sua rota.</p></div>
        <div className="contact-location-grid">
          <div className="contact-location-card">
            <span className="contact-location-mark">C</span>
            <span className="eyebrow">Correia Tecnologia e Automações</span>
            <h3>Atendimento em Salvador</h3>
            <address>{contact.address}</address>
            <a className="contact-location-phone" href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            <div className="contact-location-actions">
              <a className="button" href={mapsDirectionsUrl} target="_blank" rel="noreferrer">Como chegar <span>↗</span></a>
              <a className="button button-secondary" href={mapSearchUrl} target="_blank" rel="noreferrer">Ver no Google Maps <span>↗</span></a>
              <button className="contact-copy-button" type="button" onClick={copyAddress}>Copiar endereço</button>
            </div>
            <p className="contact-copy-status" role="status" aria-live="polite">{copied ? 'Endereço copiado!' : ''}</p>
          </div>
          <div className="contact-map-frame">
            <iframe title="Mapa do endereço comercial informado pela Correia Tecnologia em Salvador" src={embeddedMapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <p>Se o mapa não carregar, <a href={mapSearchUrl} target="_blank" rel="noreferrer">abra a localização no Google Maps</a>.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section contact-quote-section" id="orcamento" aria-labelledby="quote-title">
      <div className="container contact-quote-grid">
        <div className="contact-quote-copy"><span className="eyebrow">Solicite um orçamento</span><h2 id="quote-title">Vamos conversar sobre seu <em>projeto?</em></h2><p>Preencha as informações para que nossa equipe entenda sua necessidade. Os dados ficam no seu navegador e só serão compartilhados se você confirmar o envio pelo WhatsApp.</p><div className="contact-privacy-note"><span>✓</span><p>Usaremos seus dados para responder a esta solicitação, conforme a <Link href="/privacidade">Política de Privacidade</Link>.</p></div></div>
        <form className="contact-form contact-form-modern" onSubmit={submit}>
          <div className="contact-form-heading"><span className="eyebrow">Retorno pelo WhatsApp</span><h3>Conte para nós o que precisa</h3><p>Os campos marcados com * são obrigatórios.</p></div>
          <div className="contact-form-fields">
            <label>Nome completo *<input name="name" autoComplete="name" required placeholder="Como podemos chamar você?" /></label>
            <label>Empresa <span>(opcional)</span><input name="company" autoComplete="organization" placeholder="Nome da empresa" /></label>
            <label>WhatsApp *<input name="phone" type="tel" autoComplete="tel" inputMode="tel" value={phone} onChange={updatePhone} minLength={14} maxLength={16} required placeholder="(71) 99999-9999" /></label>
            <label>E-mail *<input name="email" type="email" autoComplete="email" required placeholder="voce@empresa.com" /></label>
            <label>Tipo de solução *<select name="solution" defaultValue="" required><option value="" disabled>Selecione uma opção</option><option>Controle de Acesso Facial</option><option>Relógios de Ponto</option><option>Automação de Entradas</option><option>Venda de Equipamentos</option><option>Locação de Equipamentos</option><option>Instalação e Suporte</option><option>Outros</option></select></label>
            <label className="contact-message-field">Mensagem *<textarea name="message" rows={4} required placeholder="Conte um pouco sobre o seu espaço e sua necessidade." /></label>
          </div>
          <label className="consent contact-consent"><input type="checkbox" required /><span>Autorizo o uso dos dados informados para retorno sobre esta solicitação, conforme a <Link href="/privacidade">Política de Privacidade</Link>.</span></label>
          <button type="submit" className="button">Preparar mensagem no WhatsApp <span>↗</span></button>
          {sent && <p className="form-success" role="status">Seu WhatsApp será aberto com a mensagem preparada. Revise os dados e envie por lá.</p>}
          <small className="form-note">O site não armazena nem envia o formulário. A mensagem é aberta no WhatsApp para você revisar e confirmar o envio.</small>
        </form>
      </div>
    </section>
  </main>;
}
