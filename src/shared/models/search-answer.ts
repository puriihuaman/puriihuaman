import type { CustomError } from "@services/custom-error.ts";
import type { ICustomRepository } from "./IRepository.ts";

export interface SearchAnswer {
	repositories: ICustomRepository[];
	isLoading: boolean;
	hasError: boolean;
	error: CustomError | null;
}
