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
    href: "https://www.mysql.com/",
    icon: "mysql",
    title: "MySQL",
  },
  {
    id: crypto.randomUUID(),
    href: "https://www.php.net/docs.php",
    icon: "php",
    title: "PHP",
  },
  {
    id: crypto.randomUUID(),
    href: "https://laravel.com/",
    icon: "laravel",
    title: "Laravel",
  }
];