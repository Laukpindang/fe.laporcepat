export const OPD_OPTIONS = [
	'Dinas PUPR',
	'Dinas Perhubungan',
	'Dinas Lingkungan Hidup',
	'Dinas Kesehatan',
	'Dinas Pendidikan'
] as const

export type Opd = (typeof OPD_OPTIONS)[number]
