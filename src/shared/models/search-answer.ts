import type { CustomError } from "@services/custom-error.ts";
import type { SimpleRepository } from "./repository.ts";

export interface SearchAnswer {
	repositories: SimpleRepository[];
	isLoading: boolean;
	hasError: boolean;
	error: CustomError | null;
}
