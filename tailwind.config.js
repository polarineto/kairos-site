/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#bfa144",
        olive: "#395144",
        green: {
          900: "#1f3d2d", // Verde escuro institucional
        },
      },
    },
  },
  plugins: [],
};
