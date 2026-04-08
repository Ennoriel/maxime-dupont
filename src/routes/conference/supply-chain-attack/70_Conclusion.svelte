<script>
	import { Slide } from 'svelte-reveal.js';
</script>

<Slide>
	<Slide>
		<h1>Résumé — Ce qu'il faut retenir</h1>
		<ol>
			<li><strong>npm est un vecteur d'attaque majeur</strong> — la confiance dans l'écosystème est exploitée</li>
			<li><strong>Les preinstall scripts sont dangereux</strong> — les désactiver par défaut</li>
			<li><strong>Les tokens sont la cible n°1</strong> — courts, scopés, protégés par MFA</li>
			<li><strong>La CI/CD est une surface d'attaque</strong> — traiter les runners comme des machines sensibles</li>
			<li><strong>Defense in depth</strong> — pas une seule mesure, mais un empilement de protections</li>
			<li><strong>Shai-Hulud 2.0 a introduit le sabotage</strong> — l'attaquant détruit ce qu'il ne peut pas voler</li>
		</ol>
	</Slide>

	<Slide>
		<h1>Pour aller plus loin</h1>
		<ul>
			<li><a href="https://www.microsoft.com/en-us/security/blog/2025/12/09/shai-hulud-2-0-guidance-for-detecting-investigating-and-defending-against-the-supply-chain-attack/">Microsoft — Guidance for detecting and defending</a></li>
			<li><a href="https://www.wiz.io/blog/shai-hulud-2-0-ongoing-supply-chain-attack">Wiz — 25K+ Repos Exposed</a></li>
			<li><a href="https://unit42.paloaltonetworks.com/npm-supply-chain-attack/">Unit42 — npm Supply Chain Attack</a></li>
			<li><a href="https://blog.checkpoint.com/research/shai-hulud-2-0-inside-the-second-coming-the-most-aggressive-npm-supply-chain-attack-of-2025/">Check Point — Most Aggressive NPM Supply Chain Attack of 2025</a></li>
			<li><a href="https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/">Datadog Security Labs — npm worm analysis</a></li>
			<li><a href="https://securelist.com/shai-hulud-2-0/118214/">Kaspersky Securelist — "Nothing to steal? Let's wipe."</a></li>
			<li><a href="https://research.jfrog.com/post/shai-hulud-the-second-coming-remediation-guidance/">JFrog — Protection & Response Guide</a></li>
			<li><a href="https://snyk.io/blog/shai-hulud-post-mortem/">Snyk — Building a Resilient Software Supply Chain</a></li>
		</ul>
	</Slide>

	<Slide>
		<h1>Questions ?</h1>
		<p>Posez vos questions — sur l'attaque, les mesures de protection.</p>
	</Slide>
</Slide>
