import type { ISkill } from "@interfaces/ISkill";

export const SKILLS_LIST: ISkill[] = [
	{
		id: crypto.randomUUID(),
		href: "https://developer.mozilla.org/es/docs/Web/HTML",
		iconId: "html5",
		label: "Documentación HTML 5",
		tech: "Html 5",
	},
	{
		id: crypto.randomUUID(),
		href: "https://developer.mozilla.org/es/docs/Web/CSS",
		iconId: "css3",
		label: "Documentación CSS 3",
		tech: "css 3",
	},
	{
		id: crypto.randomUUID(),
		href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
		iconId: "javascript",
		label: "Documentación JavaScript",
		tech: "JavaScript",
	},
	{
		id: crypto.randomUUID(),
		href: "https://www.typescriptlang.org/",
		iconId: "typescript",
		label: "Documentación TypeScript",
		tech: "TypeScript",
	},
	{
		id: crypto.randomUUID(),
		href: "https://react.dev/",
		iconId: "reactjs",
		label: "Documentación React JS",
		tech: "react js",
	},
	{
		id: crypto.randomUUID(),
		href: "https://nodejs.org/es",
		iconId: "nodejs",
		label: "Documentación node js",
		tech: "node js",
	},
	{
		id: crypto.randomUUID(),
		href: "https://expressjs.com/",
		iconId: "expressjs",
		label: "Documentación express js",
		tech: "express",
	},
	{
		id: crypto.randomUUID(),
		href: "https://dev.mysql.com/",
		iconId: "mysql",
		label: "Documentación mysql",
		tech: "MySQL",
	},
	{
		id: crypto.randomUUID(),
		href: "https://git-scm.com/",
		iconId: "git",
		label: "Documentación git",
		tech: "git",
	},
	/* {
		id: crypto.randomUUID(),
		href: "https://sass-lang.com/",
		iconId: "sass",
		label: "Documentación sass",
		tech: "sass",
	}, */
	/* {
		id: crypto.randomUUID(),
		href: "https://angular.io/",
		iconId: "angular",
		label: "Documentación angular",
		tech: "angular",
	}, */
	{
		id: crypto.randomUUID(),
		href: "https://tailwindcss.com/",
		iconId: "tailwindcss",
		label: "Documentación tailwind css",
		tech: "tailwind css",
	},
];
