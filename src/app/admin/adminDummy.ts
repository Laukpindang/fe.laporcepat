// data/dashboard.ts
// Sumber: https://laporcepat.vercel.app/admin
// Catatan: data di sumber adalah contoh untuk keperluan tampilan.

export interface DashboardSummaryItem {
  id: "total" | "aktif" | "selesaiBulanIni" | "pengguna";
  label: string;
  value: number;
  unit: "pengaduan" | "pengguna";
  /** Selisih dibanding bulan lalu (null jika tidak ada pembanding) */
  delta: number | null;
  deltaUnit?: "%" | "pengguna";
  /** Keterangan tambahan, mis. jumlah yang melewati SLA */
  note?: string;
}

export interface TrendPoint {
  bulan: string;
  /** null: nilai tidak tersedia di teks halaman (hanya ada di grafik) */
  masuk: number | null;
  selesai: number | null;
}

export interface CategoryStat {
  kategori: string;
  total: number;
}

export interface DistrictStat {
  kecamatan: string;
  total: number;
}

export type StatusPengaduan =
  | "Selesai"
  | "Diproses"
  | "Diverifikasi"
  | "Diterima"
  | "Ditolak";

export interface StatusStat {
  status: StatusPengaduan;
  total: number;
  persen: number;
}

export type ActivityType =
  | "verifikasi"
  | "pengaduanBaru"
  | "selesai"
  | "penggunaBaru"
  | "melewatiSla";

export interface ActivityItem {
  id: number;
  jenis: ActivityType;
  pesan: string;
  waktu: string;
}

export interface DashboardData {
  ringkasan: DashboardSummaryItem[];
  trenPengaduan: TrendPoint[];
  kategori: CategoryStat[];
  kecamatan: DistrictStat[];
  distribusiStatus: StatusStat[];
  aktivitasTerbaru: ActivityItem[];
}

export const dashboardRingkasan: DashboardSummaryItem[] = [
  {
    id: "total",
    label: "Total pengaduan",
    value: 12480,
    unit: "pengaduan",
    delta: 8,
    deltaUnit: "%",
    note: "dari bulan lalu",
  },
  {
    id: "aktif",
    label: "Pengaduan aktif",
    value: 156,
    unit: "pengaduan",
    delta: null,
    note: "14 melewati SLA",
  },
  {
    id: "selesaiBulanIni",
    label: "Selesai bulan ini",
    value: 412,
    unit: "pengaduan",
    delta: 5,
    deltaUnit: "%",
    note: "dari bulan lalu",
  },
  {
    id: "pengguna",
    label: "Pengguna terdaftar",
    value: 8915,
    unit: "pengguna",
    delta: 231,
    deltaUnit: "pengguna",
    note: "pengguna baru",
  },
];

export const trenSemester: TrendPoint[] = [
  { bulan: "Mei", masuk: 120, selesai: 98 },
  { bulan: "Jun", masuk: 135, selesai: 118 },
  { bulan: "Jul", masuk: 148, selesai: 130 },
  { bulan: "Agu", masuk: 162, selesai: 151 },
  { bulan: "Sep", masuk: 155, selesai: 149 },
  { bulan: "Okt", masuk: 170, selesai: 142 },
];

export const trenSetahun: TrendPoint[] = [
  { bulan: "Nov", masuk: 98, selesai: 85 },
  { bulan: "Des", masuk: 105, selesai: 92 },
  { bulan: "Jan", masuk: 112, selesai: 96 },
  { bulan: "Feb", masuk: 108, selesai: 97 },
  { bulan: "Mar", masuk: 118, selesai: 104 },
  { bulan: "Apr", masuk: 125, selesai: 110 },
  { bulan: "Mei", masuk: 120, selesai: 98 },
  { bulan: "Jun", masuk: 135, selesai: 118 },
  { bulan: "Jul", masuk: 148, selesai: 130 },
  { bulan: "Agu", masuk: 162, selesai: 151 },
  { bulan: "Sep", masuk: 155, selesai: 149 },
  { bulan: "Okt", masuk: 170, selesai: 142 },
];

export const kategoriPengaduan: CategoryStat[] = [
  { kategori: "Jalan & jembatan", total: 4120 },
  { kategori: "Penerangan jalan", total: 2860 },
  { kategori: "Drainase & banjir", total: 2315 },
  { kategori: "Taman & ruang terbuka", total: 1340 },
  { kategori: "Transportasi umum", total: 1085 },
  { kategori: "Kesehatan & pendidikan", total: 760 },
];

export const kecamatanPengaduan: DistrictStat[] = [
  { kecamatan: "Soreang", total: 1180 },
  { kecamatan: "Baleendah", total: 1045 },
  { kecamatan: "Dayeuhkolot", total: 982 },
  { kecamatan: "Rancaekek", total: 910 },
  { kecamatan: "Cileunyi", total: 874 },
  { kecamatan: "Banjaran", total: 801 },
  { kecamatan: "Majalaya", total: 733 },
  { kecamatan: "Ciparay", total: 690 },
];

export const distribusiStatus: StatusStat[] = [
  { status: "Selesai", total: 10420, persen: 83 },
  { status: "Diproses", total: 1240, persen: 10 },
  { status: "Diverifikasi", total: 410, persen: 3 },
  { status: "Diterima", total: 160, persen: 1 },
  { status: "Ditolak", total: 250, persen: 2 },
];

export const aktivitasTerbaru: ActivityItem[] = [
  {
    id: 1,
    jenis: "verifikasi",
    pesan: "Petugas Rina memverifikasi PGD-2610-0141",
    waktu: "10 menit lalu",
  },
  {
    id: 2,
    jenis: "pengaduanBaru",
    pesan: "Pengaduan baru PGD-2610-0145 masuk dari Pangalengan",
    waktu: "32 menit lalu",
  },
  {
    id: 3,
    jenis: "selesai",
    pesan: "Dinas PUPR menyelesaikan PGD-2610-0133",
    waktu: "2 jam lalu",
  },
  {
    id: 4,
    jenis: "penggunaBaru",
    pesan: "Pengguna baru mendaftar: Siti Rahma",
    waktu: "3 jam lalu",
  },
  {
    id: 5,
    jenis: "melewatiSla",
    pesan: "PGD-2610-0131 melewati batas SLA",
    waktu: "5 jam lalu",
  },
];
