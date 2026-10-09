// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://xn--e1aggkdfhr2a.xn--p1ai',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});