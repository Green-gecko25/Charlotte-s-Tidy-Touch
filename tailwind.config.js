/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '90': '65rem',
        '95': '70rem',
        '55': '76rem',
        '60': '110rem',
        '54': '37rem',
    
      },
      borderRadius: {
        'extra': '35px',
        'md': '10px'
      },
      translate: {
        '100': '30rem',
        '22': '1.5rem'
      },
      borderWidth: {
        '1': '1px'
      },
      spacing: {
        '33': '8.5rem'
      },
      letterSpacing: {
        'widee': '0.3rem'
      },
      height: {
        '120': '120vh',
        '110': '29rem',
        '100': '38rem',
        '99': '33rem',
        '97': '32rem',
      },
      // eslint-disable-next-line no-dupe-keys
      spacing: {
        '85': '22rem',
      },
      rotate: {
        '35': '-10deg'      
      },
      fontSize: {
        'xxs': '8px'
      },
      height: {
        '100': '60rem',
        '55': '38rem'
      }
    },
  },
  plugins: [],
}