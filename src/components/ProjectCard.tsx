import type { IRepository } from "@interfaces/IRepository";

import style from "./ProjectCard.module.scss";

const path = "/assets/icons/svg-icons.svg#";

const IconSvg = ({
	iconID,
	otherClass,
}: {
	iconID: string;
	otherClass?: string;
}) => (
	<span className="icon">
		<svg className={`icon__svg ${otherClass}`}>
			<use href={path + iconID}></use>
		</svg>
	</span>
);

export function ProjectCard({ repository }: { repository: IRepository }) {
	const getClassNames = (): boolean => repository.topics.includes("reactjs");

	const formateDate = (date: string): string =>
		String(new Date(date).toLocaleDateString());

	return (
		<article
			className={`${style.card} ${getClassNames() ? style.react : style.angular}`}
		>
			<div className={style.content}>
				<div className={style.body}>
					<header className={style.header}>
						<span className={style.demo}>
							<a
								href={repository.homepage || ""}
								title={repository.name}
								target="_blank"
								rel="nofollow noopener noreferrer"
								aria-label="Go to project demo"
							>
								💻
							</a>
						</span>

						<h3 className={style["title-project"]}>{repository.name}</h3>
					</header>

					<div className={style.links}>
						<a
							className={style.link}
							href={repository.homepage || ""}
							title={repository.name}
							aria-label="Go to project demo"
							rel="nofollow noopener noreferrer"
							target="_blank"
						>
							<IconSvg iconID="link" otherClass="icon--sm" />
						</a>

						<a
							className={style.link}
							href={repository.html_url}
							title={repository.name}
							aria-label="Go to project demo"
							rel="nofollow noopener noreferrer"
							target="_blank"
						>
							<IconSvg iconID="github" otherClass="icon--sm" />
						</a>
					</div>
				</div>

				<p>{repository.description}</p>

				<footer className={style.footer}>
					<p className={style.date}>
						<IconSvg iconID="calendar" otherClass="icon--sm" />

						<span>{formateDate(repository.updated_at)}</span>
					</p>

					<div className={style.skills}>
						{repository.topics.map((topic: string): any => (
							<IconSvg iconID={topic} otherClass="icon--sm" key={topic} />
						))}
					</div>
				</footer>
			</div>
		</article>
	);
}
