import type { IRepository } from '@interfaces/IRepository';

const path = '/assets/icons/svg-icons.svg#';

const IconSvg = ({
	iconID,
	otherClass = 'w-6 h-6',
}: {
	iconID: string;
	otherClass?: string;
}) => (
	<span className="flex justify-center items-center">
		<svg className={`block text-current fill-current ${otherClass}`}>
			<use href={path + iconID}></use>
		</svg>
	</span>
);

export function ProjectCard({ repository }: { repository: IRepository }) {
	const getClassNames = (): boolean => repository.topics.includes('reactjs');

	const formateDate = (date: string): string =>
		String(new Date(date).toLocaleDateString());

	return (
		<article
			className={`relative h-full text-center overflow-hidden shadow-md rounded-md transition-colors duration-300 ${getClassNames() ? 'text-blue-50 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950' : 'text-green-50 bg-gradient-to-r from-green-800 via-green-900 to-green-950'}`}
		>
			<div className="flex flex-col gap-4 p-6 h-full md:p-8">
				<div className="flex justify-between items-center flex-wrap gap-3">
					<header className="w-full flex justify-center items-center flex-wrap gap-2 md:flex-1 md:w-auto md:justify-between">
						<span className="flex justify-center items-center w-8 h-8 text-center overflow-hidden shadow-md border border-slate-800 rounded-full">
							<a
								href={repository.homepage || ''}
								title={repository.name}
								target="_blank"
								rel="nofollow noopener noreferrer"
								aria-label="Go to project demo"
							>
								💻
							</a>
						</span>

						<h3 className="font-heading text-xl w-full capitalize text-nowrap md:w-auto md:mx-auto">
							{repository.name}
						</h3>
					</header>

					<div className="w-full flex justify-center items-center gap-2 md:w-auto md:justify-between">
						<a
							className="text-current scale-100 hover:scale-90 transition-transform duration-300"
							href={repository.homepage || ''}
							title={repository.name}
							aria-label="Go to project demo"
							rel="nofollow noopener noreferrer"
							target="_blank"
						>
							<IconSvg iconID="link" />
						</a>

						<a
							className="text-current scale-100 hover:scale-90 transition-transform duration-300"
							href={repository.html_url}
							title={repository.name}
							aria-label="Go to project demo"
							rel="nofollow noopener noreferrer"
							target="_blank"
						>
							<IconSvg iconID="github" />
						</a>
					</div>
				</div>

				<p>{repository.description}</p>

				<footer className="flex justify-between items-center flex-wrap gap-2 mt-auto">
					<p className="flex items-center gap-2 text-sm text-slate-400">
						<IconSvg iconID="calendar" otherClass="w-4 h-4" />

						<span>{formateDate(repository.updated_at)}</span>
					</p>

					<div className="flex items-center flex-wrap gap-2">
						{repository.topics.map((topic: string): any => (
							<IconSvg key={topic} iconID={topic} />
						))}
					</div>
				</footer>
			</div>
		</article>
	);
}
