<script lang="ts">
	import { Notes, Slide } from 'svelte-reveal.js';

	const { history = $bindable() } = $props();

	function onsubmit(event: SubmitEvent) {
		event.preventDefault();

		const target = event.target as HTMLFormElement | null;
		if (!target) return;

		history.push(target.q.value);
		target.reset();
	}
</script>

<Slide>
	<Slide>
		<h2>L'écoconception</h2>
	</Slide>
	<Slide>
		<img src="/conference/arretez-ecoconception/reverse-card-uno.jpg" alt="" />
	</Slide>
	<Slide>
		<form {onsubmit} style:margin-top="-30vh">
			<label>
				Qu'est ce qu'on fait ?
				<input
					name="q"
					style:height="50px"
					style:width="70%"
					style:margin="24px 0"
					style:border-radius="10px"
					style:border="1px solid grey"
					style:font-size="24px"
					style:text-align="center"
				/>
			</label>
		</form>
		<ul style:height="calc(30vw / var(--slide-scale))">
			{#each history as h}
				<li>{h}</li>
			{/each}
		</ul>
		<Notes>
			<ul>
				<li>écoconception web du site vitrine</li>
				<li>passage en micro service (scaler) des app backends</li>
			</ul>
			<p>de mon entreprise</p>
		</Notes>
	</Slide>
</Slide>
