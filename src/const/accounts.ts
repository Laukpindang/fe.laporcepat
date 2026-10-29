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
    kecamatan: 'Soreang',
  },
  {
    namaLengkap: 'Siti Nurhaliza',
    nik: '3204010202910002',
    email: 'siti.nurhaliza@example.com',
    nomorPonsel: '081234567802',
    kecamatan: 'Baleendah',
  },
  {
    namaLengkap: 'Budi Santoso',
    nik: '3204010303880003',
    email: 'budi.santoso@example.com',
    nomorPonsel: '081234567803',
    kecamatan: 'Banjaran',
  },
  {
    namaLengkap: 'Dewi Lestari',
    nik: '3204010404920004',
    email: 'dewi.lestari@example.com',
    nomorPonsel: '081234567804',
    kecamatan: 'Majalaya',
  },
  {
    namaLengkap: 'Rizky Maulana',
    nik: '3204010505950005',
    email: 'rizky.maulana@example.com',
    nomorPonsel: '081234567805',
    kecamatan: 'Dayeuhkolot',
  },
  {
    namaLengkap: 'Ayu Wulandari',
    nik: '3204010606930006',
    email: 'ayu.wulandari@example.com',
    nomorPonsel: '081234567806',
    kecamatan: 'Cileunyi',
  },
  {
    namaLengkap: 'Fajar Nugraha',
    nik: '3204010707870007',
    email: 'fajar.nugraha@example.com',
    nomorPonsel: '081234567807',
    kecamatan: 'Ciwidey',
  },
  {
    namaLengkap: 'Intan Permata',
    nik: '3204010808960008',
    email: 'intan.permata@example.com',
    nomorPonsel: '081234567808',
    kecamatan: 'Rancaekek',
  },
  {
    namaLengkap: 'Hendra Wijaya',
    nik: '3204010909890009',
    email: 'hendra.wijaya@example.com',
    nomorPonsel: '081234567809',
    kecamatan: 'Pangalengan',
  },
  {
    namaLengkap: 'Nabila Putri',
    nik: '3204011010940010',
    email: 'nabila.putri@example.com',
    nomorPonsel: '081234567810',
    kecamatan: 'Margahayu',
  },
]