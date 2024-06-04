import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  build: {
    format: 'file',
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  outDir: './dist/app',
  output: 'static',
  prefetch: {
    prefetchAll: true
  },
  scopedStyleStrategy: 'where',
  integrations: [svelte()]
});