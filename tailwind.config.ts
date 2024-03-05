/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      robotoSerif: ["Roboto-serif"],
    },
    fontSize: {
      sm: "0.8125rem",
      base: "1rem",
      xl: "1.125rem",
      "1.5xl": "1.25rem",
      "1.75xl": "1.50rem",
      "2xl": "1.875rem",
      "2.2xl": "2rem",
      "3xl": "2.625rem",
      "4xl": "5.25rem",
    },
    extend: {
      colors: {
        primary: "#1DA1F2",
      },
    },
  },
  plugins: [],
};
