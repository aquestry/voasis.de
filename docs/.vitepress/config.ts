import { defineConfig } from 'vitepress';
export default defineConfig({
  lang: 'en-US',
  title: 'Voasis - Nebula',
  themeConfig: {
    nav: [{ text: 'About', link: '/about' }, { text: 'Nebula', link: '/nebula' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © ' + new Date().getFullYear() + ' Anton K.'
    },
    search: {
      provider: 'local'
    },
    logo: 'favicon.ico',
    cleanUrls: true
  },
});