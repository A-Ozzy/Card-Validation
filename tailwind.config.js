const plugin = require('tailwindcss/plugin');

module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}"
   ],
   theme: {
      screens: {
         'lg': {'max': '1100px'},
         'md': {'max': '870px'},
         'sm': {'max': '690px'},
         'extra-sm': {'max': '550px'},
         '400': {'max': '400px'},
         '320': {'max': '320px'},
       },
      extend: {
         fontFamily: {
           body: ['Titillium']
         },
         backgroundImage: {
            'main-bg': "url('images/bg-main-desktop.png')",
            'main-bg-mobile': "url('images/bg-main-mobile.png')",
            'card-face': "url('images/bg-card-front.png')",
            'card-back': "url('images/bg-card-back.png')",
            'logo-big': "url('images/card-logo.svg')",
            'logo-small': "url('images/icon-complete.svg')",
          }
     },
   },
   plugins: [],
 }
