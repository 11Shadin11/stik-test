export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',

  app: {
    baseURL: '/stik-test/',
    buildAssetsDir: '/_nuxt/',
    cdnURL: 'https://11Shadin11.github.io/stik-test/'
  },

  vite: {
    base: '/stik-test/',
    build: {
      assetsDir: '_nuxt'
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false
    },
    preset: 'static'
  },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-viewport'],

  viewport: {
    breakpoints: {
      mobile: 768,
      desktop: 769
    }
  },

  experimental: {
    payloadExtraction: true
  },
  typescript: {
    strict: true
  }
})