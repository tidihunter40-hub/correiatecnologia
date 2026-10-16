import type { MetadataRoute } from 'next';
import { segments, services, siteUrl, solutionPath } from '../lib/site';
import { catalogProducts, productPath } from '../lib/catalog';
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/sobre', '/servicos', '/catalogo', '/segmentos', '/projetos', '/blog', '/contato', '/perguntas-frequentes', '/privacidade', '/sistemas/secullum-ponto-web', '/sistemas/secullum-ponto-offline'];
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.7 })),
    ...services.map((service) => ({ url: `${siteUrl}${solutionPath(service.slug)}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...segments.map((segment) => ({ url: `${siteUrl}/segmentos/${segment.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...catalogProducts.map((product) => ({ url: `${siteUrl}${productPath(product)}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}
