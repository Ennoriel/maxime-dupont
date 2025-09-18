<script>
	import { Notes, Slide } from 'svelte-reveal.js';
	import python from './wf/main_article.py?raw';
</script>

<Slide>
	<Slide>
		<h1>L'historique</h1>
		<ul>
			<li>2019 - article de blog</li>
			<span class="fragment">
				<li>2019 - partage sur Y Combinator News (124 📜)</li>
				<li>2021 - partage sur Y Combinator News (230 📜)</li>
				<li>2025 - partage sur Y Combinator News (137 📜)</li>
			</span>
		</ul>
	</Slide>
	<Slide>
		<h1>Le problème</h1>
		<blockquote>
			Certaines taches demandent <span class="pen-highlighted">beaucoup d'attention</span>,
			mais très <span class="pen-highlighted">peu de réflexion</span>. Elles exigent toute
			notre attention, mais notre attention n'est pas récompensée par des problèmes
			intéressants ou des solutions satisfaisantes.
		</blockquote>
	</Slide>
	<Slide>
		<h1>L'exemple</h1>
		<ol>
			<li>Créez une paire de clés SSH pour l'utilisateur.</li>
			<li>Commiter la clé sur Github et pousser sur le repo distant.</li>
			<li>Attendre que le build soit terminé.</li>
			<li>Trouver l'adresse électronique de l'utilisateur dans le LDAP.</li>
			<li>Envoyez à l'utilisateur sa clé privée via 1Password.</li>
		</ol>
		<Notes>Mise en production, génération d'un backup</Notes>
	</Slide>
	<Slide>
		<img
			src="/conference/do-nothing-script/pika-surprised.png"
			alt="very surprised pikachu"
			style="height:40vh;"
		/>
	</Slide>
	<Slide>
		<h1>L'exemple</h1>
		<ol>
			<li>Créez une paire de clés SSH pour l'utilisateur.</li>
			<li>Commiter la clé sur Github et pousser sur le repo distant.</li>
			<li>Attendre que le build soit terminé.</li>
			<li>Trouver l'adresse électronique de l'utilisateur dans le LDAP.</li>
			<li>Envoyez à l'utilisateur sa clé privée via 1Password.</li>
		</ol>
	</Slide>
	<Slide>
		<h1>La (mauvaise) idée</h1>
		<p>Automatiser complètement la procédure</p>
		<p>Les inconvénients :</p>
		<ul>
			<li>Long à faire pour le gain de temps</li>
			<li>Ne supprimerait pas complètement les tâches manuelles</li>
		</ul>
	</Slide>
	<Slide>
		<h1>La (bonne) idée</h1>
		<p>Automatiser la validation des étapes manuelles</p>
		<blockquote>
			Un script « do-nothing » est un script qui encode les instructions d'une procédure, en
			encapsulant chaque étape dans une fonction.
		</blockquote>
	</Slide>
	<Slide>
		<h1>La (bonne) idée</h1>
		<pre>
			<code class="python" data-line-numbers="3-4|6-10|12-17|19-23">{python}</code>
		</pre>
	</Slide>
</Slide>

<!-- 
TODO:
- changer style titres
-->

<style>
	h1 {
		font-size: 1em !important;
		background-color: #ffffffbb;
		width: fit-content;
		border-radius: 16px;
		padding: 16px;
	}

	code {
		color: black !important;
		background-color: rgb(245, 245, 245) !important;
	}
	code :global(.hljs-keyword) {
		color: rgb(196, 108, 0);
	}
	code :global(.hljs-title) {
		color: rgb(0, 144, 0);
	}
	code :global(.hljs-string) {
		color: rgb(255, 0, 191);
	}
	code :global(.hljs-built_in) {
		color: rgb(0, 38, 255);
	}
</style>
