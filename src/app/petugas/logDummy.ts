export type StatusPengaduan =
	| 'Diterima'
	| 'Diverifikasi'
	| 'Diproses'
	| 'Selesai'
	| 'Ditolak'

export type KategoriPengaduan =
	| 'Jalan & jembatan'
	| 'Penerangan jalan'
	| 'Drainase & banjir'
	| 'Taman & ruang terbuka'
	| 'Transportasi umum'
	| 'Kesehatan & pendidikan'

export type Kecamatan =
	| 'Soreang'
	| 'Banjaran'
	| 'Dayeuhkolot'
	| 'Cileunyi'
	| 'Majalaya'
	| 'Ciparay'
	| 'Baleendah'
	| 'Rancaekek'

export interface Pengaduan {
	tiket: string
	judul: string
	kategori: KategoriPengaduan
	kecamatan: Kecamatan
	pelapor: string
	/** null = belum ditugaskan ke OPD (ditampilkan "-") */
	opd: string | null
	/** Format ISO (YYYY-MM-DD) */
	tanggal: string
	status: StatusPengaduan
}

export const DUMMY_PENGADUAN: Pengaduan[] = [
	{
		tiket: 'PGD-2610-0145',
		judul: 'Lampu jalan padam di wilayah Soreang',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Soreang',
		pelapor: 'Budi Santoso',
		opd: null,
		tanggal: '2026-10-21',
		status: 'Diterima'
	},
	{
		tiket: 'PGD-2610-0144',
		judul: 'Jalan berlubang di wilayah Cileunyi',
		kategori: 'Penerangan jalan',
		kecamatan: 'Cileunyi',
		pelapor: 'Siti Rahma',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-21',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0143',
		judul: 'Drainase tersumbat di wilayah Baleendah',
		kategori: 'Drainase & banjir',
		kecamatan: 'Baleendah',
		pelapor: 'Agus Salim',
		opd: 'Dinas Lingkungan Hidup',
		tanggal: '2026-10-20',
		status: 'Ditolak'
	},
	{
		tiket: 'PGD-2610-0142',
		judul: 'Bangku taman rusak di wilayah Banjaran',
		kategori: 'Taman & ruang terbuka',
		kecamatan: 'Banjaran',
		pelapor: 'Dewi Lestari',
		opd: 'Dinas Kesehatan',
		tanggal: '2026-10-19',
		status: 'Diverifikasi'
	},
	{
		tiket: 'PGD-2610-0141',
		judul: 'Halte tidak layak di wilayah Majalaya',
		kategori: 'Transportasi umum',
		kecamatan: 'Majalaya',
		pelapor: 'Rudi Hartono',
		opd: 'Dinas Pendidikan',
		tanggal: '2026-10-19',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0140',
		judul: 'Atap puskesmas bocor di wilayah Rancaekek',
		kategori: 'Kesehatan & pendidikan',
		kecamatan: 'Rancaekek',
		pelapor: 'Nina Marlina',
		opd: 'Dinas PUPR',
		tanggal: '2026-10-18',
		status: 'Diterima'
	},
	{
		tiket: 'PGD-2610-0139',
		judul: 'Rambu roboh di wilayah Dayeuhkolot',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Dayeuhkolot',
		pelapor: 'Budi Santoso',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-17',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0138',
		judul: 'Jembatan retak di wilayah Ciparay',
		kategori: 'Penerangan jalan',
		kecamatan: 'Ciparay',
		pelapor: 'Siti Rahma',
		opd: null,
		tanggal: '2026-10-17',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0137',
		judul: 'Trotoar amblas di wilayah Soreang',
		kategori: 'Drainase & banjir',
		kecamatan: 'Soreang',
		pelapor: 'Agus Salim',
		opd: 'Dinas Kesehatan',
		tanggal: '2026-10-16',
		status: 'Ditolak'
	},
	{
		tiket: 'PGD-2610-0136',
		judul: 'Selokan meluap di wilayah Cileunyi',
		kategori: 'Taman & ruang terbuka',
		kecamatan: 'Cileunyi',
		pelapor: 'Dewi Lestari',
		opd: 'Dinas Pendidikan',
		tanggal: '2026-10-15',
		status: 'Diverifikasi'
	},

	{
		tiket: 'PGD-2610-0135',
		judul: 'Aspal mengelupas di wilayah Majalaya',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Majalaya',
		pelapor: 'Eko Prasetyo',
		opd: null,
		tanggal: '2026-10-15',
		status: 'Diterima'
	},
	{
		tiket: 'PGD-2610-0134',
		judul: 'Lampu PJU mati di wilayah Banjaran',
		kategori: 'Penerangan jalan',
		kecamatan: 'Banjaran',
		pelapor: 'Rina Wulandari',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-14',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0133',
		judul: 'Got tersumbat sampah di wilayah Dayeuhkolot',
		kategori: 'Drainase & banjir',
		kecamatan: 'Dayeuhkolot',
		pelapor: 'Andi Firmansyah',
		opd: 'Dinas Lingkungan Hidup',
		tanggal: '2026-10-14',
		status: 'Diverifikasi'
	},
	{
		tiket: 'PGD-2610-0132',
		judul: 'Halte bus tanpa atap di wilayah Soreang',
		kategori: 'Transportasi umum',
		kecamatan: 'Soreang',
		pelapor: 'Lilis Suryani',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-14',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0131',
		judul: 'Taman kota gelap di malam hari di wilayah Ciparay',
		kategori: 'Taman & ruang terbuka',
		kecamatan: 'Ciparay',
		pelapor: 'Yusuf Hidayat',
		opd: 'Dinas Lingkungan Hidup',
		tanggal: '2026-10-13',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0130',
		judul: 'Jembatan penyeberangan berkarat di wilayah Rancaekek',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Rancaekek',
		pelapor: 'Tati Komalasari',
		opd: 'Dinas PUPR',
		tanggal: '2026-10-13',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0129',
		judul: 'Genangan air setelah hujan di wilayah Baleendah',
		kategori: 'Drainase & banjir',
		kecamatan: 'Baleendah',
		pelapor: 'Budi Santoso',
		opd: 'Dinas PUPR',
		tanggal: '2026-10-13',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0128',
		judul: 'Ruang tunggu puskesmas kekurangan kursi di wilayah Cileunyi',
		kategori: 'Kesehatan & pendidikan',
		kecamatan: 'Cileunyi',
		pelapor: 'Siti Rahma',
		opd: 'Dinas Kesehatan',
		tanggal: '2026-10-12',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0127',
		judul: 'Atap sekolah dasar bocor di wilayah Majalaya',
		kategori: 'Kesehatan & pendidikan',
		kecamatan: 'Majalaya',
		pelapor: 'Agus Salim',
		opd: 'Dinas Pendidikan',
		tanggal: '2026-10-12',
		status: 'Diverifikasi'
	},
	{
		tiket: 'PGD-2610-0126',
		judul: 'Lampu lalu lintas rusak di wilayah Soreang',
		kategori: 'Penerangan jalan',
		kecamatan: 'Soreang',
		pelapor: 'Dewi Lestari',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-12',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0125',
		judul: 'Jalan berlubang di jalur utama di wilayah Banjaran',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Banjaran',
		pelapor: 'Rudi Hartono',
		opd: 'Dinas PUPR',
		tanggal: '2026-10-11',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0124',
		judul: 'Pagar taman patah di wilayah Dayeuhkolot',
		kategori: 'Taman & ruang terbuka',
		kecamatan: 'Dayeuhkolot',
		pelapor: 'Nina Marlina',
		opd: null,
		tanggal: '2026-10-11',
		status: 'Diterima'
	},
	{
		tiket: 'PGD-2610-0123',
		judul: 'Angkot berhenti sembarangan di wilayah Ciparay',
		kategori: 'Transportasi umum',
		kecamatan: 'Ciparay',
		pelapor: 'Eko Prasetyo',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-10',
		status: 'Ditolak'
	},
	{
		tiket: 'PGD-2610-0122',
		judul: 'Saluran air tersumbat di wilayah Rancaekek',
		kategori: 'Drainase & banjir',
		kecamatan: 'Rancaekek',
		pelapor: 'Rina Wulandari',
		opd: 'Dinas Lingkungan Hidup',
		tanggal: '2026-10-10',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0121',
		judul: 'Lampu jalan berkedip di wilayah Baleendah',
		kategori: 'Penerangan jalan',
		kecamatan: 'Baleendah',
		pelapor: 'Andi Firmansyah',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-10',
		status: 'Diverifikasi'
	},
	{
		tiket: 'PGD-2610-0120',
		judul: 'Lantai posyandu rusak di wilayah Cileunyi',
		kategori: 'Kesehatan & pendidikan',
		kecamatan: 'Cileunyi',
		pelapor: 'Lilis Suryani',
		opd: 'Dinas Kesehatan',
		tanggal: '2026-10-09',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0119',
		judul: 'Trotoar rusak dan berlubang di wilayah Soreang',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Soreang',
		pelapor: 'Yusuf Hidayat',
		opd: 'Dinas PUPR',
		tanggal: '2026-10-09',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0118',
		judul: 'Sampah menumpuk di taman di wilayah Banjaran',
		kategori: 'Taman & ruang terbuka',
		kecamatan: 'Banjaran',
		pelapor: 'Tati Komalasari',
		opd: 'Dinas Lingkungan Hidup',
		tanggal: '2026-10-09',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0117',
		judul: 'Terminal tidak terawat di wilayah Majalaya',
		kategori: 'Transportasi umum',
		kecamatan: 'Majalaya',
		pelapor: 'Budi Santoso',
		opd: null,
		tanggal: '2026-10-08',
		status: 'Diterima'
	},
	{
		tiket: 'PGD-2610-0116',
		judul: 'Gorong-gorong amblas di wilayah Dayeuhkolot',
		kategori: 'Drainase & banjir',
		kecamatan: 'Dayeuhkolot',
		pelapor: 'Siti Rahma',
		opd: 'Dinas PUPR',
		tanggal: '2026-10-08',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0115',
		judul: 'Rambu penunjuk arah hilang di wilayah Ciparay',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Ciparay',
		pelapor: 'Agus Salim',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-08',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0114',
		judul: 'Lampu jalan padam di wilayah Rancaekek',
		kategori: 'Penerangan jalan',
		kecamatan: 'Rancaekek',
		pelapor: 'Dewi Lestari',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-07',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0113',
		judul: 'Toilet sekolah rusak di wilayah Baleendah',
		kategori: 'Kesehatan & pendidikan',
		kecamatan: 'Baleendah',
		pelapor: 'Rudi Hartono',
		opd: 'Dinas Pendidikan',
		tanggal: '2026-10-07',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0112',
		judul: 'Pohon tumbang di area taman di wilayah Cileunyi',
		kategori: 'Taman & ruang terbuka',
		kecamatan: 'Cileunyi',
		pelapor: 'Nina Marlina',
		opd: 'Dinas Lingkungan Hidup',
		tanggal: '2026-10-07',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0111',
		judul: 'Jalan licin berlumpur di wilayah Soreang',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Soreang',
		pelapor: 'Eko Prasetyo',
		opd: null,
		tanggal: '2026-10-06',
		status: 'Ditolak'
	},
	{
		tiket: 'PGD-2610-0110',
		judul: 'Bus kota jarang beroperasi di wilayah Banjaran',
		kategori: 'Transportasi umum',
		kecamatan: 'Banjaran',
		pelapor: 'Rina Wulandari',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-06',
		status: 'Diverifikasi'
	},
	{
		tiket: 'PGD-2610-0109',
		judul: 'Selokan berbau menyengat di wilayah Majalaya',
		kategori: 'Drainase & banjir',
		kecamatan: 'Majalaya',
		pelapor: 'Andi Firmansyah',
		opd: 'Dinas Lingkungan Hidup',
		tanggal: '2026-10-06',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0108',
		judul: 'Lampu taman mati di wilayah Dayeuhkolot',
		kategori: 'Penerangan jalan',
		kecamatan: 'Dayeuhkolot',
		pelapor: 'Lilis Suryani',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-05',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0107',
		judul: 'Ruang tunggu puskesmas terlalu panas di wilayah Ciparay',
		kategori: 'Kesehatan & pendidikan',
		kecamatan: 'Ciparay',
		pelapor: 'Yusuf Hidayat',
		opd: 'Dinas Kesehatan',
		tanggal: '2026-10-05',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0106',
		judul: 'Jembatan kecil bergoyang di wilayah Rancaekek',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Rancaekek',
		pelapor: 'Tati Komalasari',
		opd: 'Dinas PUPR',
		tanggal: '2026-10-05',
		status: 'Diverifikasi'
	},
	{
		tiket: 'PGD-2610-0105',
		judul: 'Bangku taman hilang di wilayah Baleendah',
		kategori: 'Taman & ruang terbuka',
		kecamatan: 'Baleendah',
		pelapor: 'Budi Santoso',
		opd: null,
		tanggal: '2026-10-04',
		status: 'Diterima'
	},
	{
		tiket: 'PGD-2610-0104',
		judul: 'Halte rusak dan berkarat di wilayah Cileunyi',
		kategori: 'Transportasi umum',
		kecamatan: 'Cileunyi',
		pelapor: 'Siti Rahma',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-04',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0103',
		judul: 'Banjir saat hujan deras di wilayah Soreang',
		kategori: 'Drainase & banjir',
		kecamatan: 'Soreang',
		pelapor: 'Agus Salim',
		opd: 'Dinas PUPR',
		tanggal: '2026-10-03',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0102',
		judul: 'Lampu jalan redup di wilayah Banjaran',
		kategori: 'Penerangan jalan',
		kecamatan: 'Banjaran',
		pelapor: 'Dewi Lestari',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-03',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0101',
		judul: 'Dinding gedung SMP retak di wilayah Majalaya',
		kategori: 'Kesehatan & pendidikan',
		kecamatan: 'Majalaya',
		pelapor: 'Rudi Hartono',
		opd: 'Dinas Pendidikan',
		tanggal: '2026-10-02',
		status: 'Diproses'
	},
	{
		tiket: 'PGD-2610-0100',
		judul: 'Jalan desa rusak parah di wilayah Dayeuhkolot',
		kategori: 'Jalan & jembatan',
		kecamatan: 'Dayeuhkolot',
		pelapor: 'Nina Marlina',
		opd: 'Dinas PUPR',
		tanggal: '2026-10-02',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0099',
		judul: 'Taman bermain berkarat di wilayah Ciparay',
		kategori: 'Taman & ruang terbuka',
		kecamatan: 'Ciparay',
		pelapor: 'Eko Prasetyo',
		opd: 'Dinas Lingkungan Hidup',
		tanggal: '2026-10-01',
		status: 'Ditolak'
	},
	{
		tiket: 'PGD-2610-0098',
		judul: 'Parit tersumbat di wilayah Rancaekek',
		kategori: 'Drainase & banjir',
		kecamatan: 'Rancaekek',
		pelapor: 'Rina Wulandari',
		opd: 'Dinas Lingkungan Hidup',
		tanggal: '2026-10-01',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0097',
		judul: 'Kabel lampu PJU hilang di wilayah Baleendah',
		kategori: 'Penerangan jalan',
		kecamatan: 'Baleendah',
		pelapor: 'Andi Firmansyah',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-01',
		status: 'Selesai'
	},
	{
		tiket: 'PGD-2610-0096',
		judul: 'Angkutan umum tidak layak di wilayah Soreang',
		kategori: 'Transportasi umum',
		kecamatan: 'Soreang',
		pelapor: 'Lilis Suryani',
		opd: 'Dinas Perhubungan',
		tanggal: '2026-10-01',
		status: 'Selesai'
	}
]

/** Opsi filter (sesuai dropdown di halaman) */
export const STATUS_OPTIONS: StatusPengaduan[] = [
	'Diproses',
	'Diverifikasi',
	'Ditolak',
	'Diterima',
	'Selesai'
]

export const KATEGORI_OPTIONS: KategoriPengaduan[] = [
	'Jalan & jembatan',
	'Penerangan jalan',
	'Drainase & banjir',
	'Taman & ruang terbuka',
	'Transportasi umum',
	'Kesehatan & pendidikan'
]

export const KECAMATAN_OPTIONS: Kecamatan[] = [
	'Soreang',
	'Banjaran',
	'Dayeuhkolot',
	'Cileunyi',
	'Majalaya',
	'Ciparay',
	'Baleendah',
	'Rancaekek'
]

/** Helper: format tanggal ISO -> "21 Okt 2026" */
export const formatTanggal = (iso: string): string =>
	new Date(iso).toLocaleDateString('id-ID', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	})
