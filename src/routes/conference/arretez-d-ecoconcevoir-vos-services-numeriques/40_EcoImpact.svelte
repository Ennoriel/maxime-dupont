<script>
	import { Slide } from 'svelte-reveal.js';

	const { history = $bindable() } = $props();
</script>

<Slide>
	<Slide>
		<h2>éco + impacts</h2>
	</Slide>
	{#each history as h}
		<Slide>
			<p>{h}</p>
			<div
				style:margin-inline="calc(500px - 50vw / var(--slide-scale))"
				style:max-width="calc(95vw / var(--slide-scale))"
				style:display="grid"
				style:gap="16px"
				style:grid-template-columns="1932fr 929fr"
			>
				<img
					src="/conference/arretez-ecoconception/impacts-numerique-france.png"
					alt=""
					style:width="100%"
				/>
				<img
					src="/conference/arretez-ecoconception/repartition-trafic.png"
					alt=""
					style:width="100%"
				/>
			</div>
		</Slide>
	{/each}
</Slide>
