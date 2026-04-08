<script lang="ts">
	import RevealJsContext from '$lib/components/RevealJsContext.svelte';
	import { Slides } from '.';

	import './style.css';
</script>

<RevealJsContext>
	<Slides.Introduction />
	<Slides.Attaque />
	<Slides.Anatomie />
	<Slides.Enseignements />
	<Slides.Remediation />
	<Slides.Protection />
	<Slides.Conclusion />
</RevealJsContext>

<style>
	:global(.reveal table) {
		font-size: 0.75em;
	}

	:global(.reveal img) {
		max-width: calc(65vw / var(--slide-scale)) !important;
		max-height: calc(80vh / var(--slide-scale)) !important;
		margin-inline: auto !important;
	}

	:global(.reveal .slides) {
		border: 1px solid green;
	}
</style>
