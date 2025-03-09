<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Seo
	title="Maxime Dupont - Développeur web"
	description="Je suis un développeur expérimenté, flammant rose à 3 pattes, curieux et pédagogue."
	url=""
/>

{@render children()}
