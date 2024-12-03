<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';

	type Props = {
		title: string;
		description: string;
		url: string;
		image?: string;
		author?: string;
		date?: string; // '2022-10-29'
		type?: 'website' | 'article';
		robots?: boolean;
	};

	const {
		title,
		description,
		url,
		image = 'cover.png',
		author = 'Maxime Dupont',
		date,
		type = 'website',
		robots = true
	}: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>

	{#if robots}
		<!-- Primary Meta Tags -->
		<meta name="title" content={title} />
		<meta name="description" content={description} />

		{#if type === 'article' && author}
			<meta name="author" content={author} />
		{/if}

		{#if type === 'article' && date}
			<meta property="article:published_time" content={date} />
		{/if}

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content={type} />
		<meta property="og:url" content="{PUBLIC_BASE_URL}/{url}" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content="{PUBLIC_BASE_URL}/{image}" />
		<meta property="og:locale" content="fr" />

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="{PUBLIC_BASE_URL}/{url}" />
		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={description} />
		<meta property="twitter:image" content="{PUBLIC_BASE_URL}/{image}" />
	{:else}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>
