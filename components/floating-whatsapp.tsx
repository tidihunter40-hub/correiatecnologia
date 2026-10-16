import { whatsappLink } from '../lib/site';

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappLink('Olá! Gostaria de falar com a equipe da Correia Tecnologia.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Correia Tecnologia pelo WhatsApp (abre em nova aba)"
      title="Fale conosco pelo WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 3.5A12.2 12.2 0 0 0 5.5 22l-1.4 5 5.2-1.3A12.3 12.3 0 1 0 16 3.5Z" />
        <path d="M12 10.5c-.5 0-1 .4-1.2.9-.4 1-.2 2.4.9 4.1 1.4 2.2 3.2 3.8 5.5 4.7 1.5.6 2.8.5 3.6-.2.4-.4.7-1.6.4-2l-2.6-1.3c-.3-.2-.6-.2-.8.1l-1.1 1.2c-1.4-.5-3.3-2.2-3.8-3.5l.8-.9c.2-.2.3-.5.1-.8l-1.2-2.1c-.1-.2-.3-.2-.6-.2Z" />
      </svg>
    </a>
  );
}
