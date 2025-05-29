/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["dark:text-white", "text-black"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Replace 'Poppins' with your preferred font
        libre: ['"Libre Baskerville"', 'serif'], 
        dmSerif: ['"DM Serif Text"', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        inter: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': {opacity: 0},
          '10%, 90%': {opacity: 1},
        },
        progress: {
          "0%": { strokeDasharray: "0 62.8" }, // 2πr where r=10
          "100%": { strokeDasharray: "62.8 0" },
        },
      },
      animation: {
        'fade-in-out': 'fadeInOut 3s ease-in-out',
        progress: "progress 5s linear forwards",
      },
    },
  },
  plugins: [],
}

