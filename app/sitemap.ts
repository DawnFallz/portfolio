import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL;

  if (!baseUrl) {
    throw new Error('SITE_URL environment variable is required.');
  }

  return [
    {
      url: baseUrl,
    },
  ];
}
