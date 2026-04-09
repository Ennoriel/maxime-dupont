<script>
	import { Slide } from 'svelte-reveal.js';
</script>

<Slide>
	<Slide>
		<h1>
			Dans les entrailles d'une supply chain attack<br />REX de Shai-Hulud 2.0 et
			enseignements
		</h1>
		<div class="speaker-block">
			<p>Maxime Dupont</p>
			<p>OVHcloud</p>
		</div>
	</Slide>

	<Slide>
		<h1>Agenda</h1>
		<ol>
			<li><strong>L'attaque</strong> — contexte, chronologie et mécanisme technique</li>
			<li><strong>Les enseignements</strong> — détection, remédiation et protection</li>
			<li><strong>Questions / Réponses</strong></li>
		</ol>
	</Slide>

	<Slide backgroundImage="/conference/supply-chain-attack/shai-hulud.webp">&nbsp;</Slide>

	<Slide>
		<img
			src="/maxime-face.png"
			alt="portrait de Maxime"
			style:height="40vh"
			style:transform="scaleX(-1)"
			style:margin="auto"
		/>
		<p style:font-size="0.75em">
			<span class="queer">🦩</span>
			Maxime Dupont 🦩
		</p>
		<p style:font-size="0.75em">OVHcloud · Alternatiba · Shifters</p>
		<p style:font-size="0.75em">Jardinage · Bricolage · Jeux de société · Cinéma</p>
		<p style:font-size="0.75em">maximedupont.fr - m.dupont103@gmail.com</p>
	</Slide>
</Slide>

<style>
	.speaker-block {
		margin-top: 2em;
		font-size: 0.8em;
	}

	.queer {
		display: inline-block;
		transform: scale(-1, 1);
	}
</style>
