/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0 -4px 0 0',
      },
      borderColor: {
        'light-black': '#343434'
      },
      backgroundColor: {
        'white-chip': '#F4F4F4'
      }
    },
  },
  plugins: [],
}