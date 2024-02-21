import type { IErrorType } from "@interfaces/IErrorType";
import style from "./AlertMessage.module.scss";

export function AlertMessage({ errors }: { errors: IErrorType }) {
	return (
		<div className={style.alert}>
			<h4 className={style.title}>{errors?.statusText}</h4>

			<p>
				<strong className={style.code}>{errors?.status}</strong> - &nbsp;
				{errors?.message}
			</p>
		</div>
	);
}
