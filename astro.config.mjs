// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMathjax from 'rehype-mathjax';
// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [ remarkMath ],
    rehypePlugins: [ rehypeMathjax ],
  },
});
