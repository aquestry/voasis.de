import { defineConfig } from 'vitepress';
export default defineConfig({
  lang: 'en-US',
  title: 'Voasis - Nebula',
  description: 'Dynamically managed server network.',
  head: [['link', { rel: 'icon', href: 'http://188.34.205.94/logo.png' }]],
  themeConfig: {
    nav: [{ text: 'About', link: '/about' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Anton K.'
    },
    search: {
      provider: 'local'
    },
    logo: 'http://188.34.205.94/logo.png',
    cleanUrls: true
  },
});