import type { CustomError } from "@services/custom-error";

import style from "./alert-message.module.scss";

export function AlertMessage({ error }: { error: CustomError }) {
	return (
		<div className={style.alert}>
			<h4 className={style["alert-title"]}>{error.name}</h4>

			<p>
				<strong className={style["alert-block"]}>{error.statusCode}</strong> -
				&nbsp;
				{error.message}
			</p>
		</div>
	);
}
