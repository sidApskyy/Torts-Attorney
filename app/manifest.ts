import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Torts Attorney',
    short_name: 'Torts Attorney',
    description: 'Campaign strategy, intake operations, qualification workflows and transparent reporting for plaintiff law firms.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F8F6',
    theme_color: '#C6A24A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
