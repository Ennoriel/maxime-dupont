<script lang="ts">
	import RevealJsContext from '$lib/components/RevealJsContext.svelte';
	import { Slides } from '.';

	let history: Array<string> = $state([]);
</script>

<RevealJsContext>
	<Slides.Introduction />
	<Slides.Ecoconception bind:history />
	<Slides.Impacts />
	<Slides.EcoImpact {history} />
	<Slides.EffetRebond />
	<Slides.Actions />
	<Slides.Conclusion />
</RevealJsContext>
