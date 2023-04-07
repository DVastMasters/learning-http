const normalizeURL = (url) => {
	const protocol = /https?:\/\//

	url = url.replace(protocol, "");

	while(url.endsWith('/')) {
		url = url.slice(0, -1);
	}

	return url.toLowerCase();
}

module.exports = {
	normalizeURL
}