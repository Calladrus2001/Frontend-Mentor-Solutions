/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '6xl': '8rem',
        '7xl': '10rem'
      },
      text:{
        '6xl': '8rem'
      }
    },
  },
  plugins: [],
}

