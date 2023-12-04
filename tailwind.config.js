/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}", "./pages/*.html"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      mb: "338px",  
      mb: "338px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        element: "#02897A",
        blue: "#4D8DFF",
        purple: "#740A76",
        primary: "#22343D",
        orange: "#F03E3D",
      },
      
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
