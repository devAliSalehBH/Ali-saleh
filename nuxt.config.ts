// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css", "vuetify/lib/styles/main.css"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  devtools: { enabled: true },
  ssr: false,
});
