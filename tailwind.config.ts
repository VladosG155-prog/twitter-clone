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
      "1.5xl": "20px",
      "2xl": "30px",
      "3xl": "42px",
      "4xl": "84px",
    },
    extend: {
      colors: {
        primary: "#1DA1F2",
      },
    },
  },
  plugins: [],
};
