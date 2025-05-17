interface Link {
	self: string;
	git: string;
	html: string;
}

export interface ImageDemo {
	name: string;
	path: string;
	sha: string;
	size: number;
	url: string;
	html_url: string;
	git_url: string;
	download_url: string;
	type: string;
	_links: Link;
}

export interface Image {
	htmlUrl: string;
	downloadUrl: string;
}
