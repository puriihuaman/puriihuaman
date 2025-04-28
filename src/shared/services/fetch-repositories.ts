import type { Repository } from "../models/repository.ts";
import type { SearchAnswer } from "../models/search-answer.ts";
import { CustomError } from "./custom-error.ts";

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

		const repositories: Repository[] = await response.json();

		const filteredRepositories: Repository[] = repositories.filter(
			(repository: Repository): boolean =>
				repository.default_branch === DEFAULT_BRANCH,
		);

		const leakedRepositories: Repository[] = filteredRepositories.filter(
			(repository: Repository): boolean =>
				repository.topics.includes(selectedTechnology),
		);

		const listOfFilteredRepositories: Repository[] =
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
