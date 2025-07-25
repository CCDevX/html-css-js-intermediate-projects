import { defineConfig } from "vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

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
  //A décommenter avant de build
  // plugins: [
  //   viteStaticCopy({
  //     targets: [
  //       {
  //         src: "pages/**/*", // <-- attention, relatif à root (src/)
  //         dest: "pages",
  //       },
  //       {
  //         src: "partials/**/*",
  //         dest: "partials",
  //       },
  //     ],
  //   }),
  // ],
  server: {
    open: true,
  },
});
