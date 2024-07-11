import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/static'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  compressHTML: true,
  output: 'static',
  prefetch: {
    prefetchAll: true,
  },
  scopedStyleStrategy: 'where',
  integrations: [
    mdx({
      shikiConfig: { theme: 'vitesse-dark' },
    }),
  ],
})
