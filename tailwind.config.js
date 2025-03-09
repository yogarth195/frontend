/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Replace 'Poppins' with your preferred font
        libre: ['"Libre Baskerville"', 'serif'], 
        dmSerif: ['"DM Serif Text"', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

