require('dotenv').config()
const axios = require('axios')
const { API_URL, head, HOST } = require("./config");
const PROXY = process.env.API_URL || API_URL

export default {
  mode: 'universal',
  head,
  loading: '~/components/ui/Loading.vue',
  css: [],
  plugins: [
    '~/plugins/filters.js',
    '~/plugins/axios',
    { src: '~/plugins/init.js', mode: 'client' },
    { src: '~/plugins/lazy.js', mode: 'client' },
    { src: '~/plugins/carousel.js', mode: 'client' },
    { src: '~/plugins/vue-slider-component', mode: 'client' } // Price slider
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/sitemap',
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
  },
  generate: {
    dir: 'dist',
    fallback: true
  }
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: HOST,
  //   cacheTime: 1000 * 60 * 15,
  //   gzip: true,
  //   exclude: ['/my/', '/my/**'],
  //   routes() {
  //     return axios.all([
  //       axios.get(PROXY + '/api/products?limit=100'),
  //       axios.get(PROXY + '/api/categories?limit=300')
  //     ])
  //       .then(axios.spread((product, category) => [
  //         // ...product.data.data.map(product => `/${product.slug}?id=${product._id}`),
  //         ...category.data.data.map(category => `/${category.slug}/`)
  //       ]))
  //   }
  // }
}
