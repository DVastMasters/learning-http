const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl')

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