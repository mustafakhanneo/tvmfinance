/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kola : ["Kola", "sens-serif"],
        tanker : ["Tanker", "sens-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}