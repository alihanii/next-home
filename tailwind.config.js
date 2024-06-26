/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        blue1: "#49DEFF",
        blue2: "#4FFFDF",
        black1: "#303030",
        black2: "#4E4E4E",
        white1: "#DEDEDE",
        white2: "#F4F4F4",
        white3: "#F9F9F9",
      },
      colors: {
        blue1: "#49DEFF",
        blue2: "#4FFFDF",
        black1: "#303030",
        black2: "#4E4E4E",
        white1: "#DEDEDE",
        white2: "#F4F4F4",
        white3: "#F9F9F9",
      },
      width: { w347: "347px", w183: "183px", w1400: "1400px" },
      height: { h60: "60px" },
      screens: {
        "2xl": "1400px",
        lg: "1054px",

        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
