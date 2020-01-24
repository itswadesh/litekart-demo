const REMOTE_API_URL = 'https://api.litekart.in'
// const LOCAL_API_URL = 'https://api.litekart.in'
 const LOCAL_API_URL = 'http://localhost:7000'
const DOMAIN = (process.env.NODE_ENV === 'production') ? REMOTE_API_URL : LOCAL_API_URL
export const TITLE = "Online Shopping for Fashion in India"
export const DESCRIPTION = "Litekart.in offer Online Women Shopping in India. Huge Collection of Jewellery, Handbags, Clutches, Sunglasses, Clothing, Nightwear & More!"
export const KEYWORDS = "Litekart.in,Litekart Accessories,Affordable Luxury,India's Best Women's Online Shopping,Online Jewellery,Litekart, online shopping, online jewelry, jewellery, handbags, clutches, sunglasses, ethnic jewellery, nightwear, lingrie, clothing, bracelets, rings, sets, necklace, pendants, earrings, online jewellery in delhi, online shopping in India, litekart online shopping, litekart jewelry"
export const PROXY = DOMAIN
export const WS_URL = DOMAIN
export const API = DOMAIN
export const HOST = 'https://demo.litekart.in'
export const sharingLogo = 'https://ik.imagekit.io/3wzatecz51w3i/img/litekart-logo.png?tr=h-48'
export const IMAGEKIT = 'https://ik.imagekit.io/3wzatecz51w3i'
export const STRIPE_PUBLISHABLE_KEY = 'pk_test_srKHaSHynBIVLX03r33xLszb'
export const ANALYTICS_TRACKING_ID = 'UA-49421899-9'
export const GOOGLE_MAPS_API_KEY = 'AIzaSyBIJSb00UKCINfeBxnNjRnVRFN80p38-Os'
export const FACEBOOK_APP_ID = '169430647069214'
export const tokenExpiry = 60 * 60 * 24 * 365 // Login validity in seconds
export const typingTimeout = 700 // Used for searching e.g. search.vue
export const loadingTimeout = 500 // Used for showing the loading indicator at each page
export const snackTimer = 5000// Used for the snackbar
export const recordsPerScroll = 40
export const minCartValue = 1500 // Disable checkout button if condition not met
export const clearCart = true // Whether to clear the cart after order is placed. Useful while testing
export const priceRange = "1,138250"
export const cartName = 'Litekart_cart'
export const userRoles = ['user', 'vendor', 'manager', 'admin'] // This should be in ascending order of authority. e.g. In this case guest will not have access to any other role, where as admin will have the role of guest+user+vendor+manager+admin
export const sorts = [
  { name: "Relevance", val: null },
  { name: "Whats New", val: "-createdAt" },
  { name: "Price low to high", val: "price" },
  { name: "Price high to low", val: "-price" }
]
export const currency = {
  symbol: '₹',
  code: 'INR', // Shop currency
  paypal: 'USD',// Paypal currency code *** Please choose from https://developer.paypal.com/docs/classic/api/currency_codes/
  exchange_rate: '1' // Paypal currency code(USD) / Shop currency (INR) ***  exchange_rate should not be 0 else it will generate divided by 0 error
}
export const menuItems = [
  { text: 'Dashboard', url: '/my', icon: 'dashboard', authenticate: 'manager', color: 'black', dashboard: true },
  { text: 'Orders', url: '/my/orders', icon: 'watch_later', authenticate: 'user', color: 'pink', dashboard: true },
  { text: 'My Reviews', url: '/my/reviews', icon: 'stars', authenticate: 'user', color: 'blue', dashboard: true },
  { text: 'Manage Address', url: '/my/address', icon: 'location_on', authenticate: 'user', color: 'dark', dashboard: true },
  { text: 'My Wishlist', url: '/my/wishlist', icon: 'favorite', authenticate: 'user', color: 'green', dashboard: true },
  { text: 'Profile', url: '/account/profile', authenticate: 'user', icon: 'person_pin', color: 'purple' },
  { text: 'Change Password', url: '/account/change-password', authenticate: 'user', icon: 'lock', color: 'brown' }
]
export const manifest = {
  name: 'Litekart',
  short_name: 'Litekart',
  start_url: '/',
  display: 'standalone',
  background_color: '#fff',
  theme_color: '#555'
}
export const popularSearches=[]
export const head = {
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  meta: [
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { 'http-equiv': "Content-type", content: "text/html", charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, user-scalable=no' },
    { name: "robots", content: "noodp" },
    { hid: "author", name: "author", content: "Litekart.in" },
    { name: "og:site_name", properly: "og:site:name", content: "Litekart.in" },
    { name: "twitter:creator", content: "@litekart" },
    { name: "twitter:app:country", content: "pk" },
    { name: "al:ios:app_name", content: "Litekart" },
    { name: "twitter:card", content: "app" },
    { name: "twitter:site", content: "@litekart" },
    { name: "twitter:app:name:iphone", content: "Litekart" },
    { name: "twitter:app:name:ipad", content: "Litekart" },
    { name: "twitter:app:name:googleplay", content: "Litekart" },
    { name: "twitter:app:id:googleplay", content: "com.litekart.android" },
    { name: "application-name", content: "Litekart" },
    { name: "og_type", property: "og:type", content: "website" },
  ],
  noscript: [{ innerHTML: `We're sorry but Litekart.in doesn't work properly without JavaScript enabled. Please enable it to continue.` }],
  htmlAttrs: { lang: 'en' },
  __dangerouslyDisableSanitizers: ['script']
}
