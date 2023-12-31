/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.5)'
      },

      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}