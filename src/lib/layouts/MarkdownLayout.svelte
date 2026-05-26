<script lang="ts">
	const metadata: {
		title?: string;
		description?: string;
		date?: string;
	} = $$props;
</script>

<svelte:head>
	<title>{metadata.title ?? 'Document'}</title>

	{#if metadata.description}
		<meta name="description" content={metadata.description} />
	{/if}
</svelte:head>

<div class="markdown-container">
	{#if metadata.title}
		<h1>{metadata.title}</h1>
	{/if}

	{#if metadata.date}
		<p class="date">{metadata.date}</p>
	{/if}

	<article>
		<slot />
	</article>
</div>

<style>
	.markdown-container {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1rem;
		line-height: 1.75;
		font-size: 1.05rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.date {
		opacity: 0.7;
		margin-bottom: 2rem;
	}

	article :global(h2),
	article :global(h3),
	article :global(h4) {
		margin: 2rem 0;
	}

	article :global(h2) {
		font-size: 1.15rem;
	}
	article :global(h3) {
	}
	article :global(h4) {
		font-size: 0.95rem;
		font-style: italic;
	}

	article :global(h2 a),
	article :global(h3 a),
	article :global(h4 a) {
		color: black;
		font-weight: 600;
	}

	article :global(ul) {
		margin: 2rem 0;
		padding-left: 2rem;
	}

	article :global(li) {
		padding: 0;
		list-style: '–';
		padding-left: 1rem;
	}

	article :global(p) {
		margin: 1rem 0;
	}

	article :global(pre) {
		padding: 1rem;
		border-radius: 8px;
		overflow-x: auto;
	}

	article :global(code) {
		font-family: monospace;
	}

	article :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}
</style>
