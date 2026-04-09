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
		<h1>Se protéger — les basiques</h1>
		<ul>
			<li>Utiliser des jetons scoppés (local / CI)</li>
			<li>Obliger la signature des commits</li>
			<li>Utiliser des passphrase</li>
			<li>Toujours publier depuis une CI</li>
			<li>Trusted Publisher</li>
		</ul>
	</Slide>

	<Slide>
		<h1>Se protéger — package manager</h1>
		<p>
			Le choix du package manager est la <strong>première ligne de défense</strong>.
		</p>
		<div class="fragment">
			<h2>Choix du manager de paquets</h2>
			<table>
				<thead>
					<tr>
						<th>Gestionnaire de paquets</th>
						<th>Version</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					<tr><td><strong>Yarn</strong></td><td>v2.0</td><td>Jan. 2020</td></tr>
					<tr><td><strong>Bun*</strong></td><td>v1.0</td><td>Sept. 2023</td></tr>
					<tr><td><strong>pnpm**</strong></td><td>v10.0</td><td>Jan. 2025</td></tr>
					<tr><td><strong>npm***</strong></td><td>-</td><td>-</td></tr>
				</tbody>
			</table>
			<ul>
				<li>
					*Avec bun, 367 librairies "reconnues" utilisant un postinsall sont whitelisté.
				</li>
				<li>
					**Avec pnpm, <code>strictDepBuilds</code> permet de faire échouer l'installation
				</li>
				<li>
					***Avec npm, cela peut être configuré manuellement <code>--ignore-scripts</code
					>.
				</li>
			</ul>
		</div>
	</Slide>

	<Slide>
		<h1>Se protéger — gérer les exceptions</h1>
		<p>Contrôler quels paquets sont autorisés à exécuter des lifecycle scripts.</p>
		<table class="fragment">
			<thead>
				<tr>
					<th>Gestionnaire de paquets</th>
					<th>Paramètre</th>
					<th>Disponible depuis</th>
				</tr>
			</thead>
			<tbody>
				<tr
					><td><strong>Yarn</strong></td><td><code>enableScripts</code> (per-dep)</td><td
						>v2.0 (Jan. 2020)</td
					></tr
				>
				<tr
					><td><strong>Bun</strong></td><td><code>trustedDependencies</code> (per-dep)</td
					><td>v1.1 (Avr. 2024)</td></tr
				>
				<tr
					><td><strong>pnpm</strong></td><td><code>onlyBuiltDependencies</code></td><td
						>v9.1 (Mai 2024)</td
					></tr
				>
				<tr><td><strong>npm</strong></td><td>-</td><td>-</td></tr>
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
		<p>
			Bloquer l'installation de versions publiées trop récemment — le temps que la communauté
			détecte les paquets malicieux.
		</p>
		<pre><code class="yaml">{npmrcConfig}</code></pre>
		<blockquote>
			Les 796 paquets compromis ont été publiés et détectés en <strong>48h</strong> — un délai
			de 3 jours les aurait tous bloqués.
		</blockquote>
		<table>
			<thead>
				<tr>
					<th>Gestionnaire de paquets</th>
					<th>Paramètre</th>
					<th>Disponible depuis</th>
				</tr>
			</thead>
			<tbody>
				<tr
					><td><strong>npm</strong></td><td><code>minimum-release-age</code></td><td
						>v11.11 (feb. 2026)</td
					></tr
				>
				<tr
					><td><strong>pnpm</strong></td><td><code>minimum-release-age</code></td><td
						>v10.16 (sept. 2025)</td
					></tr
				>
				<tr
					><td><strong>Yarn</strong></td><td><code>npmMinimalAgeGate</code></td><td
						>v4.10.0 (sept. 2025)</td
					></tr
				>
				<tr><td><strong>Bun</strong></td><td>Support natif</td><td>v1.3 (oct. 2025)</td></tr
				>
			</tbody>
		</table>
	</Slide>

	<Slide>
		<h1>Se protéger — trustPolicy</h1>

		<p>
			Ce contrôle bloque l’installation lorsqu’une version d’un package a une authentification
			plus faible que les versions publiées précédemment.
		</p>
		<table>
			<thead>
				<tr>
					<th>Gestionnaire de paquets</th>
					<th>Paramètre</th>
					<th>Disponible depuis</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>pnpm</td>
					<td>trustPolicy: "no-downgrade"</td>
					<td>v9 (~2024)</td>
				</tr>
				<tr>
					<td>npm</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>Yarn</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>Bun</td>
					<td>—</td>
					<td>—</td>
				</tr>
			</tbody>
		</table>
	</Slide>

	<Slide>
		<h1>Se protéger — npm et CI/CD</h1>
		<p>Si vous utilisez npm :</p>
		<pre><code class="bash">{npmIgnoreScripts}</code></pre>
		<p>
			En CI/CD, toujours builder avec <code>--ignore-scripts</code> et exécuter les scripts nécessaires
			manuellement après audit.
		</p>
	</Slide>
</Slide>
