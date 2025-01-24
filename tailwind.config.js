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
        center: true,
        screens: {
          sm: "480px",
          md: "768px",
          lg: "976px",
          xl: "1320px",
        },
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
        14: "0.875rem",
        15: "0.9375rem",
        31: "1.9375rem",
      },
      boxShadow: {
        submenu: "2px 2px 15px 5px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("menu-child-1", "&>li");
      addVariant("menu-child-hover", "&>li a:hover");
    },
  ],
};
