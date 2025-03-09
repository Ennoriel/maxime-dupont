<script lang="ts">
	interface Props {
		href: string;
		src: string;
		alt: string;
	}

	const { href, src, alt }: Props = $props();
</script>

<a {href}>
	<img {src} {alt} width="18" height="18" />
</a>
