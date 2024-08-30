/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#d8c183',
      },
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};