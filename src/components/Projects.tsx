import { useState } from "react";

import type { IRepository } from "@interfaces/IRepository";
import { useFetching } from "src/hooks/useFetching";
import { AlertMessage } from "./AlertMessage";
import { Dropdown } from "./Dropdown";
import { Loading } from "./Loading";
import { ProjectCard } from "./ProjectCard";

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

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
				{repositories.map((repository: IRepository) => (
					<ProjectCard key={repository.id} repository={repository} />
				))}
			</div>
		</>
	);
}
