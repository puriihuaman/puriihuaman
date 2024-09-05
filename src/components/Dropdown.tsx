import { useState } from "react";

import { SKILLS_LIST } from "@data/skills-list";
import type { ISkill } from "@interfaces/ISkill";

import style from "./dropdown.module.scss";

export function Dropdown({ getTech }: { getTech: (tech: string) => void }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [technology, setTechnology] = useState<string>("todos");

	const handleOpenDropdown = (): void => setIsOpen(!isOpen);

	function getTechnology(iconId: string, tech: string): void {
		setTechnology(tech);
		getTech(iconId);
	}

	return (
		<>
			<div className={style.dropdown}>
				<button
					type="button"
					className={style["dropdown-button"]}
					onClick={handleOpenDropdown}
				>
					<span className={style["dropdown-text"]}>{technology}</span>
					<span className={style["dropdown-icon"]}>
						{!isOpen ? "➕" : "➖"}
					</span>
				</button>

				<ul
					className={`
						${style["dropdown-option"]} ${isOpen ? style["dropdown-open"] : ""}`}
				>
					<li
						className={style["dropdown-item"]}
						data-tech="todos"
						onClick={(): void => getTechnology("todos", "todos")}
					>
						Todos
					</li>

					{SKILLS_LIST.map((skill: ISkill) => (
						<li
							key={skill.id}
							className={style["dropdown-item"]}
							data-skill={skill.tech}
							onClick={(): void => getTechnology(skill.iconId, skill.tech)}
						>
							{skill.tech}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
