<script lang="ts">
	type Track = { name?: string; points: { lat: number; lon: number }[] };

	interface Props {
		width?: number;
		height?: number;
		padding?: number;
		tracks: Array<Track>;
	}

	let { width = 800, height = 600, padding = 20, tracks }: Props = $props();

	function project() {
		const allPoints = tracks.flatMap((t) => t.points);

		if (!allPoints.length) {
			return [];
		}

		const lats = allPoints.map((p) => p.lat);

		const minLat = Math.min(...lats);
		const maxLat = Math.max(...lats);

		// Better projection for geographic coordinates
		const meanLat = (((minLat + maxLat) / 2) * Math.PI) / 180;

		const projected = allPoints.map((p) => ({
			x: ((p.lon * Math.PI) / 180) * Math.cos(meanLat),
			y: (p.lat * Math.PI) / 180
		}));

		const xs = projected.map((p) => p.x);
		const ys = projected.map((p) => p.y);

		const minX = Math.min(...xs);
		const maxX = Math.max(...xs);
		const minY = Math.min(...ys);
		const maxY = Math.max(...ys);

		const scale = Math.min(
			(width - padding * 2) / (maxX - minX || 1),
			(height - padding * 2) / (maxY - minY || 1)
		);

		const offsetX = (width - (maxX - minX) * scale) / 2;

		const offsetY = (height - (maxY - minY) * scale) / 2;

		return tracks.map((track) => {
			const points = track.points
				.map((p) => {
					const x = ((p.lon * Math.PI) / 180) * Math.cos(meanLat);
					const y = (p.lat * Math.PI) / 180;

					return `${offsetX + (x - minX) * scale},${offsetY + (maxY - y) * scale}`;
				})
				.join(' ');

			return {
				...track,
				svg: points
			};
		});
	}

	let svgTracks = $derived(project());

	const colors = [
		'#ef4444',
		'#3b82f6',
		'#22c55e',
		'#eab308',
		'#8b5cf6',
		'#ec4899',
		'#14b8a6',
		'#f97316'
	];
</script>

<svg viewBox={`0 0 ${width} ${height}`} style="width:100%;height:auto">
	{#each svgTracks as track, i}
		<polyline
			points={track.svg}
			fill="none"
			stroke={colors[i % colors.length]}
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		/>
	{/each}
</svg>
