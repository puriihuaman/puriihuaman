import autoprefixer from "autoprefixer";
import postcss from "postcss";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,astro}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Delius", ...defaultTheme.fontFamily.sans],
				heading: [
					"Inter",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
				],
			},
			fontWeight: {
				normal: "400",
				bold: "700",
			},
		},
	},
	plugins: [postcss, autoprefixer],
};
