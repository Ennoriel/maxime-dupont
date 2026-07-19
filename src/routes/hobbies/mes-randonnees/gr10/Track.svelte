<script lang="ts">
	import { onMount } from 'svelte';
	import GPXOverview from './GPXOverview.svelte';

	let { steps }: { steps: Step[] } = $props();

	interface Point {
		lat: number;
		lon: number;
	}

	interface Track {
		name: string;
		points: Point[];
	}

	let tracks: Track[] = $state([]);

	async function loadTrack(file: string): Promise<Track> {
		const text = await fetch(`/hobbies/mes-randonnees/gr10/${file}`).then((r) => r.text());
		console.log(text.slice(0, 50));

		const xml = new DOMParser().parseFromString(text, 'application/xml');

		return {
			name: file.replace(/\.gpx$/, ''),
			points: [...xml.querySelectorAll('trkpt')].map((node) => ({
				lat: Number(node.getAttribute('lat')),
				lon: Number(node.getAttribute('lon'))
			}))
		};
	}

	onMount(async () => {
		tracks = await Promise.all(
			steps
				.map((step) => step.gpx)
				.flat()
				.map(loadTrack)
		);
	});
</script>

<GPXOverview {tracks} height={200} />
