/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "650px",
      md: "850px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
    fontSize: {
      sm: ["13px", "16px"],
      base: ["16px", "26px"],
      lg: ["28px", "35px"],
      xl: ["44px", "28px"],
    },
    fontFamily: {
      kumbh: "'Kumbh Sans', sans serif",
    },
  },
  plugins: [],
};
