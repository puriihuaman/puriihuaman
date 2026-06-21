import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

const SITE = "https://puriihuaman.dev";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    icon({iconDir: "public/assets/icons"}),
    sitemap({
      filter: (page) => page === `${SITE}/`,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/**": {
      status: 302,
      destination: "/",
    },
  },
  trailingSlash: "ignore",
  markdown: {
    syntaxHighlight: "prism",
  },
});
