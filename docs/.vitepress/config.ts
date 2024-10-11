import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Voasis - Nebula',
  description: 'Dynamically managed server network.',

  themeConfig: {
    nav: [{ text: 'About', link: '/about' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Anton K.'
    },
    search: {
      provider: 'local'
    },
    logo: 'https://i.imgur.com/FNq0RYO.png'
  },
});
