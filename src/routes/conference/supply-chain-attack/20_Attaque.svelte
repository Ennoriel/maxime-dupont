<script>
	import { Notes, Slide } from 'svelte-reveal.js';
</script>

<Slide>
	<Slide>
		<h1>Partie 1 — L'attaque</h1>
	</Slide>

	<Slide>
		<h1>C'est quoi une supply chain attack ?</h1>
		<p>
			Vous n'attaquez pas la cible directement. Vous compromettez <strong
				>un de ses fournisseurs</strong
			>.
		</p>
		<ol>
			<li>Un attaquant compromet un paquet npm populaire</li>
			<li>Le paquet npm est installé par un développeur / une CI</li>
			<li>Cela donne accès aux secrets, aux tokens et aux infra cloud</li>
		</ol>
	</Slide>

	<Slide>
		<h1>Shai-Hulud 2.0 — "The Second Coming"</h1>
		<p>
			Une première attaque a eu lieu en septembre 2025. Deux mois plus tard, une deuxième
			version voit le jour.
		</p>
		<table class="fragment">
			<thead>
				<tr>
					<th>Métrique</th>
					<th>Valeur</th>
				</tr>
			</thead>
			<tbody>
				<tr><td>Paquets npm compromis</td><td><strong>796</strong></td></tr>
				<tr><td>Téléchargements hebdo cumulés</td><td><strong>20 millions+</strong></td></tr
				>
				<tr><td>Repos GitHub exposés</td><td><strong>25 000+</strong></td></tr>
				<tr><td>Secrets exfiltrés</td><td><strong>294 842</strong></td></tr>
				<tr><td>Durée de l'attaque</td><td><strong>48h</strong> (21-23 nov.)</td></tr>
			</tbody>
		</table>
		<div class="fragment">
			<br />
			<h2>Victimes notables</h2>
			<p>Zapier, PostHog, Postman, ENS Domains</p>
		</div>
		<Notes>
			<ul style:color="red">
				<li>qui est dev front ?</li>
				<li>qui a des secrets qui ne concerne pas que le front ?</li>
			</ul>
		</Notes>
	</Slide>
</Slide>
