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
        tanker : ["Tanker", "sens-serif"],
        chillax : ["Chillax", "sens-serif"],
        pally : ["Pally", "sens-serif"],
        kalam : ["Kalam", "sens-serif"],
        qsand : ["QuickSand", "sens-serif"],
        archivo : ["Archivo", "sens-serif"],
        pilcrow : ["Pilcrow", "sens-serif"],
        hind : ["Hind", "sens-serif"]

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}