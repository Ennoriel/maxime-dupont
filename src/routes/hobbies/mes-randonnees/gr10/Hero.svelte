<script lang="ts">
	let { steps }: { steps: Step[] } = $props();

	const totalDistance = $derived(
		steps.reduce((sum, step) => sum + parseFloat(step.distance.replace(',', '.')), 0)
	);

	const totalElevation = $derived(
		steps.reduce(
			(sum, step) => sum + Number((step.denivele_positif || '0').replace(/[^\d]/g, '')),
			0
		)
	);
</script>

<header class="mb-12 text-center">
	<h1 class="text-5xl font-black text-slate-800">🏔️ GR10 Pyrénées</h1>

	<p class="mt-3 text-lg text-slate-500">Itinéraire</p>

	<div class="mt-8 flex flex-wrap justify-center gap-6">
		<div class="rounded-2xl bg-white px-6 py-4 shadow">
			<div class="text-sm text-slate-500">Etapes</div>
			<div class="text-3xl font-bold">{steps.length}</div>
		</div>

		<div class="rounded-2xl bg-white px-6 py-4 shadow">
			<div class="text-sm text-slate-500">Jours</div>
			<div class="text-3xl font-bold">7</div>
		</div>

		<div class="rounded-2xl bg-white px-6 py-4 shadow">
			<div class="text-sm text-slate-500">Distance</div>
			<div class="text-3xl font-bold text-sky-600">
				{totalDistance.toFixed(1)} km
			</div>
		</div>

		<div class="rounded-2xl bg-white px-6 py-4 shadow">
			<div class="text-sm text-slate-500">Dénivelé</div>
			<div class="text-3xl font-bold text-emerald-600">
				+{totalElevation.toLocaleString()} m
			</div>
		</div>
	</div>
</header>
