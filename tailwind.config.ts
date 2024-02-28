/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      robotoSerif: ["Roboto-serif", "sans-serif"],
    },
    fontSize: {
      sm: "13px",
      base: "16px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "42px",
      "4xl": "84px",
    },
    extend: {},
  },
  plugins: [],
};
