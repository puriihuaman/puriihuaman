import type {Repository} from "./repository.ts";
import type {CustomError} from "@services/custom-error.ts";

export interface SearchAnswer {
  repositories: Repository[];
  isLoading: boolean;
  hasError: boolean;
  error: CustomError | null;
}
