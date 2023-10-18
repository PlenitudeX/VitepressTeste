import { defineConfig } from 'vitepress'

const titulo = 'Oficina Mecânica'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: titulo || "Modelo LandPage",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Localização', link: '/' },
      { text: 'Fale conosco no whatsapp', link: '/' }
    ],

  }
})


