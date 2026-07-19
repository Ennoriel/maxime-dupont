<script lang="ts">
	import type { MediaItem } from './medias';
	import { getFormatLabel } from './utils';

	interface Props {
		item: MediaItem;
	}

	let { item }: Props = $props();
</script>

<li>
	<div class="designation">
		<h2>{item.title},</h2>
		<p>
			<span class="format">{getFormatLabel(item.format).toLocaleLowerCase()}</span>
			<span class="platform">({item.platform}),</span>
			<span class="director">{item.director},</span>
			<span class="year">{@html item.releasePeriod}</span>
		</p>
	</div>
	<div class="themes">
		{#each item.themes as theme}
			<span>{theme}</span>
		{/each}
	</div>
</li>

<style>
	li {
		list-style: '·  ';
		margin: 0.75rem 0;
	}

	.designation {
		line-height: 1.15;
		margin-bottom: 6px;
	}

	h2,
	p {
		display: inline;
	}

	h2 {
		margin: 0;
		font-weight: 600;
	}

	.director {
		margin: 0;
		color: #555;
	}

	.themes {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.themes span {
		padding: 0.15rem 0.65rem;

		border-radius: 999px;

		background: #f1f1ef;

		color: #555;
		font-size: 0.75rem;
	}
</style>
