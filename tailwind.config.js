/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#f7ab3a',
        'hero': '#f6f7fb'
      },
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'playfair': ["Playfair Display", "serif"]
      },
    },
  },
  plugins: [],
};