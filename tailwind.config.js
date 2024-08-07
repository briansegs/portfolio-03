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
        about: "url('/about_bg.png')",
        projects: "url('/bg_06.png')",
        grid1: "url('/frame_01.png')",
        grid3: "url('/frame_03.png')",
      },
      screens: {
        wide: "1440px",
      },
      keyframes: {
        slide: {
          from: {
            transform: "translateX(-106.5%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
        load: {
          from: { transform: "rotate(0turn)" },
          to: { transform: "rotate(1turn)" },
        },
      },
      animation: {
        slide: "slide 35s linear infinite",
        loading: "load .75s linear infinite",
      },
    },
  },
  plugins: [],
};
