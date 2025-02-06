import type { Skill } from "./skill";
import type { TechnologyType } from "./technology-type";

export interface Technology {
	type: TechnologyType;
	skills: Skill[];
}
