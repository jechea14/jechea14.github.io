/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js}"],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {     
      gridTemplateColumns: {
      // autofill wrap grid
      'wrap': 'repeat(auto-fill, minmax(80px, 1fr))'
      }},
  },
  darkMode: 'class',
  plugins: [],
}
