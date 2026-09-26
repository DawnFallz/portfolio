import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DawnFallz Portfolio',
    short_name: 'DawnFallz',
    description:
      'A full-stack developer passionate about web development, backend systems, and modern technologies.',
    id: '/',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/favicons/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicons/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicons/favicon-1024x1024-maskable.png',
        sizes: '1024x1024',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
