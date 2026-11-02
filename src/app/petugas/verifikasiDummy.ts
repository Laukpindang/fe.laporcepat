

export type PengaduanStatus = "Diterima" | "Diverifikasi" | "Diproses";

export type PengaduanKategori =
  | "Jalan & jembatan"
  | "Penerangan jalan"
  | "Drainase & banjir"
  | "Transportasi umum"
  | "Kesehatan & pendidikan";

export interface Pengaduan {
  id: string; // e.g. "PGD-2610-0145"
  judul: string;
  kecamatan: string;
  kategori: PengaduanKategori;
  masuk: string; // ISO date (YYYY-MM-DD)
  sisaSlaHari: number; // 0 = hari ini, negative = terlambat
  status: PengaduanStatus;
}

export const pengaduanList: Pengaduan[] = [
  {
    id: "PGD-2610-0145",
    judul: "Pohon tumbang menutup sebagian jalan",
    kecamatan: "Pangalengan",
    kategori: "Jalan & jembatan",
    masuk: "2026-10-21",
    sisaSlaHari: 7,
    status: "Diterima",
  },
  {
    id: "PGD-2610-0144",
    judul: "Lampu penerangan taman mati total",
    kecamatan: "Baleendah",
    kategori: "Penerangan jalan",
    masuk: "2026-10-21",
    sisaSlaHari: 7,
    status: "Diterima",
  },
  {
    id: "PGD-2610-0143",
    judul: "Gorong-gorong amblas di depan sekolah",
    kecamatan: "Rancaekek",
    kategori: "Drainase & banjir",
    masuk: "2026-10-20",
    sisaSlaHari: 6,
    status: "Diterima",
  },
  {
    id: "PGD-2610-0142",
    judul: "Lampu jalan padam di Jl. Raya Soreang",
    kecamatan: "Soreang",
    kategori: "Penerangan jalan",
    masuk: "2026-10-19",
    sisaSlaHari: 2,
    status: "Diproses",
  },
  {
    id: "PGD-2610-0141",
    judul: "Jalan berlubang dekat Pasar Banjaran",
    kecamatan: "Banjaran",
    kategori: "Jalan & jembatan",
    masuk: "2026-10-18",
    sisaSlaHari: 1,
    status: "Diverifikasi",
  },
  {
    id: "PGD-2610-0139",
    judul: "Saluran drainase tersumbat di Jl. Moch. Toha",
    kecamatan: "Dayeuhkolot",
    kategori: "Drainase & banjir",
    masuk: "2026-10-17",
    sisaSlaHari: 0,
    status: "Diterima",
  },
  {
    id: "PGD-2610-0136",
    judul: "Rambu lalu lintas roboh di pertigaan",
    kecamatan: "Cicalengka",
    kategori: "Transportasi umum",
    masuk: "2026-10-15",
    sisaSlaHari: -1,
    status: "Diverifikasi",
  },
  {
    id: "PGD-2610-0131",
    judul: "Atap posyandu bocor saat hujan",
    kecamatan: "Ciwidey",
    kategori: "Kesehatan & pendidikan",
    masuk: "2026-10-13",
    sisaSlaHari: -2,
    status: "Diproses",
  },
];

export const PengaduanKategori: PengaduanKategori[] = [
  "Jalan & jembatan",
  "Penerangan jalan",
  "Drainase & banjir",
  "Transportasi umum",
  "Kesehatan & pendidikan"
];

export const stats = {
  menungguVerifikasi: pengaduanList.filter((p) => p.status === "Diterima").length,
  sudahDiverifikasi: pengaduanList.filter((p) => p.status === "Diverifikasi").length,
  sedangDiproses: pengaduanList.filter((p) => p.status === "Diproses").length,
  melewatiSla: pengaduanList.filter((p) => p.sisaSlaHari < 0).length,
};

export const getPengaduanById = (id: string) =>
  pengaduanList.find((p) => p.id === id);