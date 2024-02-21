import type { ILink } from "@interfaces/ILink";

export const LINKS_LIST: ILink[] = [
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
