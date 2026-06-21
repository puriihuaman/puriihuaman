import type {Image} from "@models/image.ts";
import type {GitHubRepoApi, Repository} from "@models/repository.ts";
import type {RepositorySearchResult} from "@models/search-answer.ts";
import {formatDate} from "../utils/format-date.ts";
import {formatRepositoryName} from "../utils/format-repository-name.ts";
import {CustomError} from "./custom-error.ts";
import {fetchImagesFromRepo} from "./fetching-image.ts";

const DEFAULT_BRANCH: string = "start";

// @ts-ignore
const GITHUB_API_URL: string = import.meta.env.GITHUB_API_URL;

export const fetchRepositories = async (): Promise<RepositorySearchResult> => {
  try {
    const response = await fetch(GITHUB_API_URL);

    validateResponse(response);

    const repositories: GitHubRepoApi[] = await response.json();

    const filteredRepositories: GitHubRepoApi[] = repositories.filter(
      (repo: GitHubRepoApi): boolean => repo.default_branch === DEFAULT_BRANCH,
    );

    const simpleRepositories: Repository[] = [];

    for (const repo of filteredRepositories) {
      const images: Image[] = await fetchImagesFromRepo(repo.contents_url);
      simpleRepositories.push(mapToSimpleRepository(repo, images));
    }

    return {
      repositories: simpleRepositories || [],
      hasError: false,
      isLoading: false,
      error: null,
    };
  } catch (error) {
    return handleError(error);
  }
};

export function validateResponse(response: Response): void {
  if (!response.ok) {
    switch (response.status) {
      case 404:
        throw new CustomError(
          "URL no válida",
          response.status,
          "No se pudo encontrar la URL solicitada.",
        );
      case 403:
        throw new CustomError(
          "No se pudieron cargar los proyectos.",
          response.status,
          "Se ha alcanzado el límite de peticiones a la API de GitHub.",
        );
      default:
        throw new CustomError(
          "Error de la API de GitHub",
          response.status,
          response.statusText,
        );
    }
  }
}

export function mapToSimpleRepository(
  repo: GitHubRepoApi,
  images: Image[],
): Repository {
  return {
    id: repo.id,
    name: formatRepositoryName(repo.name),
    description: repo.description,
    htmlUrl: repo.html_url,
    homepage: repo.homepage,
    contentsUrl: repo.contents_url,
    createdAt: formatDate(repo.created_at),
    updatedAt: formatDate(repo.updated_at),
    topics: repo.topics.join(" - "),
    fullName: repo.full_name,
    pushedAt: formatDate(repo.pushed_at),
    images,
  };
}

export function handleError(error: unknown): RepositorySearchResult {
  if (error instanceof CustomError) {
    return {
      repositories: [],
      hasError: true,
      isLoading: false,
      error,
    };
  }

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
