<script lang="ts">
	import { getFormatLabel } from './utils';

	interface Props {
		formats: string[];
		platforms: string[];
		years: (number | 'all')[];

		selectedFormat: string;
		selectedPlatform: string;
		selectedYear: number | 'all';
	}

	let {
		formats,
		platforms,
		years,
		selectedFormat = $bindable(),
		selectedPlatform = $bindable(),
		selectedYear = $bindable()
	}: Props = $props();

	function onYearChange(e: Event) {
		const value = (e.target as HTMLSelectElement).value;

		selectedYear = value === 'all' ? 'all' : Number(value);
	}
</script>

<div class="filters">
	<div class="group">
		<label for="format">Format</label>

		<select id="format" bind:value={selectedFormat}>
			{#each formats as format}
				{#if format === 'all'}
					<option value="all">Tous</option>
				{:else}
					<option value={format}>{getFormatLabel(format)}</option>
				{/if}
			{/each}
		</select>
	</div>

	<div class="group">
		<label for="platform">Plateforme</label>

		<select id="platform" bind:value={selectedPlatform}>
			{#each platforms as platform}
				{#if platform === 'all'}
					<option value="all">Toutes</option>
				{:else}
					<option value={platform}>{platform}</option>
				{/if}
			{/each}
		</select>
	</div>

	<div class="group">
		<label for="year">Année</label>

		<select id="year" onchange={onYearChange}>
			{#each years as year}
				{#if year === 'all'}
					<option value="all">Toutes</option>
				{:else}
					<option value={year}> {year} </option>
				{/if}
			{/each}
		</select>
	</div>
</div>

<style>
	.filters {
		display: flex;
		gap: 1.5rem;
		margin-block: 2.5rem;
		flex-wrap: wrap;
	}

	.group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.075em;
		color: #555;
	}

	select {
		border: 1px solid #ddd;
		border-radius: 10px;
		background: white;
		padding: 0.55rem 0.95rem;
		appearance: none;
		cursor: pointer;
		min-width: 144px;
	}

	select:focus-visible {
		outline: 2px solid blueviolet;
	}

	@media (min-width: 768px) {
		.filters {
			margin-right: -5rem;
		}
	}
</style>
