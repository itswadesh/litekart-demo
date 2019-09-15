require('dotenv').config()
const { API_URL, head } = require("./config");
const PROXY = API_URL

export default {
  mode: 'spa',
  head,
  loading: { color: '#fff' },
  css: [],
  plugins: [
    '~/plugins/filters.js',
    { src: '~/plugins/init.js', ssr: false },
    { src: '~/plugins/lazy.js', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
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
