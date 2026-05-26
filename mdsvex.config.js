import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { join } from 'node:path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const __dirname = import.meta.dirname;

/** @type {import('mdsvex').MdsvexOptions} */
const config = defineConfig({
	extensions: ['.md'],

	layout: {
		_: join(__dirname, './src/lib/layouts/MarkdownLayout.svelte')
	},

	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap'
			}
		]
	]
});

export default config;
