import type { MediaFilters, MediaItem } from './medias';

export function getInitialFilterValues(data: MediaItem[]) {
	const formats = [...new Set(data.map((item) => item.format))].sort((f1, f2) =>
		getFormatLabel(f1).localeCompare(getFormatLabel(f2))
	);

	const platforms = [...new Set(data.map((item) => item.platform))].sort((p1, p2) =>
		p1.localeCompare(p2)
	);

	const years = [
		...new Set(
			data.flatMap((item) => {
				const { start, end } = parseReleasePeriod(item.releasePeriod);

				return Array.from({ length: end - start + 1 }, (_, i) => start + i);
			})
		)
	].sort((a, b) => b - a);

	return {
		formats: ['all', ...formats],
		platforms: ['all', ...platforms],
		years: ['all' as const, ...years]
	};
}

export function parseReleasePeriod(value: string): { start: number; end: number } {
	const matches = value.match(/\d{4}/g);

	if (!matches?.length) {
		return {
			start: 0,
			end: 0
		};
	}

	const years = matches.map(Number);

	// Example: "2022"
	if (years.length === 1) {
		return {
			start: years[0]!,
			end: years[0]!
		};
	}

	// Example: "2010–2019"
	return {
		start: years[0]!,
		end: years[1]!
	};
}

export function matchesYear(releasePeriod: string, year: number): boolean {
	const { start, end } = parseReleasePeriod(releasePeriod);

	return year >= start && year <= end;
}

export function sortByNewest(a: MediaItem, b: MediaItem): number {
	const aYear = parseReleasePeriod(a.releasePeriod).start;

	const bYear = parseReleasePeriod(b.releasePeriod).start;

	return bYear - aYear;
}

export function filterMedia(items: MediaItem[], filters: MediaFilters): MediaItem[] {
	return items
		.filter((item) => {
			if (!filters.format || filters.format === 'all') {
				return true;
			}

			return item.format === filters.format;
		})
		.filter((item) => {
			if (!filters.platform || filters.platform === 'all') {
				return true;
			}

			return item.platform === filters.platform;
		})
		.filter((item) => {
			if (!filters.year || filters.year === 'all') {
				return true;
			}

			return matchesYear(item.releasePeriod, filters.year);
		})
		.sort(sortByNewest);
}

export function getFormatLabel(format: string) {
	const labels = {
		all: 'Tous',
		animatedMovie: "Film d'animation",
		anime: 'Anime',
		series: 'Série',
		movie: 'Film'
	};
	type Format = keyof typeof labels;

	return format in labels ? labels[format as Format] : labels.all;
}
