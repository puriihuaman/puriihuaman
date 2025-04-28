import type {Skill} from "./skill.ts";
import type {TechnologyTag} from "./technology-tag.ts";

export interface Technology {
  type: TechnologyTag;
  skills: Skill[];
}
