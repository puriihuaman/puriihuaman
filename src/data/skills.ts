import type { Skill } from "@interfaces/skill";

export const SKILLS: Skill[] = [
	{
		id: crypto.randomUUID(),
		href: "https://docs.oracle.com/javase/8/docs/api/",
		icon: "java",
		text: "Java",
	},
	{
		id: crypto.randomUUID(),
		href: "https://www.postgresql.org/",
		icon: "postgresql",
		text: "PostgreSQL",
	},
	{
		id: crypto.randomUUID(),
		href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
		icon: "javascript",
		text: "Javascript",
	},
	{
		id: crypto.randomUUID(),
		href: "https://www.typescriptlang.org/",
		icon: "typescript",
		text: "Typescript",
	},
	{
		id: crypto.randomUUID(),
		href: "https://angular.io/",
		icon: "angular",
		text: "Angular",
	},
	{
		id: crypto.randomUUID(),
		href: "https://developer.mozilla.org/es/docs/Web/HTML",
		icon: "html-5",
		text: "HTML 5",
	},
	{
		id: crypto.randomUUID(),
		href: "https://developer.mozilla.org/es/docs/Web/CSS",
		icon: "css3",
		text: "CSS3",
	},
	{
		id: crypto.randomUUID(),
		href: "https://tailwindcss.com/",
		icon: "tailwindcss",
		text: "Tailwindcss",
	},
	{
		id: crypto.randomUUID(),
		href: "https://git-scm.com/",
		icon: "git",
		text: "Git",
	},
];
