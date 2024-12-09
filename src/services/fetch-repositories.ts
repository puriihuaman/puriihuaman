import type { IRepository } from "@interfaces/IRepository";
import type { SearchAnswer } from "@interfaces/search-answer";
import { CustomError } from "./custom-error";

const DEFAULT_BRANCH = "start";

const API_URL_BASE =
	import.meta.env.API_URL_BASE ??
	"https://api.github.com/users/puriihuaman/repos";

export const fetchRepositories = async (
	selectedTechnology: string,
): Promise<SearchAnswer> => {
	try {
		const response = await fetch(API_URL_BASE);

		if (!response.ok) {
			if (response.status === 404) {
				throw new CustomError(
					"Invalid URL",
					response.status,
					"Could not access URL",
				);
			}

			if (response.status === 403) {
				throw new CustomError(
					"Request limit",
					response.status,
					"Exceeded request limits",
				);
			}

			throw new CustomError(
				"GitHub API error",
				response.status,
				response.statusText,
			);
		}

		const repositories: IRepository[] = await response.json();

		const filteredRepositories: IRepository[] = repositories.filter(
			(repository: IRepository): boolean =>
				repository.default_branch === DEFAULT_BRANCH,
		);

		const leakedRepositories: IRepository[] = filteredRepositories.filter(
			(repository: IRepository): boolean =>
				repository.topics.includes(selectedTechnology),
		);

		const listOfFilteredRepositories: IRepository[] =
			leakedRepositories.length > 0 ? leakedRepositories : filteredRepositories;

		return {
			repositories: listOfFilteredRepositories || [],
			hasError: false,
			isLoading: false,
			error: null,
		};
	} catch (error) {
		if (error instanceof CustomError)
			return { repositories: [], hasError: true, isLoading: false, error };
		else
			return {
				repositories: [],
				hasError: true,
				isLoading: false,
				error: {
					name: "Server error",
					statusCode: 500,
					message: "Internal server error",
				},
			};
	}
};
