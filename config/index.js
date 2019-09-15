export const API_URL = 'http://localhost:7000' // The port where API runs
// export const API_URL = 'https://api.litekart.in' // The port where API runs
export const tokenExpiry = 60 * 60 * 15 // Login validity (15 minutes)
export const typingTimeout = 700 // After this delay the search api will be fired
export const loadingTimeout = 500 // Loading indicator will be shown after this delay
export const userRoles = ['user', 'vendor', 'manager', 'admin'] // This should be in ascending order of authority. e.g. In this case user will not have access to any other role, where as admin will have the role of user+vendor+manager+admin
export const currency = { symbol: '₹', code: 'INR' }

export const head = {
    titleTemplate: '%s - Litekart',
    htmlAttrs: { lang: 'en' },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ]
}
