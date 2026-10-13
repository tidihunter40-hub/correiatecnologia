import type { Metadata } from 'next';
import './globals.css';
import { contact, siteUrl } from '../lib/site';
import { Header, Footer } from '../components/site-chrome';
import { PWAProvider } from '../components/pwa-provider';
import { BottomNavigation } from '../components/bottom-navigation';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icons/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  title: { default: 'Correia Tecnologia | Controle de acesso em Salvador', template: '%s | Correia Tecnologia' },
  description: 'Controle de acesso facial, relógios de ponto e automação em Salvador. Conheça as soluções da Correia Tecnologia e solicite um orçamento.',
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'Correia Tecnologia e Automações', title: 'Correia Tecnologia | Tecnologia para proteger o que importa', description: 'Controle de acesso, reconhecimento facial, relógios de ponto e automação em Salvador e Bahia.', images: [{ url: '/images/reference/hero-acesso.webp', width: 1536, height: 1024, alt: 'Pessoa usando terminal de reconhecimento facial em uma entrada corporativa' }] },
  twitter: { card: 'summary_large_image', title: 'Correia Tecnologia | Controle de acesso em Salvador', description: 'Controle de acesso facial, relógios de ponto e automação em Salvador.', images: ['/images/reference/hero-acesso.webp'] },
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Correia' },
  robots: process.env.VERCEL_ENV === 'preview' ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
  themeColor: '#061A35',
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Correia Tecnologia e Automações',
      alternateName: 'Correia Tecnologia',
      url: siteUrl,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Correia Tecnologia e Automações',
      alternateName: 'Correia Tecnologia',
      url: siteUrl,
      logo: `${siteUrl}/images/correia-tecnologia-logo.png`,
      telephone: contact.phoneHref,
      address: {
        '@type': 'PostalAddress',
        streetAddress: contact.streetAddress,
        postalCode: contact.postalCode,
        addressLocality: contact.city,
        addressRegion: contact.region,
        addressCountry: 'BR',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Correia Tecnologia e Automações',
      alternateName: 'Correia Tecnologia',
      url: siteUrl,
      image: `${siteUrl}/images/correia-tecnologia-logo.png`,
      telephone: contact.phoneHref,
      address: {
        '@type': 'PostalAddress',
        streetAddress: contact.streetAddress,
        postalCode: contact.postalCode,
        addressLocality: contact.city,
        addressRegion: contact.region,
        addressCountry: 'BR',
      },
      areaServed: [{ '@type': 'City', name: 'Salvador' }, { '@type': 'AdministrativeArea', name: 'Bahia' }],
      description: 'Soluções em controle de acesso, reconhecimento facial, relógios de ponto e automação.',
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><PWAProvider><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header />{children}<Footer /><BottomNavigation /></PWAProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} /></body></html>;
}
