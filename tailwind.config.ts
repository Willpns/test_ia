import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E3A8A",
          900: "#1E3370",
          950: "#0F172A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft:    "#F8FAFC",
          muted:   "#F1F5F9",
          border:  "#E2E8F0",
        },
        ink: {
          DEFAULT: "#1E293B",
          muted:   "#475569",
          subtle:  "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(37, 99, 235, 0.15)",
        "card":      "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover":"0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(37,99,235,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
