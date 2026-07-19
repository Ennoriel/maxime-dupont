<script lang="ts">
	let { steps }: { steps: Step[] } = $props();

	const levelColors: Record<string, string> = {
		Easy: 'bg-green-100 text-green-700',
		Medium: 'bg-yellow-100 text-yellow-700',
		Hard: 'bg-red-100 text-red-700'
	};
</script>

<div class="relative mt-12 ml-3 border-l-2 border-sky-200">
	{#each steps as step}
		<section class="relative pb-5 pl-7">
			<!-- timeline marker -->
			<div
				class="absolute top-2 -left-2.5 h-5 w-5 rounded-full border-4 border-white bg-sky-500 shadow"
			></div>

			<article class="rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
				<!-- Header -->
				<div class="flex items-start justify-between gap-3">
					<div>
						<div class="text-xs font-medium tracking-wide text-slate-400 uppercase">
							Étape {step.etape}
						</div>

						<h2 class="font-bold text-slate-800">
							{step.titre}
						</h2>

						<p class="text-sm text-slate-500">
							📍 {step.commune}
						</p>
					</div>

					{#if step.level}
						<span
							class={`rounded-full px-2 py-1 text-xs font-semibold ${
								levelColors[step.level] ?? 'bg-slate-100 text-slate-600'
							}`}
						>
							{step.level}
						</span>
					{/if}
				</div>

				<!-- Stats -->
				<div class="flex flex-wrap items-center justify-between">
					<div class="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
						{#if step.duree}
							<span>⏱ {step.duree}</span>
						{/if}

						{#if step.distance}
							<span>🥾 {step.distance}</span>
						{/if}

						{#if step.denivele_positif}
							<span>⛰️ {step.denivele_positif}</span>
						{/if}
					</div>

					{#if step.gpx}
						<div class="mt-3 flex gap-2">
							{#each step.gpx as gpx}
								<a
									href="/hobbies/mes-randonnees/gr10/{gpx}"
									download
									class="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-sky-100 hover:text-sky-700"
								>
									⬇️ Télécharger le GPX
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Accommodation -->
				{#if step.logement}
					<div class="mt-3 border-t border-slate-100 pt-3 text-sm">
						<div class="font-semibold text-slate-700">
							🛏️ {step.logement.nom}
						</div>

						<div class="text-slate-500">
							{#if step.logement.date}
								📅 {step.logement.date}
							{/if}

							{#if step.logement.formule}
								<span> · 🍽️ {step.logement.formule}</span>
							{/if}
						</div>
					</div>
				{:else}
					<div class="mt-3 border-t border-slate-100 pt-3 text-sm">
						<div class="font-semibold text-slate-700">🛏️ Pas de nuitée</div>
					</div>
				{/if}
			</article>
		</section>
	{/each}
</div>
