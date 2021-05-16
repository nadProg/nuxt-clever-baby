export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    title: 'nuxt-clever-baby',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Школа "Clever Baby" - обучение английскому языку для детей от 2 до 7 лет',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'английский язык, дети, дошкольный возраст, clever baby',
      },
      { hid: 'author', name: 'author', content: 'Евгений Скробов' },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: 'site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: 'safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-plyr', mode: 'client' },
    { src: '~/plugins/is-webp-support', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-leaflet'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    base: process.argv[3] === '--deploy' ? '/nuxt-clever-baby/' : '/',
  },
}
