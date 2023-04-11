const { test, expect } = require('@jest/globals')
const { normalizeURL, getURLsFromHTML } = require('./crawl')

// normalizeURL ============================
test('Url https://wagslane.dev/path/ is equal to wagslane.dev/path', () => {
	expect(normalizeURL('https://wagslane.dev/path/')).toBe('wagslane.dev/path');
})

test('Url https://wagsLane.Dev/path is equal to wagslane.dev/path', () => {
	expect(normalizeURL('https://wagsLane.Dev/path')).toBe('wagslane.dev/path');
})

test('Url https://wagslane.dev/path is equal to wagslane.dev/path', () => {
	expect(normalizeURL('https://wagslane.dev/path')).toBe('wagslane.dev/path');
})

test('Url http://wagslane.dev/path is equal to wagslane.dev/path', () => {
	expect(normalizeURL('http://wagslane.dev/path')).toBe('wagslane.dev/path');
})




// getURLsFromHTML ============================
test(`HTMLBody with 1 relative URL. Expected output = ["https://blog.boot.dev/home"]`, () => {
	expect(getURLsFromHTML(
		`<html>
			<body>
				<a href="/home"><span>Go to Boot.dev</span></a>
			</body>
		</html>`, "https://blog.boot.dev")
	).toStrictEqual(["https://blog.boot.dev/home"]);
});

test("HTML with 3 absolute URLs. Expected output = ['https://blog.boot.dev/', 'https://github.com/bootdotdev', 'https://youtu.be/RyJrVTEFoDQ']", () => {
	expect(getURLsFromHTML(
		`<html>
			<body>
				<a href="https://blog.boot.dev">Go to Boot.dev</a>
				<a href="https://github.com/bootdotdev">Go to github repository</a>
				<a href="https://youtu.be/RyJrVTEFoDQ">Go to enygma rap</a>
			</body>
		</html>`)
	).toStrictEqual(['https://blog.boot.dev/', 'https://github.com/bootdotdev', 'https://youtu.be/RyJrVTEFoDQ']);
});

test("HTML with 2 relative URLs. Expected output = ['https://blog.boot.dev/about', 'https://blog.boot.dev/price']", () => {
	expect(getURLsFromHTML(
		`<html>
			<body>
				<a href="/about">About Boot.dev</a>
				<a href="/price">Boot.dev pricing</a>
			</body>
		</html>`, "https://blog.boot.dev")
	).toStrictEqual(['https://blog.boot.dev/about', 'https://blog.boot.dev/price']);
});

test("HTML with 0 URLs. Expected output = null", () => {
	expect(getURLsFromHTML(
		`<html>
			<body>
				<h1>This is a breaking bait =D</h1>
			</body>
		</html>`, "https://blog.boot.dev")
	).toBeNull();
});