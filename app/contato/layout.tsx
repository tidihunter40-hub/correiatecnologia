import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato e localização em Salvador',
  description: 'Entre em contato com a Correia Tecnologia em Salvador. Consulte nossa localização, trace sua rota no Google Maps ou solicite um orçamento.',
  alternates: { canonical: '/contato' },
  openGraph: { url: '/contato', title: 'Contato e localização | Correia Tecnologia', description: 'Fale com a Correia Tecnologia, abra nossa localização no Google Maps ou solicite um orçamento em Salvador.' },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
