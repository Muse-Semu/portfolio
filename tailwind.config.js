/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Slate 900
        secondary: "#94a3b8", // Slate 400
        tertiary: "#1e293b", // Slate 800
        "black-100": "#020617", // Slate 950
        "black-200": "#09090b", // Zinc 950
        "white-100": "#f8fafc", // Slate 50
        accent: "#38bdf8", // Sky 400 for highlights
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
