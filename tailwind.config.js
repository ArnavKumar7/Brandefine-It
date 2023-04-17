/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "768px" },
      xtra: { min: "769px", max: "912px" },
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
