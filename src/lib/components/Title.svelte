<!-- FlamingoTitle.svelte -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		emoji: string;
		reverse?: boolean;
	}

	let { children, emoji, reverse }: Props = $props();
</script>

<h1 class="mt-16 mb-4 text-center" class:reverse>
	<span class="queer">{emoji}</span>
	{@render children()}
	<span>{emoji}</span>
</h1>

<style>
	span {
		display: inline-block;
	}
	.queer,
	.reverse span {
		transform: scale(-1, 1);
	}
	.reverse .queer {
		transform: none;
	}
</style>
