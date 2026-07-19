export type InterestEntry = {
	label: string;
	emoji: string;
	url?: string;
};

export const interests = [
	{
		label: 'Loisirs',
		entries: [
			{
				label: 'Jardinage',
				emoji: '🌱'
			},
			{
				label: 'Bricolage',
				emoji: '🪚'
			},
			{
				label: 'Jeux de société',
				emoji: '🎲'
			},
			{
				label: 'Cinéma',
				emoji: '🎬',
				url: '/hobbies/mes-films-et-series'
			}
		]
	},
	{
		label: 'Sports',
		entries: [
			{
				label: 'Randonnée',
				emoji: '🚶‍♂️',
				url: '/hobbies/mes-randonnees/gr10'
			},
			{
				label: 'Camping',
				emoji: '⛺'
			},
			{
				label: 'Course à pieds',
				emoji: '🏃‍♂️'
			},
			{
				label: 'Aviron',
				emoji: '🚣‍♂️'
			}
		]
	},
	{
		label: 'Idées',
		entries: [
			{
				label: 'Politique',
				emoji: '🏫'
			},
			{
				label: 'Écologie',
				emoji: '🌍'
			}
		]
	},
	{
		label: 'Intérêts',
		entries: [
			{
				label: 'Estampes',
				emoji: '🎨'
			}
		]
	}
];
