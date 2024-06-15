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
        primary: ["Mulish"],
        secondary: ["Crimson"],
      },
      colors: {
        primary: "#f87171",
        secondary: "#eff6ff",
      },
      backgroundImage: {
        hero: "url('/bg_01.png')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
