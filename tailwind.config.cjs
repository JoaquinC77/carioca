/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#7D6E83',
        'secondary-bg': '#829460',
        'menu-100': '#f8ede3',
        'menu-200': '#dfd3c3'
      },
      backgroundImage: {
        'wave-mobile': "url('/public/diferent')"
      }
    }
  },
  plugins: []
}
