import { useState } from "react";
import style from "./Dropdown.module.scss";

import { SKILLS_LIST } from "@data/skills-list";
import type { ISkill } from "@interfaces/ISkill";

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
				<div className={style.content} onClick={handleOpenDropdown}>
					<input
						type="text"
						className={style.search}
						name="tech"
						placeholder="Selecciona una tecnología"
						value={technology}
						readOnly
					/>

					<span
						className={`icon ${isOpen ? style.rotate : style["no-rotate"]}`}
					>
						<svg className="icon__svg icon--sm">
							<use href="/assets/icons/svg-icons.svg#arrow-right"></use>
						</svg>
					</span>

					<ul
						className={`${style.options} ${isOpen ? style.visible : style.invisible}`}
					>
						<li
							className={style.option}
							data-tech="todos"
							onClick={(): void => getTechnology("todos", "todos")}
						>
							Todos
						</li>

						{SKILLS_LIST.map((skill: ISkill) => (
							<li
								key={skill.id}
								className={style.option}
								data-skill={skill.tech}
								onClick={(): void => getTechnology(skill.iconId, skill.tech)}
							>
								{skill.tech}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
