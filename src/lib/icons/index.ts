import type { Component } from 'svelte';
import Arrow from './Arrow.svelte';
import Email from './Email.svelte';
import Github from './Github.svelte';
import Linkedin from './Linkedin.svelte';
import Presentation from './Presentation.svelte';
import Scroll from './Scroll.svelte';
import Youtube from './Youtube.svelte';

export const Icons: Record<string, Component> = {
	arrow: Arrow,
	email: Email,
	github: Github,
	linkedin: Linkedin,
	presentation: Presentation,
	scroll: Scroll,
	youtube: Youtube
};
