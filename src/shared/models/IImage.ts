interface ILink {
	self: string;
	git: string;
	html: string;
}

export interface IImageDemo {
	name: string;
	path: string;
	sha: string;
	size: number;
	url: string;
	html_url: string;
	git_url: string;
	download_url: string;
	type: string;
	_links: ILink;
}

export interface IImage {
	htmlUrl: string;
	downloadUrl: string;
}
