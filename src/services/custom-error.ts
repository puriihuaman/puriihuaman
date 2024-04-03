export class CustomError extends Error {
	statusCode: number = 403;

	constructor(name: string, status: number = 403, message: string) {
		super(message);
		this.name = name;
		this.statusCode = status;
	}
}
