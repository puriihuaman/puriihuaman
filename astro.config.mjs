import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [icon({ iconDir: "public/assets/icons" })],
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
