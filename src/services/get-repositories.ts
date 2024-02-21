import type { IErrorType } from "@interfaces/IErrorType";
import type { IRepository } from "@interfaces/IRepository";

const DEFAULT_BRANCH = "start";

const API_URL_BASE =
	import.meta.env.API_URL_BASE ??
	"https://api.github.com/users/puriihuaman/repos";
export const getRepositories = async (
	selectedTechnology: string
): Promise<{ data: IRepository[]; error: IErrorType; isLoading: boolean }> => {
	try {
		const response = await fetch(API_URL_BASE);

		if (!response.ok && response.status === 403) {
			return {
				data: [],
				error: {
					message: "Llego el límite de peticiones",
					status: response.status,
					statusText:
						response.statusText ?? "Parece que ha ocurrido un problema",
				},
				isLoading: true,
			};
		}

		const repositories: IRepository[] = await response.json();

		const filteredRepositories = repositories.filter(
			(repository: IRepository): boolean =>
				repository.default_branch === DEFAULT_BRANCH
		);

		const leakedRepositories = filteredRepositories.filter(
			(repository: IRepository): boolean =>
				repository.topics.includes(selectedTechnology)
		);

		const listOfFilteredRepositories =
			leakedRepositories.length > 0 ? leakedRepositories : filteredRepositories;

		return {
			data: listOfFilteredRepositories || [],
			error: {
				message: "",
				status: response.status,
				statusText: response.statusText,
			},
			isLoading: false,
		};
	} catch (error) {
		return {
			data: [],
			error: {
				message:
					"Por favor, verifique la URL o el enlace que está intentando acceder",
				status: 404,
				statusText: "Parece que ha ocurrido un problema",
			},
			isLoading: true,
		};
	}
};
