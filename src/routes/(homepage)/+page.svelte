<script lang="ts">
	import LinkIcon from '$lib/components/LinkIcon.svelte';
	import { experiences, projects, furtherProjects, talks } from '$lib/data';
	import Email from '$lib/icons/Email.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import { fade, slide } from 'svelte/transition';

	let seeMore = $state(false);
</script>

<h1 class="mt-16 mb-4 text-center">
	<span class="queer">🦩</span>
	Maxime Dupont 🦩
</h1>

<p class="mb-16 text-center">full-stack · écologie · accessibilité · craft</p>

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

<ul class="pb-8">
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

<div class="relative">
	{#if !seeMore}
		<button
			class="absolute -mt-6 cursor-pointer hover:underline"
			onclick={() => (seeMore = true)}
			in:fade={{ duration: 400, delay: 800 }}
			out:fade={{ duration: 400 }}
		>
			Voir plus
		</button>
	{/if}
</div>

{#if seeMore}
	<div transition:slide={{ duration: 1200 }}>
		<h2 class="mb-8 font-semibold">Autres projets</h2>

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
	<button onclick={() => (seeMore = false)} class="cursor-pointer pt-2 hover:underline">
		Voir moins
	</button>
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

<ul class="contact">
	<li>Maxime Dupont</li>
	<li>
		<div class="flex">
			<Email role="image" aria-label="Email" width="18" height="18" />
			<a href="mailto:m.dupont103@gmail.com"> m.dupont103@gmail.com </a>
		</div>
	</li>
	<li>
		<div class="flex">
			<Github role="image" aria-label="Profil Github" width="18" height="18" />
			<a href="https://github.com/ennoriel/"> Github </a>
			·
			<Linkedin role="image" aria-label="Profil LinkedIn" width="18" height="18" />
			<a href="https://www.linkedin.com/in/maxime-dupont-dev/" aria-label="Profil LinkedIn">
				LinkedIn
			</a>
		</div>
	</li>
</ul>

<style>
	.queer {
		display: inline-block;
		transform: scale(-1, 1);
	}

	.contact .flex {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		vertical-align: top;
	}

	.contact .flex :global(svg) {
		color: #62748e;
	}
</style>
