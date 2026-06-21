import type {Menu} from "../models/menu.ts";

export const MENU_LIST: Menu[] = [
  {id: crypto.randomUUID(), name: "Inicio", href: "/", pathname: "/"},
  {
    id: crypto.randomUUID(),
    name: "Proyectos",
    href: "/project",
    pathname: "/project",
  },
];
