/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        "black-100": "var(--black-100)",
        "black-200": "var(--black-200)",
        "white-100": "var(--white-100)",
        accent: "var(--accent)",
        "text-base": "var(--text-base)",
        "bg-form": "var(--bg-form)",
      },
      boxShadow: {
        card: "0px 10px 30px -10px rgba(2, 6, 23, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
