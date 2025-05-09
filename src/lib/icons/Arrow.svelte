<script>
	import Svg from './_Svg.svelte';

	const props = $props();
</script>

<Svg {...props}>
	<path d="M13 5H19V11" />
	<path d="M19 5L5 19" />
</Svg>
