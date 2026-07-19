<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Filters from './Filters.svelte';
	import MediaGrid from './MediaList.svelte';
	import media from './data.json';
	import type { MediaItem } from './medias';
	import { filterMedia, getInitialFilterValues } from './utils';

	const data = media as MediaItem[];

	let selectedFormat = $state('all');
	let selectedPlatform = $state('all');
	let selectedYear = $state<number | 'all'>('all');

	const { formats, platforms, years } = getInitialFilterValues(data);

	const filtered = $derived(
		filterMedia(data, {
			format: selectedFormat,
			platform: selectedPlatform,
			year: selectedYear
		})
	);
</script>

<a href="/" class="mt-2 block">⬅ Retour à l'accueil</a>

<Title emoji="📽️" reverse>Films & séries</Title>
<Filters
	{formats}
	{platforms}
	{years}
	bind:selectedFormat
	bind:selectedPlatform
	bind:selectedYear
/>
<MediaGrid items={filtered} />

<a href="/" class="mt-16 mb-4 block">⬅ Retour à l'accueil</a>
