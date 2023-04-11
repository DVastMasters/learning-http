const normalizeURL = (url) => {
	const protocol = /https?:\/\//

	url = url.replace(protocol, "");

	while(url.endsWith('/')) {
		url = url.slice(0, -1);
	}

	return url.toLowerCase();
}

const getURLsFromHTML = (htmlBody, baseURL) => {
	const jsdom = require('jsdom');
	const { JSDOM } = jsdom;

	const { document } = (new JSDOM(htmlBody).window);

	const anchors = Array.from(document.querySelectorAll("a"));
	if (!anchors.length) return null;

	const urls = anchors.map(a => {
		if (a.href.startsWith('/')) {
			return baseURL + a.href;
		}

		return a.href;
	});

	return urls;
} 	

module.exports = {
	normalizeURL,
	getURLsFromHTML
}