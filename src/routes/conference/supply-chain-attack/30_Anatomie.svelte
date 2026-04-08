<script>
	import { Slide } from 'svelte-reveal.js';

	const preinstallJson = `{
  "scripts": {
    "preinstall": "node setup_bun.js"
  }
}`;
</script>

<Slide>
	<Slide>
		<h1>Anatomie technique — Stage 1</h1>
		<p>Le paquet compromis contient un <strong>preinstall script</strong> dans <code>package.json</code> :</p>
		<pre><code class="json">{preinstallJson}</code></pre>
		<div class="fragment">
			<h2>Pourquoi <code>preinstall</code> ?</h2>
			<ul>
				<li>S'exécute <strong>avant</strong> l'installation</li>
				<li>S'exécute <strong>même si l'installation échoue</strong></li>
				<li>Le fichier <code>setup_bun.js</code> est volontairement <strong>non obfusqué</strong> et bien documenté — il se fait passer pour un installeur légitime du runtime <strong>Bun</strong></li>
			</ul>
		</div>
		<blockquote class="fragment">L'attaquant joue sur la confiance : le code a l'air normal à première vue.</blockquote>
	</Slide>

	<Slide>
		<h1>Anatomie technique — Stage 2</h1>
		<p><code>setup_bun.js</code> télécharge et exécute <code>bun_environment.js</code> — un fichier de <strong>10 Mo</strong>, obfusqué.</p>
		<div class="fragment">
			<h2>Ce qu'il fait</h2>
			<ol>
				<li><strong>Énumère les variables d'environnement</strong> : tokens npm, GitHub, AWS, Azure...</li>
				<li><strong>Scanne les fichiers SSH</strong>, <code>.env</code>, configs git, historique</li>
				<li><strong>Télécharge et exécute Trufflehog</strong> (outil légitime de détection de secrets) pour scanner tout le répertoire home</li>
				<li><strong>Collecte tout</strong> dans des fichiers JSON structurés : <code>cloud.json</code>, <code>environment.json</code>, <code>actionsSecrets.json</code></li>
			</ol>
		</div>
		<div class="fragment">
			<h2>Auto-réplication</h2>
			<p>S'il trouve un token npm valide → il <strong>republie</strong> les paquets accessibles avec le payload malicieux inclus. Le ver se propage.</p>
		</div>
	</Slide>

	<Slide>
		<h1>Exfiltration — Pas de C2, juste GitHub</h1>
		<p><strong>pas de serveur C2 (Command and Control) classique</strong>.</p>
		<ol>
			<li>Création d'un repo GitHub public "Sha1-Hulud: The Second Coming"</li>
			<li>Push les secrets volés</li>
		</ol>
		<div class="fragment">
			<h2>Intérêts</h2>
			<ul>
				<li>Le trafic vers <code>github.com</code> n'est <strong>jamais bloqué</strong> par les firewalls</li>
				<li>Pas de domaine suspect à détecter</li>
				<li>Les repos sont publics → les attaquants récupèrent les secrets en temps réel</li>
			</ul>
		</div>
		<div class="fragment">
			<h2>Persistance</h2>
			<p>Le malware installe la machine victime comme <strong>GitHub self-hosted runner</strong> → exécution de workflows arbitraires à distance, même après suppression du paquet.</p>
		</div>
	</Slide>

	<Slide>
		<h1>Le payload destructif — "Nothing to steal? Let's wipe."</h1>
		<p>Si le malware ne trouve <strong>ni token npm, ni token GitHub</strong> :</p>
		<ul>
			<li>Destruction du répertoire home de l'utilisateur</li>
			<li>Écrasement sécurisé + suppression de chaque fichier accessible en écriture</li>
		</ul>
		<p><strong>20% des machines compromises étaient des GitHub runners</strong> → des pipelines CI/CD entières détruites.</p>
		<blockquote>C'est la première supply chain attack npm avec un mécanisme de <strong>sabotage punitif</strong>.</blockquote>
	</Slide>
</Slide>
