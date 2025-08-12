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
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both'
      }
    },
  },
  plugins: [],
}
