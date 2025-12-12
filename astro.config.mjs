import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [icon({ iconDir: "public/assets/icons" })],
  vite: {
    plugins: [tailwindcss()]
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
