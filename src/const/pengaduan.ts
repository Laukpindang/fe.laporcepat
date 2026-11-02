export type Status_pengaduan =
	| 'Diproses'
	| 'Diverifikasi'
	| 'Diterima'
	| 'Ditolak'
	| 'Selesai'

export type PengaduanKategori =
	| 'Jalan & jembatan'
	| 'Penerangan jalan'
	| 'Drainase & banjir'
	| 'Taman & ruang terbuka'
	| 'Transportasi umum'
	| 'Kesehatan & pendidikan'

export const STATUS_PENGADUAN = [
	'Semua Status',
	'Diterima',
	'Diverifikasi',
	'Diproses',
	'Selesai',
	'Ditolak'
]

export const KATEGORI_PENGADUAN = [
	'Semua Kategori',
	'Jalan & jembatan',
	'Penerangan jalan',
	'Drainase & banjir',
	'Taman & ruang terbuka',
	'Transportasi umum',
	'Kesehatan & pendidikan'
]

export const KATEGORI_PELAPORAN_ICON = [
	{ nama: 'Jalan & jembatan', ikon: 'M4 20L9 4h6l5 16M12 8v2m0 4v2' },
	{
		nama: 'Penerangan jalan',
		ikon: 'M12 3a6 6 0 00-3 11.2V17h6v-2.8A6 6 0 0012 3zM10 21h4'
	},
	{
		nama: 'Drainase & banjir',
		ikon: 'M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z'
	},
	{
		nama: 'Taman & ruang terbuka',
		ikon: 'M12 21v-8m0 0c-3 0-5-2-5-5 3 0 5 2 5 5zm0 0c3 0 5-2 5-5-3 0-5 2-5 5z'
	},
	{
		nama: 'Transportasi umum',
		ikon: 'M5 16V7a2 2 0 012-2h10a2 2 0 012 2v9M5 16h14M5 16v3m14-3v3M8 12h8'
	},
	{ nama: 'Kesehatan & pendidikan', ikon: 'M12 5v14M5 12h14' },
	{ nama: 'Lainnya', ikon: 'M5 12h.01M12 12h.01M19 12h.01' }
]

export const SLA_STANDAR: Record<
	PengaduanKategori,
	{ responsHari: number; selesaiHari: number }
> = {
	'Jalan & jembatan': { responsHari: 2, selesaiHari: 14 },
	'Penerangan jalan': { responsHari: 1, selesaiHari: 7 },
	'Drainase & banjir': { responsHari: 1, selesaiHari: 7 },
	'Taman & ruang terbuka': { responsHari: 3, selesaiHari: 10 },
	'Transportasi umum': { responsHari: 2, selesaiHari: 14 },
	'Kesehatan & pendidikan': { responsHari: 2, selesaiHari: 14 }
}

type Pengaduan = {
	id: string
	judul: string
	lokasi: string
	status: Status_pengaduan
	kategori: string
	kecamatan: string
	tanggal: string
	sisaSla: string
}

export const DUMMY_PENGADUAN: Pengaduan[] = [
	{
		id: 'PGD-2610-0142',
		judul: 'Lampu jalan padam di Jl. Raya Soreang',
		lokasi: 'Soreang',
		status: 'Diproses',
		kategori: 'Penerangan jalan',
		kecamatan: 'Soreang',
		tanggal: '19 Okt 2026',
		sisaSla: '2 hari lagi'
	},
	{
		id: 'PGD-2610-0141',
		judul: 'Jalan berlubang dekat Pasar Banjaran',
		lokasi: 'Banjaran',
		status: 'Diverifikasi',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Banjaran',
		tanggal: '18 Okt 2026',
		sisaSla: '4 hari lagi'
	},
	{
		id: 'PGD-2610-0139',
		judul: 'Saluran drainase tersumbat',
		lokasi: 'Dayeuhkolot',
		status: 'Diterima',
		kategori: 'Drainase & banjir',
		kecamatan: 'Dayeuhkolot',
		tanggal: '17 Okt 2026',
		sisaSla: '5 hari lagi'
	},
	{
		id: 'PGD-2610-0133',
		judul: 'Taman kota rusak, bangku patah',
		lokasi: 'Cileunyi',
		status: 'Selesai',
		kategori: 'Taman & ruang terbuka',
		kecamatan: 'Cileunyi',
		tanggal: '12 Okt 2026',
		sisaSla: 'Tepat waktu'
	},
	{
		id: 'PGD-2610-0128',
		judul: 'Halte angkutan umum tidak layak',
		lokasi: 'Majalaya',
		status: 'Selesai',
		kategori: 'Transportasi umum',
		kecamatan: 'Majalaya',
		tanggal: '8 Okt 2026',
		sisaSla: 'Tepat waktu'
	}
]
