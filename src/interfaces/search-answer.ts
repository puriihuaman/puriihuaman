import type { CustomError } from "@services/custom-error";
import type { IRepository } from "./IRepository";

export interface SearchAnswer {
	repositories: IRepository[];
	isLoading: boolean;
	hasError: boolean;
	error: CustomError | null;
}
