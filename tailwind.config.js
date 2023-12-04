/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#ffab40', // powerpoint orange
        secondary: '#85d5e6', // powerpoint light blue
        accent: '#001633', // powerpoint dark blue
        sunglow: {
          '50': '#fefbe8',
          '100': '#fff8c2',
          '200': '#ffee87',
          '300': '#ffdd43', // mobile background
          '400': '#ffcd2a', // mobile tab
          '500': '#efae03',
          '600': '#ce8500',
          '700': '#a45e04',
          '800': '#88490b',
          '900': '#733c10',
          '950': '#431e05',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ], // Flowbite for tailwind package
};
