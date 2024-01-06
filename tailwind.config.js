const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      orange: {
        ...colors.orange,
        500: "#fe4a57",
        450: "#FE7C73",
        400: "#FFABA5",
      },
    },
    extend: {},
  },
  plugins: [],
};
