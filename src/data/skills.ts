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
		href: "https://spring.io/projects/spring-boot",
		icon: "spring",
		text: "Spring Boot",
	},
	{
		id: crypto.randomUUID(),
		href: "https://www.mysql.com/",
		icon: "mysql",
		text: "MySQL",
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
		href: "https://es.react.dev/learn",
		icon: "react",
		text: "React",
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
