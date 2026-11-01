export type Account = {
	namaLengkap: string
	nik: string
	email: string
	nomorPonsel: string
	kecamatan: string // matches `value` in the kecamatan list
}

export const dummyAccounts: Account[] = [
	{
		namaLengkap: 'Tatang Sutarman',
		nik: '3204010101900001',
		email: 'tsut@gmail.com',
		nomorPonsel: '081234567801',
		kecamatan: 'Soreang'
	},
	{
		namaLengkap: 'Siti Nurhaliza',
		nik: '3204010202910002',
		email: 'siti.nurhaliza@example.com',
		nomorPonsel: '081234567802',
		kecamatan: 'Baleendah'
	},
	{
		namaLengkap: 'Budi Santoso',
		nik: '3204010303880003',
		email: 'budi.santoso@example.com',
		nomorPonsel: '081234567803',
		kecamatan: 'Banjaran'
	},
	{
		namaLengkap: 'Dewi Lestari',
		nik: '3204010404920004',
		email: 'dewi.lestari@example.com',
		nomorPonsel: '081234567804',
		kecamatan: 'Majalaya'
	},
	{
		namaLengkap: 'Rizky Maulana',
		nik: '3204010505950005',
		email: 'rizky.maulana@example.com',
		nomorPonsel: '081234567805',
		kecamatan: 'Dayeuhkolot'
	},
	{
		namaLengkap: 'Ayu Wulandari',
		nik: '3204010606930006',
		email: 'ayu.wulandari@example.com',
		nomorPonsel: '081234567806',
		kecamatan: 'Cileunyi'
	},
	{
		namaLengkap: 'Fajar Nugraha',
		nik: '3204010707870007',
		email: 'fajar.nugraha@example.com',
		nomorPonsel: '081234567807',
		kecamatan: 'Ciwidey'
	},
	{
		namaLengkap: 'Intan Permata',
		nik: '3204010808960008',
		email: 'intan.permata@example.com',
		nomorPonsel: '081234567808',
		kecamatan: 'Rancaekek'
	},
	{
		namaLengkap: 'Hendra Wijaya',
		nik: '3204010909890009',
		email: 'hendra.wijaya@example.com',
		nomorPonsel: '081234567809',
		kecamatan: 'Pangalengan'
	},
	{
		namaLengkap: 'Nabila Putri',
		nik: '3204011010940010',
		email: 'nabila.putri@example.com',
		nomorPonsel: '081234567810',
		kecamatan: 'Margahayu'
	}
]

export type User = {
	id: number
	nama: string
	email: string
	peran: string
	aktif: boolean
	bergabung: string
}

export const dummyUsers: User[] = [
	{
		id: 1,
		nama: 'Budi Santoso',
		email: 'budi.santoso@email.com',
		peran: 'Masyarakat',
		aktif: true,
		bergabung: '12 Agu 2026'
	},
	{
		id: 2,
		nama: 'Siti Rahma',
		email: 'siti.rahma@email.com',
		peran: 'Masyarakat',
		aktif: true,
		bergabung: '20 Okt 2026'
	},
	{
		id: 3,
		nama: 'Agus Salim',
		email: 'agus.salim@email.com',
		peran: 'Masyarakat',
		aktif: false,
		bergabung: '3 Mei 2026'
	},
	{
		id: 4,
		nama: 'Rina Marlina',
		email: 'rina.marlina@bandungkab.go.id',
		peran: 'Petugas',
		aktif: true,
		bergabung: '10 Jan 2026'
	},
	{
		id: 5,
		nama: 'Dedi Kurniawan',
		email: 'dedi.k@bandungkab.go.id',
		peran: 'Petugas',
		aktif: true,
		bergabung: '10 Jan 2026'
	},
	{
		id: 6,
		nama: 'Nina Anggraeni',
		email: 'nina.a@bandungkab.go.id',
		peran: 'Petugas',
		aktif: false,
		bergabung: '2 Mar 2026'
	},
	{
		id: 7,
		nama: 'Hendra Gunawan',
		email: 'hendra.g@bandungkab.go.id',
		peran: 'Admin',
		aktif: true,
		bergabung: '5 Jan 2026'
	},
	{
		id: 8,
		nama: 'Dewi Lestari',
		email: 'dewi.lestari@email.com',
		peran: 'Masyarakat',
		aktif: true,
		bergabung: '28 Sep 2026'
	},
	{
		id: 9,
		nama: 'Rudi Hartono',
		email: 'rudi.h@email.com',
		peran: 'Masyarakat',
		aktif: true,
		bergabung: '14 Okt 2026'
	}
]
