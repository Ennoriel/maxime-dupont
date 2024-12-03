<script lang="ts">
	import { experiences, projects, furtherProjects, talks } from '$lib/data';
	import { slide } from 'svelte/transition';

	let seeMore = $state(false);
</script>

<h1 class="my-16">Maxime Dupont 🦩</h1>

<h2 class="my-8 font-semibold">Expériences</h2>

<ul>
	{#each experiences as experience}
		<li>
			<div class="flex items-center justify-between">
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
	{#each projects as project}
		<li>{project.year} - {@html project.description}</li>
	{/each}
</ul>

{#if seeMore}
	<div transition:slide={{ duration: 800 }}>
		<h2 class="mb-8 pt-8 font-semibold">D'autres projets</h2>

		<ul>
			{#each furtherProjects as project}
				<li>
					<div class="flex items-end justify-between">
						<div>
							{project.year} - {project.name}
							{#if project.repo}<a target="_blank" href={project.repo}>↗&nbsp;repo</a
								>{/if}
							{#if project.app}<a target="_blank" href={project.app}>↗&nbsp;app</a
								>{/if}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
{/if}

{#if seeMore}
	<button onclick={() => (seeMore = false)}>Voir moins</button>
{:else}
	<button onclick={() => (seeMore = true)}>Voir plus</button>
{/if}

<h2 class="my-8 font-semibold">Conférences</h2>

<ul>
	{#each talks as talk}
		<li>
			<div>
				{talk.year} - <i>{talk.event}</i>
				{#if talk.link}
					<a target="_blank" href={talk.link.src}>↗&nbsp;{talk.link.text}</a>
				{/if}
			</div>
			<div>
				{talk.title}
			</div>
		</li>
	{/each}
</ul>

<h2 class="my-8 font-semibold">Contact</h2>

<ul>
	<li>Maxime Dupont</li>
	<li>Tèl : <a href="tel:+33660048709">06 60 04 87 09</a></li>
	<li>Email : <a href="mailto:m.dupont103@gmail.com">m.dupont103@gmail.com</a></li>
</ul>
