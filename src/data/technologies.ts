import type { Technology } from "@interfaces/ITechnology";
import type { Skill } from "@interfaces/skill";

const backendSkills: Skill[] = [
	{
		id: crypto.randomUUID(),
		href: "https://docs.oracle.com/javase/8/docs/api/",
		icon: "java",
		text: "Java",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
	{
		id: crypto.randomUUID(),
		href: "https://spring.io/projects/spring-boot",
		icon: "spring",
		text: "Spring Boot",
		description:
			"Proficient in developing robust backend systems with Spring Boot. Experience includes building REST APIs, implementing layered architecture, and securing endpoints with JWT tokens and Spring Security. Currently expanding knowledge in microservices.",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
	{
		id: crypto.randomUUID(),
		href: "https://www.mysql.com/",
		icon: "mysql",
		text: "MySQL",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
	{
		id: crypto.randomUUID(),
		href: "https://nodejs.org/es/",
		icon: "nodejs",
		text: "Node.js",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
	{
		id: crypto.randomUUID(),
		href: "https://expressjs.com/es/",
		icon: "express",
		text: "Express",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
];

const frontendSkills: Skill[] = [
	{
		id: crypto.randomUUID(),
		href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
		icon: "javascript",
		text: "Javascript",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
	{
		id: crypto.randomUUID(),
		href: "https://www.typescriptlang.org/",
		icon: "typescript",
		text: "Typescript",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
	{
		id: crypto.randomUUID(),
		href: "https://es.react.dev/learn",
		icon: "react",
		text: "React",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
	{
		id: crypto.randomUUID(),
		href: "https://developer.mozilla.org/es/docs/Web/HTML",
		icon: "html-5",
		text: "HTML 5",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
	{
		id: crypto.randomUUID(),
		href: "https://developer.mozilla.org/es/docs/Web/CSS",
		icon: "css3",
		text: "CSS3",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
	{
		id: crypto.randomUUID(),
		href: "https://tailwindcss.com/",
		icon: "tailwindcss",
		text: "Tailwindcss",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
];

const toolSkills: Skill[] = [
	{
		id: crypto.randomUUID(),
		href: "https://git-scm.com/",
		icon: "git",
		text: "Git",
		description: "",
		tasks: [
			"Desarrollo de aplicaciones web",
			"Desarrollo de aplicaciones de escritorio",
		],
	},
];

export const technologies: Technology[] = [
	{ type: "backend", skills: backendSkills },
	{ type: "frontend", skills: frontendSkills },
	{ type: "tool", skills: toolSkills },
];
