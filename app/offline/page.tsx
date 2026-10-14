import Image from 'next/image';
import type { Metadata } from 'next';
import { OfflineRetry } from '../../components/offline-retry';

export const metadata: Metadata = { title: 'Sem conexão', robots: { index: false, follow: false } };

export default function OfflinePage() {
  return <main className="offline-page" id="conteudo">
    <section className="offline-card" aria-labelledby="offline-title">
      <Image src="/icons/icon-192.png" alt="" width={82} height={82} priority />
      <span className="offline-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8.8a15.6 15.6 0 0 1 20 0M5.2 12a10.6 10.6 0 0 1 7.3-2.7M8.6 15.3a5.5 5.5 0 0 1 5.1-.5M12 20h.01M3 3l18 18" /></svg></span>
      <p className="eyebrow">Correia Tecnologia</p>
      <h1 id="offline-title">Você está sem conexão.</h1>
      <p>Verifique sua internet e tente novamente. Algumas páginas públicas podem continuar disponíveis neste dispositivo.</p>
      <OfflineRetry />
    </section>
  </main>;
}
