import { Status_pengaduan } from "@/const/pengaduan";

export interface Pengaduan {
  id: string;
  judul: string;
  deskripsi: string;
  alamat: string;
  kategori: string;
  kecamatan: string;
  pelapor: number;
  opd: string;
  status: Status_pengaduan;
  tanggalMasuk: string; // ISO date string (YYYY-MM-DD)
  tanggalRespon: string | null;
  tanggalSelesai: string | null;
  alasanDitolak: string | null;
}

export const initialLaporanPengaduan: Pengaduan = {
  id: "",
  judul: "",
  deskripsi: "",
  alamat: "",
  kategori: "",
  kecamatan: "",
  pelapor: 0,
  opd: "",
  status: "Diproses",
  tanggalMasuk: "",
  tanggalRespon: null,
  tanggalSelesai: null,
  alasanDitolak: null
};


export async function getPengaduan(): Promise<Pengaduan[]> {
  const response = await fetch("/data/pengaduan.json");
  if (!response.ok) {
    throw new Error(`Failed to fetch traits: ${response.status}`);
  }

  const result = await response.json();

  return result;
}

