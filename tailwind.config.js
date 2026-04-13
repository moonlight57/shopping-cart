/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        "bg-primary": "#31220b",
        "bg-secondary": "#382e1b",
        "text-primary": "#f3e7d4",
        "text-muted": "#a59b8b",
        "accent-gold": "#edbf68",
        "accent-orange": "#f4b115",
        "card-bg": "#5f4e33",
        "product-gold": "#fbd392",
        "modal-bg": "#d3b17b",
        "checkout-dark": "#271e07",
        "dark-brown": "#201e1a",
      },
      animation: {
        "fade-top": "fade-slide-in-from-top 0.3s ease-in-out",
        "fade-right": "fade-slide-in-from-right 0.3s ease-in-out",
      },
      keyframes: {
        "fade-slide-in-from-top": {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-slide-in-from-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
