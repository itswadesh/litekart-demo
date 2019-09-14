require('dotenv').config()
const { API_URL, head } = require("./config");
const PROXY = API_URL

export default {
  mode: 'universal',
  head,
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  plugins: [
    '~/plugins/filters.js',
    { src: '~/plugins/init.js', ssr: false },
    { src: '~/plugins/lazy.js', ssr: false }
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/font-awesome',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'cookie-universal-nuxt'
  ],
  axios: {
    baseURL: PROXY + '/api/',
    browserBaseURL: '/api/',
    proxy: true,
    credentials: true
  },
  proxy: {
    '/api': PROXY,
    '/auth': PROXY,
    '/images': PROXY,
  }
}
