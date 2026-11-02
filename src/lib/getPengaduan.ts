import {
	type PengaduanKategori,
	SLA_STANDAR,
	type Status_pengaduan
} from '@/const/pengaduan'
import { countDays, getTodayLocalDate } from './utils'

export interface Pengaduan {
	id: string
	judul: string
	deskripsi: string
	alamat: string
	kategori: string
	kecamatan: string
	pelapor: number
	opd: string
	status: Status_pengaduan
	tanggalMasuk: string // ISO date string (YYYY-MM-DD)
	tanggalRespon: string | null
	tanggalSelesai: string | null
	alasanDitolak: string | null
}

export const initialLaporanPengaduan: Pengaduan = {
	id: '',
	judul: '',
	deskripsi: '',
	alamat: '',
	kategori: '',
	kecamatan: '',
	pelapor: 0,
	opd: '',
	status: 'Diproses',
	tanggalMasuk: '',
	tanggalRespon: null,
	tanggalSelesai: null,
	alasanDitolak: null
}

export async function getPengaduan(): Promise<Pengaduan[]> {
	const response = await fetch('http://localhost:3000/data/pengaduan.json')
	if (!response.ok) {
		throw new Error(`Failed to fetch traits: ${response.status}`)
	}

	const result = await response.json()

	return result
}

export async function getPengaduanTerlambat() {
	const pengaduanList = await getPengaduan()
	const sekarang = getTodayLocalDate()

	return pengaduanList.filter((p) => {
		if (p.status === ('selesai' as Status_pengaduan)) return false

		const sla = SLA_STANDAR[p.kategori as PengaduanKategori]
		if (!sla) return false

		return countDays(p.tanggalMasuk, sekarang) > sla.responsHari
	})
}
