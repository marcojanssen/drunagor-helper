/** @type {import('tailwindcss').Config} */
/* eslint-env node */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#36D399",
        base: {
          100: "#141c22",
          200: "#131A20",
          300: "#11181D",
          400: "#090d0f",
        },
        neutral: "#202C33",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
