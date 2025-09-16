/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#1b4820",
        "olive-dark": "#143819",
        gold: "#bfa144",
        "gold-light": "#f4e2b5",
        "gold-dark": "#8a6c1e",
      },
    },
  },
  plugins: [],
};
