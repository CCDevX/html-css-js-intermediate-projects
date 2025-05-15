import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "src"), // s'assurer que le chemin absolu est correct
  resolve: {
    alias: {
      "@partials": path.resolve(__dirname, "src/partials"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // chemin absolu recommandé
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.html"),
    },
  },
  server: {
    open: true,
  },
});
