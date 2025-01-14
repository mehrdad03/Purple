/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html"],

  theme: {
    extend: {
      colors: {
        primary: "#6c7fd8",
        dark: "#3d4750",
        medium: "#686e7d",
        light: "#777777",
        box: "#f8f8fb",
        accent: "#fea99a",
      },
      fontSize: {
        13: "0.8125rem",
        15: "0.9375rem",
        40: "2.5rem",
        50: "3.125rem",
      },
      fontFamily:{
        quicksand:"quicksand",
        poppins:["Poppins, sans-serif"],

      }
    },
  },
  plugins: [],
};
