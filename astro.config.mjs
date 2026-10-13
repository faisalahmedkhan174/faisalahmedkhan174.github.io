// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://faisalahmedkhan174.github.io',
  vite: {
    server: {
      open: false,
    },
  },
  // Enable TypeScript strict mode
  // You can extend as needed.
});
