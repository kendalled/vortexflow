/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'vortex': '#11a391'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ]
}
