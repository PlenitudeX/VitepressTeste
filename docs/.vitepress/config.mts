import { defineConfig } from 'vitepress'
// import './style.css'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Modelo Landpage",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Localização', link: '/' },
      { text: 'Fale conosco no whatsapp', link: '/' }
    ],

  }
})
