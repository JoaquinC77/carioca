/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#7D6E83',
        'secondary-bg': "#829460",
      },
      backgroundImage: {
        'wave-mobile': "url('/public/diferent')"
      }
    },
  },
  plugins: [],
}