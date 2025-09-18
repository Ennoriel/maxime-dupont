<script>
	import { Notes, Slide } from 'svelte-reveal.js';
</script>

<Slide backgroundImage="/conference/do-nothing-script/paresseux-zootopie.jpg">
	<h1>Les Do-Nothing Scripts : une nouvelle approche pour les procédures manuelles</h1>
</Slide>
<Slide>
	<p>
		Je vais vous raconter une histoire...<br />
		<span class="fragment">...une histoire qui remonte à 2019</span>
	</p>
	<img
		class="fragment"
		src="/conference/do-nothing-script/gandalf-pipe.jpg"
		alt="Gandalf qui fume la pipe"
	/>
</Slide>
<Slide
	backgroundIframe="https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/"
	backgroundInteractive
>
	<span></span>
</Slide>
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
	<p style:font-size="0.75em">OVHcloud, Alternatiba, Shifters</p>
	<p style:font-size="0.75em">svelte, écologie, plantes</p>
	<p style:font-size="0.75em">maximedupont.fr - m.dupont103@gmail.com</p>
	<Notes>ce talk n'engage que moi</Notes>
</Slide>

<style>
	h1 {
		font-size: 1em !important;
		background-color: #ffffffbb;
		width: fit-content;
		border-radius: 16px;
		padding: 16px;
	}

	.queer {
		display: inline-block;
		transform: scale(-1, 1);
	}
</style>
