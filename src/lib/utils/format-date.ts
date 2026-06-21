const formatDate: (data: string) => string = (date: string): string =>
	String(new Date(date).getFullYear().toString());

export { formatDate };
