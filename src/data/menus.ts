import type { Menu } from "@interfaces/menu";

export const MENU_LIST: Menu[] = [
	{ id: crypto.randomUUID(), name: "Inicio", href: "/", pathname: "/" },
	{
		id: crypto.randomUUID(),
		name: "Proyectos",
		href: "/project",
		pathname: "/project",
	},
	{
		id: crypto.randomUUID(),
		name: "Servicios",
		href: "/service",
		pathname: "/service",
	},
];
