import type {Skill} from "@models/skill.ts";

export const toolSkills: Skill[] = [
  {
    id: crypto.randomUUID(),
    href: "https://git-scm.com/",
    icon: "git",
    title: "Git",
  },
  {
    id: crypto.randomUUID(),
    href: "https://github.com/",
    icon: "github",
    title: "GitHub",
  },
  {
    id: crypto.randomUUID(),
    href: "https://www.postman.com/",
    icon: "postman",
    title: "Postman",
  },
];