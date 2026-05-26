import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

const PORT = 4173;
const BASE = `http://localhost:${PORT}`;
const OUT_DIR = join(repoRoot, 'static', 'slides');

// reveal.js default slide dimensions
const SLIDE_WIDTH = 960;
const SLIDE_HEIGHT = 700;

const SLUGS = [
	'supply-chain-attack',
	'arretez-d-ecoconcevoir-vos-services-numeriques',
	'les-do-nothing-scripts'
];

async function waitForServer(url, timeoutMs = 60_000) {
	const start = Date.now();
	while (Date.now() - start < timeoutMs) {
		try {
			const res = await fetch(url);
			if (res.ok) return;
		} catch {
			// not ready yet
		}
		await new Promise((r) => setTimeout(r, 250));
	}
	throw new Error(`Server at ${url} did not become ready within ${timeoutMs}ms`);
}

async function exportSlug(browser, slug) {
	const url = `${BASE}/conference/${slug}/?print-pdf`;
	const out = join(OUT_DIR, `${slug}.pdf`);
	console.log(`→ ${slug}`);

	const context = await browser.newContext({
		viewport: { width: SLIDE_WIDTH, height: SLIDE_HEIGHT }
	});
	const page = await context.newPage();
	page.on('console', (msg) => {
		if (msg.type() === 'error') console.log(`    [console.${msg.type()}] ${msg.text()}`);
	});
	page.on('pageerror', (err) => console.log(`    [pageerror] ${err.message}`));
	await page.goto(url, { waitUntil: 'load' });

	// Wait for reveal to finish constructing the print layout. In print-pdf
	// mode reveal flattens every slide into `.pdf-page` wrappers — without
	// this wait, page.pdf() captures only the first slide while the rest are
	// still mid-layout (hence blank pages).
	await page.waitForSelector('.pdf-page', { timeout: 30_000 });
	// Force every cloned slide to render. Reveal's print stylesheet sets
	// `display: block !important` on sections, but Tailwind v4's preflight
	// rule `[hidden] { display: none !important }` lives inside `@layer base`
	// — with `!important`, layered rules win against unlayered ones, so the
	// sections stay hidden. Strip the attribute (and bump aria-hidden too)
	// to bypass that cascade conflict entirely.
	const pdfPageCount = await page.evaluate(() => {
		document.querySelectorAll('.pdf-page section').forEach((s) => {
			s.removeAttribute('hidden');
			s.removeAttribute('aria-hidden');
		});
		return document.querySelectorAll('.pdf-page').length;
	});
	console.log(`    rendered ${pdfPageCount} .pdf-page wrappers`);

	// Give fonts/highlight.js a beat to settle.
	await page.evaluate(() => document.fonts && document.fonts.ready);
	await page.waitForTimeout(500);
	await page.emulateMedia({ media: 'print' });

	await page.pdf({
		path: out,
		width: `${SLIDE_WIDTH}px`,
		height: `${SLIDE_HEIGHT}px`,
		printBackground: true,
		margin: { top: 0, right: 0, bottom: 0, left: 0 },
		preferCSSPageSize: true
	});
	await context.close();
	console.log(`  ✓ ${out}`);
}

async function main() {
	await mkdir(OUT_DIR, { recursive: true });

	console.log('Starting `vite preview`…');
	const server = spawn(
		'pnpm',
		['exec', 'vite', 'preview', '--port', String(PORT), '--strictPort'],
		{ cwd: repoRoot, stdio: ['ignore', 'inherit', 'inherit'] }
	);

	const shutdown = () => {
		if (!server.killed) server.kill('SIGTERM');
	};
	process.on('exit', shutdown);
	process.on('SIGINT', () => {
		shutdown();
		process.exit(130);
	});

	try {
		await waitForServer(`${BASE}/`);
		// Force the full chromium build (not the headless-shell), whose print
		// pipeline matches what reveal's print-pdf layout expects.
		const browser = await chromium.launch({ channel: 'chromium' });
		try {
			for (const slug of SLUGS) {
				await exportSlug(browser, slug);
			}
		} finally {
			await browser.close();
		}
	} finally {
		shutdown();
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
