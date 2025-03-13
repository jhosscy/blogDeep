// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMathjax from 'rehype-mathjax';
import node from '@astrojs/node';
// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [ remarkMath ],
    rehypePlugins: [ rehypeMathjax ],
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0'
  },
});
