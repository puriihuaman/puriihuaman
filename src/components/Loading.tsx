import style from "./Loading.module.scss";

export function Loading() {
	return (
		<div className={style.loading}>
			<p className={style.loading__message}>Cargando...</p>
		</div>
	);
}
