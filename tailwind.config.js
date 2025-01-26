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
      width: {
        30: "1.875rem",
      },
      height: {
        30: "1.875rem",
        60: "3.75rem",
      },
      borderColor: {
        "light-gray": "#EEEEEE",
      },
      borderRadius: {
        10: "0.625rem",
        15: "0.9375rem",
        20: "1.25rem",
        30: "1.875rem",
      },
      spacing: {
        30: "1.875rem",
        50: "3.125rem",
      },
      colors: {
        primary: "#6C7FD8",
        dark: "#3D4750",
        light: "#777777",
        medium: "#686E7D",
        box: "#F8F8FB",
        accent: "#FEA99A",
        "yellow-light": "#FBF2E5",
        "yellow-medium": "#F4DAB4",
        "pink-light": "#FFE8EE",
        "gray-mist": "#EEEEEE",
        "cat-box-color-1": "#FEF1F1",
        "cat-box-color-2": "#FBF9E4",
        "cat-box-color-3": "#F4F1FE",
        "cat-box-color-4": "#E1FCF2",
      },
      fontSize: {
        13: "0.8125rem",
        14: "0.875rem",
        15: "0.9375rem",
        31: "1.9375rem",
        50: "3.125rem",
        124: "7.75rem",
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
