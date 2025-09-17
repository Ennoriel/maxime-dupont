<script lang="ts">
	import {
		highlight,
		notes,
		RevealJsContext,
		SvelteRevealHMR,
		white,
		zenburn
	} from 'svelte-reveal.js';
	export const ubd = () => import('$lib/components/theme.css');

	let { children } = $props();
</script>

<RevealJsContext
	options={{
		controls: true,
		progress: true,
		hash: true
	}}
	themes={[white, zenburn, ubd]}
	plugins={[notes, highlight]}
>
	<!-- use SvelteRevealHMR in dev to enable hot module reloading -->
	<SvelteRevealHMR />

	{@render children()}
</RevealJsContext>

<style>
	:global(.reveal img) {
		max-width: calc(65vw / var(--slide-scale)) !important;
		max-height: calc(80vh / var(--slide-scale)) !important;
		margin-inline: auto !important;
	}
</style>
