import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionProperty: {
        'grid-span': 'grid-column',
        'width': 'width',
      },
      colors: {
        backgroundDark: "hsl(var(--background-dark))",
        backgroundLight: "hsl(var(--background-light))",
        text: "hsl(var(--text))",
        accent: "hsl(var(--accent))",
      },
      keyframes: {
        "slide-up":{
          from: {transform: "scaleY(0)"},
          to:{transform: "scaleY(1)"},
        },
        "slide-down":{
          from: {transform: "scaleY(1)"},
          to:{transform: "scaleY(0)"},
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-up": "slide-up 0.3s forwards",
        "slide-down": "slide-down 0.3s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
