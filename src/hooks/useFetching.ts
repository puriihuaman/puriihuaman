import type { HookResponse } from '@interfaces/hook-response';
import type { IRepository } from '@interfaces/IRepository';
import type { CustomError } from '@services/custom-error';
import { fetchRepositories } from '@services/fetch-repositories';
import { useEffect, useState } from 'react';

export const useFetching = ({
	selectedTechnology,
}: {
	selectedTechnology: string;
}): {
	repositories: IRepository[];
	isLoading: boolean;
	error: CustomError | null;
} => {
	const [info, setInfo] = useState<HookResponse>({
		repositories: [],
		isLoading: true,
		hasError: false,
		error: null,
	});

	useEffect((): void => {
		fetchInformation();
	}, [selectedTechnology]);

	const setLoadingInfo = (): void => {
		setInfo({
			repositories: [],
			isLoading: true,
			hasError: false,
			error: null,
		});
	};

	const fetchInformation = async (): Promise<void> => {
		setLoadingInfo();

		const { data, error } = await fetchRepositories(selectedTechnology);

		if (error) {
			setInfo({
				repositories: [],
				isLoading: false,
				hasError: true,
				error,
			});
			return;
		}

		setInfo({
			repositories: data,
			isLoading: false,
			hasError: false,
			error: null,
		});
	};

	return {
		repositories: info.repositories,
		isLoading: info.isLoading,
		error: info.error,
	};
};
