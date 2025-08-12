/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crema: "#FFF8E6",
        espresso: "#5A3E2B",
        oliva: "#7A8F35",
        ladrillo: "#C0392B",
        carbon: "#333333"
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['Inter', "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
}
