export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  app: {
    baseURL: '/stik-test/',
  },

  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-viewport'],

  viewport: {
    breakpoints: {
      mobile: 768,
      desktop: 769
    }
  }

})