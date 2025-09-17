<script lang="ts">
	import RevealJsContext from '$lib/components/RevealJsContext.svelte';
	import { Slides } from '.';

	import './style.css';
</script>

<RevealJsContext>
	<Slides.Introduction />
	<Slides.TheArticle />
	<Slides.DigDeeper />
	<Slides.Conclusion />
</RevealJsContext>
