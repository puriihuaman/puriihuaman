import { useState } from 'react';

import { SKILLS_LIST } from '@data/skills-list';
import type { ISkill } from '@interfaces/ISkill';

export function Dropdown({ getTech }: { getTech: (tech: string) => void }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [technology, setTechnology] = useState<string>('todos');

	const handleOpenDropdown = (): void => setIsOpen(!isOpen);

	function getTechnology(iconId: string, tech: string): void {
		setTechnology(tech);
		getTech(iconId);
	}

	return (
		<>
			<div className="flex justify-center mr-auto w-full text-current fill-current">
				<div
					className="relative flex items-center gap-2 w-full h-auto pr-2 rounded-md cursor-pointer shadow-md border border-slate-800 select-none"
					onClick={handleOpenDropdown}
				>
					<input
						type="text"
						className="relative block w-full py-3 px-4 outline-none capitalize font-sans rounded-md text-slate-50 bg-transparent cursor-pointer border-none placeholder:text-sm placeholder:text-slate-500"
						name="tech"
						placeholder="Selecciona una tecnología"
						value={technology}
						readOnly
					/>

					<span
						className={`icon flex justify-center items-center origin-center transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'}`}
					>
						<svg className="icon__svg icon--sm block text-current fill-current w-6 h-6">
							<use href="/assets/icons/svg-icons.svg#arrow-right"></use>
						</svg>
					</span>

					<ul
						className={`absolute top-full left-0 z-30 w-full max-h-52 text-slate-50 p-2 bg-slate-800 overflow-x-hidden overflow-y-auto border border-slate-800 rounded-md capitalize mt-2 transition-transform duration-300 ${isOpen ? 'visible opacity-100 translate-y-[5%]' : 'invisible opacity-0 translate-y-0'}`}
					>
						<li
							className="p-2 border-b border-slate-800 transition-all duration-300 hover:text-blue-500 bg-inherit hover:bg-gradient-to-r from-slate-900 to-slate-950"
							data-tech="todos"
							onClick={(): void => getTechnology('todos', 'todos')}
						>
							Todos
						</li>

						{SKILLS_LIST.map((skill: ISkill) => (
							<li
								key={skill.id}
								className="p-2 border-b border-slate-800 transition-all duration-300 hover:text-blue-500 bg-inherit hover:bg-gradient-to-r from-slate-900 to-slate-950"
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
