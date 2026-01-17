import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Configure Vite with Tailwind CSS plugin
  vite: {
    plugins: [tailwindcss()],
  },
  title: 'Seashore Lab',
  description: 'TypeScript AI Agent Development Framework',
  lang: 'en-US',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700;800&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    logo: '/avatar.png',

    nav: [
      {
        text: 'Products',
        items: [
          {
            text: 'seashore',
            link: 'https://github.com/seashore-lab/seashore',
          }
        ]
      },
      {
        text: 'Docs',
        link: 'https://docs.seashore.ai'
      },
      { text: 'Resources', link: '/resources' },
      { text: 'About', link: '/about' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/seashore-lab' }
    ],

    footer: {
      message: '© 2025 Seashore Lab. All rights reserved.',
      copyright: '',
    },

    search: {
      provider: 'local',
    },
  },

  // Disable default theme appearance - we handle it ourselves
  appearance: 'dark',
})
