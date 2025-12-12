export interface IProject {
  id: string;
  link: string;
  image: string;
  title: string;
  description: string;
  date: string;
  skills: string[];
  demo: string;
  code: string;
}

export const projects: IProject[] = [
  {
    id: crypto.randomUUID(),
    link: "https://github.com/karlosvas/coworking-space",
    image: "/assets/images/webp/coworking-space.webp",
    title: "Coworking Space",
    date: "2025",
    description:
      "Coworking Space es una aplicación de reservas diseñada para gestionar las salas de trabajo en un espacio de Coworking. La API permitirá a los usuarios realizar y consultar reservas en tiempo real, facilitando la administración de los espacios disponibles. Este proyecto fue desarrollado en una hackathon organizada por programadores de España, Bytes Colaborativos.",
    skills: ["Java", "Spring Boot", "Spring Security", "PostgreSQL"],
    demo: "",
    code: "https://github.com/karlosvas/coworking-space",
  },
  {
    id: crypto.randomUUID(),
    link: "https://santas-sight.vercel.app/dashboard",
    image: "/assets/images/webp/1.webp",
    title: "Santa's Sight",
    date: "2024",
    description:
      "Santa's Sight is a modern web application designed to help manage Christmas operations efficiently. It provides a suite of tools for tracking elves, reindeer, routes, and more, all within a festive and user-friendly interface.",
    skills: [
      "React",
      "TailwindCSS",
      "Shadcn/UI",
      "TypeScript",
      "Express js",
      "Prisma ORM",
      "PostgreSQL",
    ],
    demo: "https://santas-sight.vercel.app/dashboard",
    code: "https://github.com/TEAM3-ED8",
  },
];
