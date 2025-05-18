const formatRepositoryName: (name: string) => string = (
	name: string
): string => {
	return name.trim().toLowerCase().replaceAll(/[-_]/g, " ");
};

export { formatRepositoryName };
