/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, scss,ts}",
  ],
  theme: {
    fontFamily: {
      Nunito: ['Nunito', 'sans-serif'],
      Norms: ['TT Norms Pro', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    boxShadow: {
      'movieCard': '0px 2px 6px rgba(0, 0, 0, 0.16)',
    },
    screens: {
      'threeColumns': '517px',
      'fourColumns': '689px',
      'fiveColumns': '912px',
      'sixColumns': '1094px',
      'sevenColumns': '1250px',
      'tablet': '640px',
      'tablet-Var2': '768px',
      'tablet-Var2': 'px',
      'laptop': '1024px',
      'desktop': '1280px',
    },

    extend: {},
  },
  plugins: [],
}
