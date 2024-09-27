/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      inset: {
        'left': '45%',
      },
      colors: {
        customBlue: '#0094E7',
        grey : '#4A4A4A',
        grey1 : '#4E596B',
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
      },
    },
  },
  plugins: [],
}
