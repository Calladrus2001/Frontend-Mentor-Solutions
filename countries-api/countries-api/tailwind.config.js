/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'primary-dark': '#2a3642',
        'secondary': '#fafafa',
        'secondary-dark': '#202d36'
      }
    },
  },
  plugins: [],
}

