import type {Skill} from "@models/skill.ts";

export const backendSkills: Skill[] = [
  {
    id: crypto.randomUUID(),
    href: "https://docs.oracle.com/javase/8/docs/api/",
    icon: "java",
    title: "Java",
  },
  {
    id: crypto.randomUUID(),
    href: "https://spring.io/",
    icon: "spring",
    title: "Spring",
  },
  {
    id: crypto.randomUUID(),
    href: "https://spring.io/projects/spring-boot",
    icon: "spring-boot",
    title: "Spring Boot",
  },
  {
    id: crypto.randomUUID(),
    href: "https://www.postgresql.org/",
    icon: "postgresql",
    title: "PostgreSQL",
  },
];