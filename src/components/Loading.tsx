import style from "./loading.module.scss";

export function Loading() {
	return (
		<div className={style.loading}>
			<p>Cargando...</p>
		</div>
	);
}
