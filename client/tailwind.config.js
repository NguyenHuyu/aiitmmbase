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
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }