// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

export default defineConfig({
  compressHTML: true,
  scopedStyleStrategy: "where",
  integrations: [
    mdx({
      shikiConfig: { theme: "vitesse-dark" },
    }),
    svelte(),
  ],
});
