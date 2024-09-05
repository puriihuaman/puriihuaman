import type { IRepository } from "@interfaces/IRepository";
import style from "./project-card.module.scss";

const path = "/assets/icons/svg-icons.svg#";

const IconSvg = ({
	iconID,
	otherClass = "xs",
}: {
	iconID: string;
	otherClass?: string;
}) => (
	<span className="icon">
		<svg className={otherClass}>
			<use href={path + iconID}></use>
		</svg>
	</span>
);

export function ProjectCard({ repository }: { repository: IRepository }) {
	const getClassNames = (): string => {
		if (repository.topics.includes("reactjs")) return "react";
		else if (repository.topics.includes("angular")) return "angular";
		else if (repository.topics.includes("java")) return "java";
		else return "default";
	};

	const formateDate = (date: string): string =>
		String(new Date(date).toLocaleDateString());

	return (
		<article className={`${style.card} ${style[getClassNames()]}`}>
			<div className={style["card-container"]}>
				<div className={style["card-content"]}>
					<header className={style["card-header"]}>
						<span className={style["card-demo"]}>
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

						<h3 className={style["card-title"]}>{repository.name}</h3>
					</header>

					<div className={style["card-links"]}>
						<a
							className={style.link}
							href={repository.homepage || ""}
							title={repository.name}
							aria-label="Go to project demo"
							rel="nofollow noopener noreferrer"
							target="_blank"
						>
							<IconSvg iconID="link" />
						</a>

						<a
							className={style.github}
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

				<footer className={style["card-footer"]}>
					<p className={style["card-date"]}>
						<IconSvg iconID="calendar" otherClass="w-4 h-4" />

						<span>{formateDate(repository.updated_at)}</span>
					</p>

					<div className={style["card-icon"]}>
						{repository.topics.map((topic: string): any => (
							<IconSvg key={topic} iconID={topic} />
						))}
					</div>
				</footer>
			</div>
		</article>
	);
}
