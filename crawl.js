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

const crawlPage = async (base_url) => {
	try {
		const response = await fetch(base_url);
		if (!response.ok) {
			throw new Error("Network error. HTTP response isn't 200.");
		};
		
		if (!response.headers.get("Content-Type").includes('text/html')) {
			throw new Error("Content-Type isn't text/html.");
		}

		response.text().then(text => console.log(text));
	} catch (error) {
		console.log('Error: ' + error);
	}
}

module.exports = {
	normalizeURL,
	getURLsFromHTML,
	crawlPage
}