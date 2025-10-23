/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
      colors: {
        primary: {
          light: '#3E7591',
          dark: '#265E78',
          form: '#64A1C0',
        },
        ghost: {
          light: '#B8B8B8',
        },
      },
      fontSize: {
        xxl: ['1.375rem', '1.75rem'],
      },
    },
    plugins: [],
  },
}
