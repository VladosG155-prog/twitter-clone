/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      robotoSerif: ["Roboto-serif", "sans-serif"],
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
      screens: {
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
        "2xl": { max: "1536px" },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        minusWidth: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },

        mount: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "100%" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        run: {
          "0%": { left: "0" },

          "100%": { left: "100%" },
        },
        skeleton: {
          "0% ": { opacity: ".2", transform: "translateY(6px) scale(0.98)" },
          "85%, 100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
          },
        },
      },
      animation: {
        fadeOut: "fadeOut 1s ease-in-out 1",
        fadeIn: "fadeIn .4s ease-in-out 1",
        minusWidth: "minusWidth 2s linear 1",
        mount: "mount .1s linear 1",
        wave: "wave 2s linear infinite",
        run: "run 1s linear infinite",
        skeleton: "skeleton 1s ease-in-out forwards infinite alternate",
      },
      colors: {
        primary: "#1DA1F2",
        darkBg: "#15202B",
      },
    },
  },
  plugins: [],
};
