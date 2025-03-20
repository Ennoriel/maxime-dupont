<script lang="ts">
	import { black, notes, RevealJsContext, SvelteRevealHMR } from 'svelte-reveal.js';

	let { children } = $props();
</script>

<RevealJsContext
	options={{
		controls: true,
		progress: true,
		center: true,
		hash: true
	}}
	themes={[black]}
	plugins={[notes]}
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
