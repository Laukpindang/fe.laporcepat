export type Status_pengaduan =
  | "Diproses"
  | "Diverifikasi"
  | "Diterima"
  | "Ditolak"
  | "Selesai";

export type PengaduanKategori =
  | "Jalan & jembatan"
  | "Penerangan jalan"
  | "Drainase & banjir"
  | "Taman & ruang terbuka"
  | "Transportasi umum"
  | "Kesehatan & pendidikan";

export const STATUS_PENGADUAN = [
  "Semua Status",
  "Diterima",
  "Diverifikasi",
  "Diproses",
  "Selesai",
  "Ditolak",
];

export const KATEGORI_PENGADUAN = [
  "Semua Kategori",
  "Jalan & jembatan",
  "Penerangan jalan",
  "Drainase & banjir",
  "Taman & ruang terbuka",
  "Transportasi umum",
  "Kesehatan & pendidikan",
];

export const SLA_STANDAR: Record<
  PengaduanKategori,
  { responsHari: number; selesaiHari: number }
> = {
  "Jalan & jembatan": { responsHari: 2, selesaiHari: 14 },
  "Penerangan jalan": { responsHari: 1, selesaiHari: 7 },
  "Drainase & banjir": { responsHari: 1, selesaiHari: 7 },
  "Taman & ruang terbuka": { responsHari: 3, selesaiHari: 10 },
  "Transportasi umum": { responsHari: 2, selesaiHari: 14 },
  "Kesehatan & pendidikan": { responsHari: 2, selesaiHari: 14 },
};

type Pengaduan = {
  id: string;
  judul: string;
  lokasi: string;
  status: Status_pengaduan;
  kategori: string;
  kecamatan: string;
  tanggal: string;
  sisaSla: string;
};

export const DUMMY_PENGADUAN: Pengaduan[] = [
  {
    id: "PGD-2610-0142",
    judul: "Lampu jalan padam di Jl. Raya Soreang",
    lokasi: "Soreang",
    status: "Diproses",
    kategori: "Penerangan jalan",
    kecamatan: "Soreang",
    tanggal: "19 Okt 2026",
    sisaSla: "2 hari lagi",
  },
  {
    id: "PGD-2610-0141",
    judul: "Jalan berlubang dekat Pasar Banjaran",
    lokasi: "Banjaran",
    status: "Diverifikasi",
    kategori: "Jalan & jembatan",
    kecamatan: "Banjaran",
    tanggal: "18 Okt 2026",
    sisaSla: "4 hari lagi",
  },
  {
    id: "PGD-2610-0139",
    judul: "Saluran drainase tersumbat",
    lokasi: "Dayeuhkolot",
    status: "Diterima",
    kategori: "Drainase & banjir",
    kecamatan: "Dayeuhkolot",
    tanggal: "17 Okt 2026",
    sisaSla: "5 hari lagi",
  },
  {
    id: "PGD-2610-0133",
    judul: "Taman kota rusak, bangku patah",
    lokasi: "Cileunyi",
    status: "Selesai",
    kategori: "Taman & ruang terbuka",
    kecamatan: "Cileunyi",
    tanggal: "12 Okt 2026",
    sisaSla: "Tepat waktu",
  },
  {
    id: "PGD-2610-0128",
    judul: "Halte angkutan umum tidak layak",
    lokasi: "Majalaya",
    status: "Selesai",
    kategori: "Transportasi umum",
    kecamatan: "Majalaya",
    tanggal: "8 Okt 2026",
    sisaSla: "Tepat waktu",
  },
];
