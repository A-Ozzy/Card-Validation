
module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}"
   ],
   theme: {
      screens: {
         'lg': {'max': '1100px'},
         'md': {'max': '870px'},
       },
      extend: {
         fontFamily: {
           body: ['Titillium']
         },
         backgroundImage: {
            'main-bg': "url('images/bg-main-desktop.png')",
            'main-bg-mobile': "url('images/bg-main-mobile.png')",
            'cart-face': "url('images/bg-card-front.png')",
            'cart-back': "url('images/bg-card-back.png')",
          }
     },
   },
   plugins: [],
 }
