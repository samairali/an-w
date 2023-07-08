// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      'nuxt-icons',
  ],
  plugins: [
    // Other plugins...
    { src: '~/plugins/aos.client.js', mode: 'client' },
  ],
  ssr: false
})
