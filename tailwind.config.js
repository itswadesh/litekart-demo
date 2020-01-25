/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

module.exports = {
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        cpink: {
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
      spacing: {
        '72': '18rem',
        '108': '27rem',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}