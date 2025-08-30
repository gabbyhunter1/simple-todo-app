export const filtersList = ['all', 'active', 'completed'] as const;

export type FilterType = (typeof filtersList)[number];
