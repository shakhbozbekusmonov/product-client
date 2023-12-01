/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
<<<<<<< Updated upstream
  content: [],
=======
  content: ["./*.{html,js}", "./pages/*.html"],
>>>>>>> Stashed changes
  theme: {
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
