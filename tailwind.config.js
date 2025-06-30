/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/*.html"],
  safelist: [
    "opacity-50",
    "text-royalPurple",
    "text-skyBlue",
    "text-sunsetOrange",
    "text-aqua",
    "text-hotPink",
    "text-deepBlue",
    "text-slateGray",
    "text-mintGreen",
    "text-fireRed",
    "text-accent",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      quicksand: ["Quicksand"],
      vazir: ['Vazirmatn', 'sans-serif'],

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
        70: "4.375rem",
        100: "6.25rem",
        300: "18.75rem",
      },
      height: {
        30: "1.875rem",
        60: "3.75rem",
        70: "4.375rem",
        100: "6.25rem",
        600: "40rem",
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
        300: "18.75rem",
      },
      backgroundColor: {
        dark: "#3D4750",
      },
      colors: {
        primary: "#6C7FD8",
        dark: "#3D4750",
        light: "#777777",
        medium: "#686E7D",
        box: "#F8F8FB",
        accent: "#FEA99A",
        "close-icon": "#FF0000",
        "yellow-light": "#FBF2E5",
        "yellow-medium": "#F4DAB4",
        "pink-light": "#FFE8EE",
        "gray-mist": "#EEEEEE",
        "cat-box-color-1": "#FEF1F1",
        "cat-box-color-2": "#FBF9E4",
        "cat-box-color-3": "#F4F1FE",
        "cat-box-color-4": "#E1FCF2",
        royalPurple: "#8118D5", // بنفش سلطنتی
        skyBlue: "#5F6AF5", // آبی آسمانی
        sunsetOrange: "#F5885F", // نارنجی غروب
        aqua: "#32DBE2", // آبی آکوآ
        deepBlue: "#3F51B5", // آبی عمیق
        fireRed: "#F44336", // قرمز آتشین
        hotPink: "#E91E63", // صورتی پررنگ
        slateGray: "#607D8B", // خاکستری تخته‌ای
        mintGreen: "#5EB595", // سبز نعنایی
        DarkModeBodyColor: "#22252F",
        DarkModeBoxColor: "#2D313E",
        DarkModeTextColor: "#9BA5B5",
        DarkModeBorderColor: "#494E5D",
        DarkModeHeroColor: "#1D2029",
      },
      fontSize: {
        13: "0.8125rem",
        14: "0.875rem",
        15: "0.9375rem",
        25: "1.5625rem",
        31: "1.9375rem",
        40: "2.5rem",
        42: "2.625rem",
        50: "3.125rem",
        124: "7.75rem",
      },
      boxShadow: {
        submenu: "2px 2px 15px 5px rgba(0, 0, 0, 0.07)",
      },
      blur: {
        xs: "2px",
      },
      rotate: {
        15: "15deg",
        25: "25deg",
        30: "30deg",
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
