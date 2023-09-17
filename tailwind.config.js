/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#495E57',
      'primary-200': '#EDEFEE',
      secondary: '#F4CE14',
      tertiary: '#EE9972',
      'tertiary-200': '#FBDABB',
      white: '#FFFFFF',
      black: '#333333',
    },
    extend: {},
  },
  plugins: [require('tailwindcss/nesting')],
};
