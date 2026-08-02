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
        lake: {
          dark: "#080c10",
          card: "#0e1420",
          blue: "#1e6fa8",
          light: "#3b9edd",
          glow: "#5ec4ff",
        },
        cream: "#e8e2d4",
        muted: "#8a9ab0",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Space Grotesk", "Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(94, 196, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(94, 196, 255, 0.6), 0 0 80px rgba(30, 111, 168, 0.3)" },
        },
      },
      backgroundImage: {
        "lake-gradient": "linear-gradient(135deg, #080c10 0%, #0d1a28 50%, #080c10 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
