import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Voasis - Nebula',
  description: 'Dynamically managed server network.',

  themeConfig: {
    nav: [{ text: 'About', link: '/about' }],
  },
});
