/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost"],
        crimson: ["Crimson"],
      },
      colors: {
        primary: "#ECEEFF",
      },
      backgroundImage: {
        hero: "url(assets/hero/avatar_01.png)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
