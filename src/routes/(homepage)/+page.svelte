<script lang="ts">
	import { accordion } from '$lib/chyme.utils';
	import { data } from '$lib/data';

	let seeMore = $state(false);
</script>

<h1 class="my-16">Maxime Dupont 🦩</h1>

<h2 class="my-8 font-semibold">Expériences</h2>

<ul>
	{#each data.experiences as experience}
		<li>
			<div class="flex items-end justify-between md:items-center">
				<div>
					{experience.period} - {experience.job}
				</div>
				<div class="text-xs text-slate-600">
					{experience.company}
				</div>
			</div>
		</li>
	{/each}
</ul>

<h2 class="my-8 font-semibold">Projets</h2>

<ul>
	{#each data.projects as project}
		<li>{project.year} - {@html project.description}</li>
	{/each}
</ul>

<ul class="-mt-2 mb-4" use:accordion={seeMore} aria-hidden={seeMore ? 'false' : 'true'}>
	{#each data.furtherProjects as project}
		<li>
			<div class="flex items-end justify-between">
				<div>
					{project.year} - {project.name}
					{#if project.repo}<a href={project.repo}>↗&nbsp;repo</a>{/if}
					{#if project.app}<a href={project.app}>↗&nbsp;app</a>{/if}
				</div>
			</div>
		</li>
	{/each}
</ul>

{#if seeMore}
	<button onclick={() => (seeMore = false)}>Voir moins</button>
{:else}
	<button onclick={() => (seeMore = true)}>Voir plus</button>
{/if}

<h2 class="my-8 font-semibold">Conférences</h2>

<ul>
	{#each data.talks as talk}
		<li>
			<div>
				{talk.year} - <i>{talk.event}</i>
				{#if talk.link}
					<a href={talk.link.src}>↗&nbsp;{talk.link.text}</a>
				{/if}
			</div>
			<div>
				{@html talk.title}
			</div>
		</li>
	{/each}
</ul>
