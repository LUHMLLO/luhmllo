import { defineConfig } from "vite";

export default defineConfig({
  build: {
    copyPublicDir: false,
    cssCodeSplit: false,
    emptyOutDir: false,
    target: "esnext",
    minify: true,
    sourcemap: false,
    lib: {
      entry: "./src/lib/packages/webcomponents/index.ts",
      formats: ["es"],
      fileName: "lilys",
    },
    outDir: "./public/assets/vendors",
  },
});
