import type {Skill} from "@models/skill.ts";

export const frontendSkills: Skill[] = [
  {
    id: crypto.randomUUID(),
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    icon: "javascript",
    title: "Javascript",
  },
  {
    id: crypto.randomUUID(),
    href: "https://www.typescriptlang.org/",
    icon: "typescript",
    title: "Typescript",
  },
  {
    id: crypto.randomUUID(),
    href: "https://angular.dev/",
    icon: "angular",
    title: "Angular",
  },
  {
    id: crypto.randomUUID(),
    href: "https://developer.mozilla.org/es/docs/Web/HTML",
    icon: "html-5",
    title: "HTML 5",
  },
  {
    id: crypto.randomUUID(),
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
    icon: "css3",
    title: "CSS3",
  },
  {
    id: crypto.randomUUID(),
    href: "https://tailwindcss.com/",
    icon: "tailwindcss",
    title: "Tailwind CSS",
  },
];