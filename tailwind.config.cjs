/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpas: `'Overpass', sans-serif`,
        outfit: `'Outfit', sans-serif`,
        mont: `'Montserrat', sans-serif`,
        fraun: `'Fraunces', serif`,
      },
      colors: {
        "eth-main": `hsl(217, 54%, 11%)`,
        "eth-card": `hsl(216, 50%, 16%)`,
        "order-blue": `hsl(225, 100%, 94%)`,
      },
    },
  },
  plugins: [],
};
