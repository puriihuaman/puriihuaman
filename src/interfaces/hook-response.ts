import type { CustomError } from '@services/custom-error';
import type { IRepository } from './IRepository';

export interface HookResponse {
	repositories: IRepository[];
	isLoading: boolean;
	hasError: boolean;
	error: CustomError | null;
}
