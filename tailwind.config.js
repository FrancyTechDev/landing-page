/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#05070d",
          800: "#0a0f1c",
          700: "#0f172a"
        },
        brand: {
          900: "#0b1b3a",
          800: "#0f2450",
          700: "#123066",
          600: "#1b4aa1",
          500: "#2b68d9",
          400: "#3aa6ff"
        },
        cyan: {
          300: "#6ee7ff",
          400: "#3bd9ff",
          500: "#16c6f0"
        },
        accent: {
          400: "#8d7bff",
          500: "#6c5cff"
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        body: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 217, 255, 0.18)",
        glass: "0 20px 60px rgba(8, 15, 35, 0.55)"
      }
    }
  },
  plugins: []
};