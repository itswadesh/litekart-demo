module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './shared/components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          '100': '#9cdbf5',
          '200': 'red',
          '300': 'blue',
          '400': 'green',
          '500': 'yellow',
          '600': '#9cdbf5',
          '700': '#9cdbf1',
          '800': '#9cdbf2',
          '900': '#9cdbf1',
        }
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}