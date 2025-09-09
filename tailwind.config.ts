import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Menlo", "Monaco", "monospace"],
      },
      colors: {
        famla: {
          navy: "#0C2340",
          greenDark: "#002D0F",
          green: "#007774",
          greenHover: "#005C5A",
          red: "#E63946",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #002D0F, #007774)",
        "cta-gradient": "linear-gradient(to right, #002D0F, #007774)",
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "var(--font-inter)",
            lineHeight: "1.6",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
