// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#1d3b1d",
        gold: "#bfa144",
        "gold-light": "#e9d8a6",
        "gold-dark": "#8c6d1f",
      },
    },
  },
  plugins: [],
}
