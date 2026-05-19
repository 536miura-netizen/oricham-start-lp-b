import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          red: "#D71920",
          deep: "#A90F16",
          soft: "#FFF2F2",
          ink: "#171717",
          gold: "#B4862C",
        },
      },
      boxShadow: {
        soft: "0 8px 24px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
