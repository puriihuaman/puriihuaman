import type { CustomError } from '@services/custom-error';

export function AlertMessage({ error }: { error: CustomError }) {
	return (
		<div className="text-center p-4 text-pink-500 text-base shadow-md border border-current rounded-md text-balance bg-pink-900/20">
			<h4 className="text-base mb-2">{error.name}</h4>

			<p>
				<strong className="text-xl block">{error.statusCode}</strong> - &nbsp;
				{error.message}
			</p>
		</div>
	);
}
