/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#265E78',
        ghost: {
          light: '#B8B8B8',
          dark: '#d1d1d1',
        },
      },
    },
  },
  plugins: [],
}
