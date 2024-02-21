// import useRepository fro@services/repositoryory";
import type { IErrorType } from "@interfaces/IErrorType";
import type { IRepository } from "@interfaces/IRepository";
import { getRepositories } from "@services/get-repositories";
import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import { ProjectCard } from "./ProjectCard";

import style from "./Projects.module.scss";
import { Loading } from "./Loading";
import { AlertMessage } from "./AlertMessage";

export function Projects() {
	const [repositories, setRepositories] = useState<IRepository[]>([]);
	const [errors, setErrors] = useState<IErrorType>({
		name: "",
		message: "",
		status: 403,
		statusText: "",
	});
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [selectedTechnology, setSelectedTechnology] = useState<string>("todos");

	const getTechnology = (tech: string): void => {
		setSelectedTechnology(tech);
	};

	const getRepos = async (tech: string) => {
		const { data, error, isLoading } = await getRepositories(tech);

		setRepositories(data);
		setErrors(error);
		setIsLoading(isLoading);
	};

	useEffect((): void => {
		getRepos(selectedTechnology);
	}, [selectedTechnology]);

	return (
		<>
			<Dropdown getTech={getTechnology} />

			{isLoading && <Loading />}

			<div className={style.projects}>
				{repositories.map((repository: IRepository) => (
					<ProjectCard key={repository.id} repository={repository} />
				))}
			</div>

			{(errors.status === 403 || errors.status === 404) && (
				<AlertMessage errors={errors} />
			)}
		</>
	);
}
