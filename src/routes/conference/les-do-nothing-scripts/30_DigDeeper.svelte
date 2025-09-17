<script>
	import { Notes, Slide } from 'svelte-reveal.js';
</script>

<Slide>
	<Slide>
		<h1>Les avantages</h1>
		<ul>
			<li>Possible automatisation incrémentale</li>
			<li class="fragment">Implémentation d'une librairie d'automatisation</li>
			<li class="fragment">Réduit l'énergie nécessaire</li>
			<li class="fragment">La procédure est plus sûre</li>
			<li class="fragment">Validation que les étapes sont simples</li>
			<li class="fragment">Facilite la relecture de code</li>
		</ul>
		<Notes>
			<ul>
				<li>car chaque étape est encapsulé dans une méthode</li>
				<li>-</li>
				<li>et donc la fatigue</li>
				<li>car on est plus concentré et on valide la dernière étape réalisée</li>
				<li>car versionné</li>
				<li>car écriture de l'étape explicitement</li>
			</ul>
		</Notes>
	</Slide>
	<Slide>
		<h1>Les inconvénients</h1>
		<ul>
			<li>Gripper un système</li>
			<li class="fragment">La procédure ne peut pas être interrompue</li>
			<li class="fragment">Pas de vision d'ensemble / pas d'estimation de durée</li>
			<li class="fragment">En cas d'automatisation partielle, le script peut "dérailler"</li>
			<li class="fragment">
				Le script n'est plus suivi dès que maîtrisé alors qu'il peut évoluer
			</li>
			<li class="fragment">Les critères de validation d'une étape ne sont pas explicités</li>
			<li class="fragment">Le nom "do nothing script" n'est pas très réaliste</li>
		</ul>
		<Notes>
			<ul>
				<li>car une fois la procédure établie, on ne bouge plus le système</li>
				<li>-</li>
				<li>-</li>
				<li>si on rentre l'email avec une faute de frappe</li>
				<li>-</li>
				<li>
					ce qui peut engendrer des erreurs si l'opérateur ne connaît pas bien la
					procédure
				</li>
				<li>car il encode la complexité</li>
			</ul>
		</Notes>
	</Slide>
	<Slide>
		<h1>Outils</h1>
		<ul>
			<li class="fragment">no tooling</li>
			<li class="fragment">
				<a href="https://github.com/braintree/runbook">
					<strong>Runbook</strong> : librairie Ruby pour la gestion de do nothing script partiellement
					automatisé
				</a>
			</li>
			<li class="fragment">
				<a href="https://apidocs.digital.ai/xl-release/4.5.x/reference_manual.html">
					<strong>XL Release</strong> : CI pour scripts partiellement automatisés
				</a>
			</li>
			<li class="fragment">
				<a href="https://xcfile.dev/">
					<strong>xc</strong> : script documenté et porté par un fichier markdown
				</a>
			</li>
			<li class="fragment">
				<a href="https://speedrun.nobackspacecrew.com/index.html">
					<strong>Speedrun</strong> : documentation markdown amélioré
				</a>
			</li>
			<li class="fragment">
				<a href="https://tools.o14.ai/do-nothing.html">générateur de do nothing script...</a
				>
			</li>
		</ul>
		<Notes>
			<ul>
				<li>runbook</li>
				<li>
					xl release : il va réaliser les étapes automatisées et pinguer les personnes qui
					doivent réaliser des actions
				</li>
				<li>
					xc : cad un script est définit par un fichier markdown mais sert également de
					doc
				</li>
				<li>Speedrun : add scripts to the doc</li>
			</ul>
		</Notes>
	</Slide>
</Slide>

<style>
	h1 {
		font-size: 1em !important;
		background-color: #ffffffbb;
		width: fit-content;
		border-radius: 16px;
		padding: 16px;
	}
</style>
