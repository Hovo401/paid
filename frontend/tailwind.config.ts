import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_c_0: {
          light: "#F4F7FE",
          dark: "#00030B",
        },
        bg_c_1: {
          light: "#fff",
          dark: "#0E111B",
        },
        bg_c_2: {
          light: "#fff",
          dark: "#364153",
        },
        bg_c_3: {
          light: "#F4F7FE",
          dark: "#364153",
        },
        text_c_0: {
          light: "#11047A",
          dark: "#FFFFFF",
        },
        main_color: {
          light: "#4318FF",
          dark: "#4318FF",
        },
        menu_color: {
          light: "#E5E8F0",
          dark: "#252D47",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode with class-based toggling
};

export default config;
