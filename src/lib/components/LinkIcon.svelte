<script lang="ts">
	import { Icons } from '$lib/icons';

	interface Props {
		href: string;
		src: string;
		alt: string;
	}

	const { href, src, alt }: Props = $props();

	const Icon = $derived(Icons[src]);
</script>

<a {href}>
	<Icon role="img" aria-label={alt} width="18" height="18" />
</a>

<style>
	a {
		color: #62748e;
		padding: 6px;
		margin: -6px -3px;
	}

	a:hover {
		color: blue;
		transform: rotate(-5deg) scale(1.05);
	}
</style>
