import type { IImage, IImageDemo } from "@models/IImage.ts";
import { CustomError } from "./custom-error";

const frontEndImagePath = "public/assets/images/demo";
const backEndImagePath = "src/main/resources/static/images";
const backEndImagePathTwo = "src/main/resources/static/demo";

const pathsToTry: string[] = [
	frontEndImagePath,
	backEndImagePath,
	backEndImagePathTwo,
];

async function fetchImagesFromRepo(contentsUrl: string): Promise<IImage[]> {
	for (const path of pathsToTry) {
		const url = contentsUrl.replace("{+path}", path);
		try {
			const response = await fetch(url);
			if (response.ok) {
				const data: IImageDemo[] = await response.json();

				return data.map(
					(img) =>
						({
							htmlUrl: img.html_url,
							downloadUrl: img.download_url,
						}) as IImage
				);
			}
		} catch (error) {
			throw new CustomError(
				"URL no válida",
				400,
				`Error al intentar con la ruta: ${path}`
			);
		}
	}
	return [];
}

export { fetchImagesFromRepo };
