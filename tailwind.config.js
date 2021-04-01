module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f4f4d0',
        secondary: {
          light: 'rgb(53, 53, 53)',
          default: 'rgb(34, 34, 34)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
