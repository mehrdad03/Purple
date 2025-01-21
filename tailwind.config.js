/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html"],

  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      quicksand: ["Quicksand"],
    },
    extend: {
      container: {
        center:true,
        "2xl": "1320px",
      },
      borderColor: {
        "light-gray": "#EEEEEE",
      },
      borderRadius: {
        10: "0.625rem",
        20: "1.25rem",
      },
      spacing: {
        50: "3.125rem",
      },
      colors: {
        primary: "#6C7FD8",
        dark: "#3D4750",
        light: "#777777",
        medium: "#686E7D",
        box: "#F8F8FB",
        accent: "#FEA99A",
      },
      fontSize: {
        13: "0.8125rem",
        15: "0.9375rem",
        31: "1.9375rem",
      },
    },
  },
  plugins: [],
};
