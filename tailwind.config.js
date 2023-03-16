/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        neutral:{
          primaryAccent:"#7F56D9",
          darkGray:"#101828",
          primaryErrorAccent:"rgb(220, 56, 56)"
        }
      }
    }
  },
  plugins: [],
}
