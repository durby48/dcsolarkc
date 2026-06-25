import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // DC Solar brand palette — soft, sunny: pastel blue + tan + cream
        cream: "#FFF3E6",
        tan: "#ECD9BE",
        "tan-deep": "#D9BF98",
        sky: "#9FD6F2",
        "sky-soft": "#DCEFFB",
        ocean: "#5AA8CF",
        sun: "#FFB066",
        "sun-light": "#FFD3A6",
        // Warm dark brown for text + dark tiles (replaces the old navy)
        ink: "#3D352E",
        "ink-soft": "#6B5D4F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(61, 53, 46, 0.20)",
        "card-hover": "0 20px 50px -12px rgba(61, 53, 46, 0.30)",
        glow: "0 18px 50px -12px rgba(255, 176, 102, 0.5)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
