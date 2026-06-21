import type { CustomError } from "@services/custom-error.ts";
import type {Repository} from "./repository.ts";

export interface RepositorySearchResult {
	repositories: Repository[];
	isLoading: boolean;
	hasError: boolean;
	error: CustomError | null;
}
