import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  outDir: './dist/app',
  output: 'hybrid',
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
