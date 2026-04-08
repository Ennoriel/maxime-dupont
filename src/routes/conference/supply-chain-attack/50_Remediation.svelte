<script>
	import { Slide } from 'svelte-reveal.js';
</script>

<Slide>
	<h1>Remédiation — Les premières heures</h1>
	<p>Si vous découvrez que vous êtes compromis :</p>
	<table>
		<thead>
			<tr>
				<th>Action</th>
				<th>Détail</th>
			</tr>
		</thead>
		<tbody>
			<tr><td><strong>Ne pas supprimer</strong> le repo malveillant</td><td>Le privatiser immédiatement pour stopper l'exposition (préserver les traces forensiques)</td></tr>
			<tr><td><strong>Désactiver</strong> les workflows malicieux</td><td>Vérifier tous les self-hosted runners</td></tr>
			<tr><td><strong>Supprimer</strong> les paquets infectés</td><td>Reverter aux versions saines connues, surtout sur les registres internes</td></tr>
			<tr><td><strong>Révoquer TOUS les secrets</strong></td><td>Pas seulement ceux trouvés dans le repo — <strong>tous</strong></td></tr>
			<tr><td><strong>Auditer les accès</strong></td><td>Qui a installé quoi, quand, sur quelle machine</td></tr>
		</tbody>
	</table>
	<blockquote>Révoquer uniquement les secrets trouvés ne suffit pas : Trufflehog a peut-être trouvé des secrets que vous n'avez pas vus.</blockquote>
</Slide>
