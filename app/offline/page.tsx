import Image from 'next/image';
import type { Metadata } from 'next';
import { OfflineRetry } from '../../components/offline-retry';

export const metadata: Metadata = { title: 'Sem conexão', robots: { index: false, follow: false } };

export default function OfflinePage() {
  return <main className="offline-page" id="conteudo">
    <section className="offline-card" aria-labelledby="offline-title">
      <Image src="/icons/icon-192.png" alt="" width={82} height={82} priority />
      <span className="offline-symbol" aria-hidden="true">⌁</span>
      <p className="eyebrow">Correia Tecnologia</p>
      <h1 id="offline-title">Você está sem conexão.</h1>
      <p>Verifique sua internet e tente novamente. Algumas páginas públicas podem continuar disponíveis neste dispositivo.</p>
      <OfflineRetry />
    </section>
  </main>;
}
