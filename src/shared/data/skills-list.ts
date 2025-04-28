import type {Technology} from "@models/technology.ts";
import {backendSkills} from "@data/backend-skills.ts";
import {frontendSkills} from "@data/frontend-skills.ts";
import {toolSkills} from "@data/tool-skills.ts";

export const skillsList: Technology[] = [
  {type: "backend", skills: backendSkills},
  {type: "frontend", skills: frontendSkills},
  {type: "tool", skills: toolSkills},
];
