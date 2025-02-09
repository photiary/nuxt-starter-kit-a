// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
})
