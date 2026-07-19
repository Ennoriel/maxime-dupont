interface Accommodation {
	nom?: string;
	date?: string;
	formule?: string;
}

interface Step {
	etape: number;
	titre: string;
	commune: string;
	duree?: string;
	distance: string;
	denivele_positif?: string;
	level?: string;
	logement?: Accommodation | null;
	gpx: Array<string>;
}
