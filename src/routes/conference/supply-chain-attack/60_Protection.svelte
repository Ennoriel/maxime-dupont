<script>
	import { Slide } from 'svelte-reveal.js';

	const npmrcConfig = `# .npmrc (pnpm)
minimum-release-age=3d
minimum-release-age-exclude=my-org`;

	const npmIgnoreScripts = `npm config set ignore-scripts true     # Désactive tous les lifecycle scripts
npm install --ignore-scripts           # Par installation`;
</script>

<Slide>
	<Slide>
		<h1>Se protéger — package manager</h1>
		<p>Le vecteur d'entrée = <code>preinstall</code> / <code>postinstall</code>. Le choix du package manager est la <strong>première ligne de défense</strong>.</p>
		<div class="fragment">
			<h2>Choix du manager de paquets</h2>
			<table>
			<thead>
				<tr>
					<th>Package manager</th>
					<th>Version</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				<tr><td><strong>Yarn</strong></td><td>v2.0</td><td>Jan. 2020</td></tr>
				<tr><td><strong>Bun</strong></td><td>v1.0</td><td>Sept. 2023</td></tr>
				<tr><td><strong>pnpm</strong></td><td>v10.0</td><td>Jan. 2025</td></tr>
				<tr><td><strong>npm</strong></td><td>-</td><td>-</td></tr>
			</tbody>
		</table>
		</div>
	</Slide>

	<Slide>
		<h1>Se protéger — strictDepBuilds</h1>
		<p>Contrôler quels paquets sont autorisés à exécuter des lifecycle scripts.</p>
		<table class="fragment">
			<thead>
				<tr>
					<th>Package manager</th>
					<th>Feature</th>
					<th>Disponible depuis</th>
				</tr>
			</thead>
			<tbody>
				<tr><td><strong>pnpm</strong></td><td><code>strictDepBuilds + onlyBuiltDependencies</code></td><td>v9.1 (mai 2024)</td></tr>
				<tr><td><strong>Yarn</strong></td><td><code>enableScripts</code> (per-dep)</td><td>v2.0 (jan. 2020)</td></tr>
				<tr><td><strong>npm</strong></td><td><code>--ignore-scripts</code> + allow list</td><td>-</td></tr>
			</tbody>
		</table>
		<div class="fragment">
			<h2>Avantages</h2>
			<ul>
				<li>List explicite des dépendances</li>
				<li>Approbation manuellement</li>
				<li>Visible en code review</li>
			</ul>
		</div>
	</Slide>

	<Slide>
		<h1>Se protéger — minimumReleaseAge</h1>
		<p>Bloquer l'installation de versions publiées trop récemment — le temps que la communauté détecte les paquets malicieux.</p>
		<pre><code class="yaml">{npmrcConfig}</code></pre>
		<blockquote>Les 796 paquets compromis ont été publiés et détectés en <strong>48h</strong> — un délai de 3 jours les aurait tous bloqués.</blockquote>
		<table>
			<thead>
				<tr>
					<th>Package manager</th>
					<th>Feature</th>
					<th>Disponible depuis</th>
				</tr>
			</thead>
			<tbody>
				<tr><td><strong>npm</strong></td><td><code>minimum-release-age</code></td><td>v11.11 (feb. 2026)</td></tr>
				<tr><td><strong>pnpm</strong></td><td><code>minimum-release-age</code></td><td>v10.16 (sept. 2025)</td></tr>
				<tr><td><strong>Yarn</strong></td><td><code>npmMinimalAgeGate</code></td><td>v4.10.0 (sept. 2025)</td></tr>
				<tr><td><strong>Bun</strong></td><td>Support natif</td><td>v1.3 (oct. 2025)</td></tr>
			</tbody>
		</table>
	</Slide>

	<Slide>
		<h1>Se protéger — npm et CI/CD</h1>
		<p>Si vous ne pouvez pas utiliser pnpm :</p>
		<pre><code class="bash">{npmIgnoreScripts}</code></pre>
		<p>En CI/CD, toujours builder avec <code>--ignore-scripts</code> et exécuter les scripts nécessaires manuellement après audit.</p>
	</Slide>

	<Slide>
		<h1>Se protéger — Les tokens et secrets</h1>
		<table>
			<thead>
				<tr>
					<th>Pratique</th>
					<th>Pourquoi</th>
				</tr>
			</thead>
			<tbody>
				<tr><td><strong>Tokens à durée de vie courte</strong></td><td>Un token npm volé expire avant d'être exploité</td></tr>
				<tr><td><strong>Tokens scopés</strong></td><td>Limiter l'accès au strict nécessaire (publish sur 1 paquet, pas tous)</td></tr>
				<tr><td><strong>MFA obligatoire</strong></td><td>sur npm ET GitHub — bloque la prise de contrôle de compte</td></tr>
				<tr><td><strong>Pas de secrets en env vars en CI</strong></td><td>Utiliser un vault (HashiCorp, GitHub OIDC)</td></tr>
				<tr><td><strong>Restreindre le réseau sortant</strong></td><td>Whitelist de domaines autorisés depuis les runners</td></tr>
			</tbody>
		</table>
	</Slide>

	<Slide>
		<h1>Se protéger — Audit et monitoring</h1>
		<ul>
			<li><strong>Lockfiles</strong> : <code>package-lock.json</code> / <code>pnpm-lock.yaml</code> versionnés et revus en PR</li>
			<li><strong><code>npm audit</code></strong> / <strong><code>pnpm audit</code></strong> dans la CI — bloquant en cas de vulnérabilité critique</li>
			<li><strong>Socket.dev</strong> / <strong>Snyk</strong> / <strong>GitGuardian</strong> : alertes en temps réel sur les paquets compromis</li>
			<li><strong>Surveiller les publications npm</strong> de vos paquets internes (alertes sur version bump inattendu)</li>
			<li><strong>Auditer les GitHub runners</strong> : lister régulièrement les self-hosted runners et supprimer ceux non reconnus</li>
		</ul>
	</Slide>
</Slide>
