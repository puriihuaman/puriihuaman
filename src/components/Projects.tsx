import { useState } from "react";

import type { IRepository } from "@interfaces/IRepository";
import { useFetching } from "src/hooks/useFetching";
import { AlertMessage } from "./AlertMessage";
import { Dropdown } from "./Dropdown";
import { Loading } from "./Loading";
import { ProjectCard } from "./ProjectCard";

import style from "./projects.module.scss";

export function Projects() {
	const [selectedTechnology, setSelectedTechnology] = useState<string>("todos");
	const { repositories, isLoading, error } = useFetching({
		selectedTechnology,
	});

	const getTechnology = (tech: string): void => setSelectedTechnology(tech);

	return (
		<>
			<Dropdown getTech={getTechnology} />

			{isLoading && <Loading />}

			{error && <AlertMessage error={error} />}

			<div className={style.projects}>
				{repositories.map((repository: IRepository) => (
					<ProjectCard key={repository.id} repository={repository} />
				))}
			</div>
		</>
	);
}
