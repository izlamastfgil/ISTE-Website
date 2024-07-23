/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '30': '7.5rem'
      },
      screens: {
        'xsm' : '512px',
        '2xsm' : '384px',
        '3xsm' : '256px'
      }
    },
  },
  plugins: [],
}