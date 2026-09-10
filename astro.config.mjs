import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gruetleo.fr",
  integrations: [sitemap()],
  redirects: {
    "/project/1": "/project/ap1-portfolio",
    "/project/2": "/project/ap2-send-it",
    "/project/3": "/project/ap3-engagement-leucemie",
    "/project/4": "/project/ap4-elan",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
