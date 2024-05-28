import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 50,
      },
      jpeg: {
        quality: 50,
      },
      jpg: {
        quality: 50,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
