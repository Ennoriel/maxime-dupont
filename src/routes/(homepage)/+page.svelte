<script lang="ts">
	import LinkIcon from '$lib/components/LinkIcon.svelte';
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

<ul class="mb-2">
	{#each projects as project}
		<li>
			<div class="flex items-center justify-between">
				<div>
					{project.year} - {project.description}
				</div>
				<div class="flex gap-2">
					{#each project.links as link}
						<LinkIcon {...link} />
					{/each}
				</div>
			</div>
		</li>
	{/each}
</ul>

{#if !seeMore}
	<button onclick={() => (seeMore = true)} class="cursor-pointer">Voir plus</button>
{/if}

{#if seeMore}
	<div transition:slide={{ duration: 800 }}>
		<h2 class="mb-8 pt-8 font-semibold">Autres projets</h2>

		<ul>
			{#each furtherProjects as project}
				<li>
					<div class="flex items-center justify-between pl-12 -indent-12">
						<div>
							{project.year} - {project.description}
						</div>
						<div class="flex shrink-0 gap-1.5">
							{#each project.links as link}
								<LinkIcon {...link} />
							{/each}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
{/if}

{#if seeMore}
	<button onclick={() => (seeMore = false)} class="cursor-pointer">Voir moins</button>
{/if}

<h2 class="my-8 font-semibold">Conférences</h2>

<ul>
	{#each talks as talk}
		<li>
			<div class="flex items-center justify-between pl-12 -indent-12">
				<div class="leading-[22px]">
					{talk.year} - {talk.title} <i class="whitespace-nowrap">{talk.event}</i>
				</div>
				<div class="flex shrink-0 gap-1.5">
					{#each talk.links as link}
						<LinkIcon {...link} />
					{/each}
				</div>
			</div>
		</li>
	{/each}
</ul>

<h2 class="my-8 font-semibold">Contact</h2>

<ul>
	<li>Maxime Dupont</li>
	<li>
		<div class="flex">
			<img src="/icons/email.svg" alt="" width="18" height="18" />
			<a class="flex" href="mailto:m.dupont103@gmail.com"> m.dupont103@gmail.com </a>
		</div>
	</li>
	<li>
		<div class="flex">
			<img src="/icons/github.svg" alt="" width="18" height="18" />
			<a href="https://github.com/ennoriel/" aria-label="Profil Github"> Github </a>
			· <img src="/icons/linkedin.svg" alt="" width="18" height="18" />
			<a href="https://www.linkedin.com/in/maxime-dupont-dev/" aria-label="Profil LinkedIn">
				LinkedIn
			</a>
		</div>
	</li>
</ul>

<style>
	.flex {
		display: inline-flex;
		gap: 8px;
		vertical-align: top;
	}
</style>
