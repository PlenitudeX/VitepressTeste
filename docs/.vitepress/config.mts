import { defineConfig } from 'vitepress'
// import './style.css'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Modelo Landpage",
  description: "Landpage de Teste",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
