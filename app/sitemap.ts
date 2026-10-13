import type { MetadataRoute } from 'next';
import { segments, services, siteUrl } from '../lib/site';
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/sobre', '/servicos', '/catalogo', '/segmentos', '/projetos', '/blog', '/contato', '/privacidade'];
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.7 })),
    ...services.map((service) => ({ url: `${siteUrl}/servicos/${service.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...segments.map((segment) => ({ url: `${siteUrl}/segmentos/${segment.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
