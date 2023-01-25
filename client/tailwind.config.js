module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    screens: {
      'sm': '328px',
      // => @media (min-width: 328px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdd': '840px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
     extend: {
      colors: {
        'regal-blue': '#243c5a',
        bgHFto:"#6e6e70",
        gbHFfrom:"#6c6c6e",
      },
      width:{
        100: "100px",
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height:{
        80:"80px",
        150:"150px",
        225:"225px",
        300:"300px",
        340:"340px",
        370:"370px",
        420:"420px",
        510:"510px",
        600:"600px",
        685:"685px",
        800:"800px",
        864:"864px",
        1200:"1200px",
        2000:"3850px",
        "10vh":"10vh",
        "20vh":"20vh",
        "30vh":"30vh",
        "40vh":"40vh",
        "50vh":"50vh",
        "60vh":"60vh",
        "70vh":"70vh",
        "80vh":"80vh",
        "90vh":"90vh",
        "100vh":"100vh",
        "12vh":"12vh",
        "72vh":"72vh",
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }