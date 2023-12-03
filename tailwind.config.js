/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*{html|js}", "./pages/*{html,js}"],
  theme: {
    screens: {
      'resources-responsive': '1105px',
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
