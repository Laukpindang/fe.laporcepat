
export const PERAN_OPTIONS = ["Masyarakat", "Petugas", "Admin"] as const;

export type Peran = (typeof PERAN_OPTIONS)[number];

export interface User {
  id: number;
  nama: string;
  email: string;
  peran: Peran;
  aktif: boolean;
  /** ISO date (YYYY-MM-DD), null jika tidak diketahui */
  bergabung: string | null;
  /** Data profil, null untuk Petugas/Admin atau jika belum diisi */
  nik: string | null;
  nomorPonsel: string | null;
  kecamatan: string | null;
}

export async function getAccount(): Promise<User[]> {
  const response = await fetch("/data/akun.json");
  if (!response.ok) {
    throw new Error(`Failed to fetch traits: ${response.status}`);
  }

  const result = await response.json();

  return result;
}