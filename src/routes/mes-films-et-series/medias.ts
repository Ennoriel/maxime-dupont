// src/types/media.ts

export type MediaFormat = 'movie' | 'series' | 'movieSeries' | 'animatedMovie' | 'animeSeries';

export interface MediaItem {
	title: string;
	format: MediaFormat;
	director: string;
	releasePeriod: string;
	platform: string;
	themes: string[];
}

export interface MediaFilters {
	format?: string;
	platform?: string;
	year?: number | 'all';
}
