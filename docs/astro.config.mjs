// @ts-check
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import svelte from "@astrojs/svelte"

import vercel from "@astrojs/vercel"

export default defineConfig({
  compressHTML: true,
  scopedStyleStrategy: "where",

  integrations: [
    mdx({
      shikiConfig: { theme: "vitesse-dark" },
    }),
    svelte(),
  ],

  adapter: vercel(),

  // vite: {
  //   resolve: {
  //     alias: {
  //       "@assets/*": "src/assets/*",
  //       "@components/*": "src/components/*",
  //       "@layouts/*": "src/layouts/*"
  //     }
  //   },
  // }
})