/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        impact: ["Impact", "sans-serif"],
        tungsten: ["Tungsten", "sans-serif"]
      },
      boxShadow: {
        default:
          "0 0.8rem 0.8rem rgba(0, 0, 0, 0.1), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1), 0 0 0 0.1rem rgba(0, 0, 0, 0.1), inset 0 0 0 0.1rem rgba(255, 255, 255, 0.03), inset 0 0.1rem 0 rgba(255, 255, 255, 0.03)",
      },
    },
  },
  plugins: [],
};
