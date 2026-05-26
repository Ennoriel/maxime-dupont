<script lang="ts">
	import MediaCard from './MediaItem.svelte';
	import type { MediaItem } from './medias';

	interface Props {
		items: MediaItem[];
	}

	let { items }: Props = $props();
</script>

<ul>
	{#each items as item}
		<MediaCard {item} />
	{/each}
</ul>

<style>
	@reference "tailwindcss";
	ul {
		@apply pl-2 md:pl-4;
	}
</style>
