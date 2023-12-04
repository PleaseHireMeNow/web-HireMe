/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: { 
      colors: {
      'sunglow': {
           '50': '#fefbe8',
          '100': '#fff8c2',
          '200': '#ffee87',
          '300': '#ffdd43',
          '400': '#ffcd2a',
          '500': '#efae03',
          '600': '#ce8500',
          '700': '#a45e04',
          '800': '#88490b',
          '900': '#733c10',
          '950': '#431e05',
      },  
      'Indigo': {
           '50': '#eef2ff',
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '300': '#a5b4fc',
          '400': '#818cf8',
           '50': '#6366f1',
          '600': '#4f46e5',
          '700': '#4338ca',
          '800': '#3730a3',
          '900': '#312e81',
          '950': '#1e1b4b',
      },
    },  
  },
},
  plugins: [],
}

