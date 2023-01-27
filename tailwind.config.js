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
        },
        neutral: "#202C33",
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#36D399",
          secondary: "#0284c7",
          accent: "#AEBAC1",
          neutral: "#202C33",
          "base-100": "#141c22",
          "base-content": "#DCE0E3",
          info: "#164e63",
          success: "#16a34a",
          warning: "#fb923c",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
