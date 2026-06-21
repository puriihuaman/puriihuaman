interface ImageLinks {
	self: string;
	git: string;
	html: string;
}

export interface GitHubImageContent {
	name: string;
	path: string;
	sha: string;
	size: number;
	url: string;
	html_url: string;
	git_url: string;
	download_url: string;
	type: string;
	_links: ImageLinks;
}

export interface Image {
	htmlUrl: string;
	downloadUrl: string;
}
