import type { MetadataRoute } from 'next';
import { siteUrl } from '../lib/site';

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV === 'preview';
  return {
    rules: isPreview ? { userAgent: '*', disallow: '/' } : { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
    ...(isPreview ? {} : { host: siteUrl }),
  };
}
