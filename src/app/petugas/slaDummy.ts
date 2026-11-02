// data/sla.ts

export interface SlaSummaryItem {
	id: 'kepatuhan' | 'waktuRespons' | 'waktuPenyelesaian' | 'melewatiBatas'
	label: string
	value: number
	unit: '%' | 'hari' | 'pengaduan'
	/** Selisih dibanding bulan lalu (null jika tidak ada pembanding) */
	delta: number | null
	deltaUnit?: '%' | 'hari'
	/** Keterangan tambahan, mis. total pengaduan aktif */
	note?: string
}

export interface SlaTrendPoint {
	bulan: string
	persen: number
}

export interface SlaStandard {
	kategori: string
	responsHari: number
	selesaiHari: number
}

export interface OpdPerformance {
	opd: string
	ditangani: number
	rataRataSelesaiHari: number
	tepatWaktuPersen: number
}

export interface OverdueComplaint {
	id: string
	judul: string
	opd: string
	terlambatHari: number
}

export interface SlaMonitoringData {
	ringkasan: SlaSummaryItem[]
	totalPengaduanAktif: number
	trenKepatuhan: SlaTrendPoint[]
	standarSla: SlaStandard[]
	kinerjaOpd: OpdPerformance[]
	melewatiBatas: OverdueComplaint[]
}

export const slaRingkasan: SlaSummaryItem[] = [
	{
		id: 'kepatuhan',
		label: 'Kepatuhan SLA',
		value: 91,
		unit: '%',
		delta: 2,
		deltaUnit: '%'
	},
	{
		id: 'waktuRespons',
		label: 'Rata-rata waktu respons',
		value: 2.4,
		unit: 'hari',
		delta: -0.3,
		deltaUnit: 'hari'
	},
	{
		id: 'waktuPenyelesaian',
		label: 'Rata-rata waktu penyelesaian',
		value: 5.8,
		unit: 'hari',
		delta: 0.4,
		deltaUnit: 'hari'
	},
	{
		id: 'melewatiBatas',
		label: 'Melewati batas SLA',
		value: 14,
		unit: 'pengaduan',
		delta: null,
		note: 'dari 156 pengaduan aktif'
	}
]

export const totalPengaduanAktif = 156

export const slaTren: SlaTrendPoint[] = [
	{ bulan: 'Mei', persen: 84 },
	{ bulan: 'Jun', persen: 86 },
	{ bulan: 'Jul', persen: 85 },
	{ bulan: 'Agu', persen: 88 },
	{ bulan: 'Sep', persen: 89 },
	{ bulan: 'Okt', persen: 91 }
]

export const slaStandar: SlaStandard[] = [
	{ kategori: 'Jalan & jembatan', responsHari: 2, selesaiHari: 14 },
	{ kategori: 'Penerangan jalan', responsHari: 1, selesaiHari: 7 },
	{ kategori: 'Drainase & banjir', responsHari: 1, selesaiHari: 7 },
	{ kategori: 'Taman & ruang terbuka', responsHari: 3, selesaiHari: 10 }
]

export const kinerjaOpd: OpdPerformance[] = [
	{
		opd: 'Dinas Lingkungan Hidup',
		ditangani: 48,
		rataRataSelesaiHari: 4.1,
		tepatWaktuPersen: 96
	},
	{
		opd: 'Dinas Kesehatan',
		ditangani: 21,
		rataRataSelesaiHari: 4.9,
		tepatWaktuPersen: 90
	},
	{
		opd: 'Dinas Pendidikan',
		ditangani: 26,
		rataRataSelesaiHari: 5.4,
		tepatWaktuPersen: 88
	},
	{
		opd: 'Dinas PUPR',
		ditangani: 143,
		rataRataSelesaiHari: 6.7,
		tepatWaktuPersen: 88
	},
	{
		opd: 'Dinas Perhubungan',
		ditangani: 62,
		rataRataSelesaiHari: 6.2,
		tepatWaktuPersen: 82
	}
]

export const pengaduanMelewatiBatas: OverdueComplaint[] = [
	{
		id: 'PGD-2610-0131',
		judul: 'Atap posyandu bocor saat hujan',
		opd: 'Dinas Kesehatan',
		terlambatHari: 2
	},
	{
		id: 'PGD-2610-0136',
		judul: 'Rambu lalu lintas roboh di pertigaan',
		opd: 'Dinas Perhubungan',
		terlambatHari: 1
	},
	{
		id: 'PGD-2609-0098',
		judul: 'Jembatan penyeberangan retak',
		opd: 'Dinas PUPR',
		terlambatHari: 5
	},
	{
		id: 'PGD-2609-0087',
		judul: 'Drainase meluap di pasar',
		opd: 'Dinas PUPR',
		terlambatHari: 3
	}
]

export const slaMonitoringData: SlaMonitoringData = {
	ringkasan: slaRingkasan,
	totalPengaduanAktif,
	trenKepatuhan: slaTren,
	standarSla: slaStandar,
	kinerjaOpd,
	melewatiBatas: pengaduanMelewatiBatas
}
