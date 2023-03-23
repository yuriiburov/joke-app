/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary-dark': '#202123',
      'primary-white': '#f7f7f8',
      'primary-green': '#75A99B',
      'primary-yellow': '#F7DF37',
    },
  },
  plugins: [],
};
