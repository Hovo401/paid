import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";
// https://vite.dev/config/
export default defineConfig({
  base: "/paidemail",
  server: {
    open: "/paidemail",
  },
  plugins: [tailwindcss(), react()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
