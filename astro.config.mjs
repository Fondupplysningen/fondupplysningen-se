// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fondupplysningen.se',
  // Statisk output (default). Byggs till ./dist och serveras via
  // Cloudflare Workers static assets — se wrangler.jsonc.
});
