/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-light': '#7945FF',
        'purple-dark': '#5C2DD5',
        'pink-accent': '#FD6687',
        'yellow-gold': '#FFCE67'
      },
      borderWidth: {
        '10': '10px'
      }
    },
  },
  plugins: [],
}

