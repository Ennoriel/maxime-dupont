<script lang="ts">
	import { steps } from './data.js';
	import Hero from './Hero.svelte';
	import Timeline from './Timeline.svelte';
	import Track from './Track.svelte';
</script>

<div class="min-h-screen bg-linear-to-br from-sky-100 via-white to-emerald-100">
	<div class="mx-auto max-w-3xl px-6 py-12">
		<Hero {steps} />

		<Track {steps} />

		<Timeline {steps} />
	</div>
</div>
