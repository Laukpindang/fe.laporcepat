'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import FilterComboBoxItems from '@/components/custom/filter-select'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious
} from '@/components/ui/pagination'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import {
	KATEGORI_PENGADUAN,
	type PengaduanKategori,
	SLA_STANDAR,
	STATUS_PENGADUAN
} from '@/const/pengaduan'
import { usePengaduan } from '@/hooks/usePengaduan'
import { countDays, formatShortMonthDate, getTodayLocalDate } from '@/lib/utils'

export default function Verifikasi() {
	const itemsPerPage = 10
	const { pengaduanList: lists, loading, error } = usePengaduan('all')
	const [search, _setSearch] = useState('')
	const [page, setPage] = useState(1)

	const statusVerifikasi = {
		'Menunggu Verifikasi': lists.filter((p) => p.status === 'Diterima'),
		'Sudah Diverifikasi': lists.filter((p) => p.status === 'Diverifikasi'),
		'Sedang Diproses': lists.filter((p) => p.status === 'Diproses'),
		'Sudah Selesai': lists.filter((p) => p.status === 'Selesai')
	}

	const [selectedItem, setSelectedItem] = useState({
		status: 'Semua Status',
		kategori: 'Semua Kategori'
	})

	const filterItems: {
		status: string[]
		kategori: string[]
	} = {
		status: STATUS_PENGADUAN,
		kategori: KATEGORI_PENGADUAN
	}

	const filteredPengaduan = useMemo(() => {
		const q = search.trim().toLowerCase()
		return lists.filter((p) => {
			const statusMatch =
				selectedItem.status === 'Semua Status' ||
				p.status === selectedItem.status
			const kategoriMatch =
				selectedItem.kategori === 'Semua Kategori' ||
				p.kategori === selectedItem.kategori
			const searchMatch =
				!q ||
				p.judul.toLowerCase().includes(q) ||
				p.id.toLowerCase().includes(q) ||
				p.kecamatan.toLowerCase().includes(q)
			return statusMatch && kategoriMatch && searchMatch
		})
	}, [lists, selectedItem, search])

	const handleFilter = (item: string, filter: string) => {
		setSelectedItem({ ...selectedItem, [filter]: item })
	}

	const changePage = (newPage: number) => {
		if (
			newPage < 1 ||
			newPage > Math.max(1, Math.ceil(filteredPengaduan.length / itemsPerPage))
		) {
			return
		}
		setPage(newPage)
	}

	const activePageDatas = () => {
		const startIndex = (page - 1) * itemsPerPage
		const endIndex = startIndex + itemsPerPage
		return filteredPengaduan.slice(startIndex, endIndex)
	}

	return (
		<div className="my-5 flex flex-col gap-3">
			<div className="flex flex-col gap-2 pb-8">
				<p className="text-3xl font-semibold">Dashboard verifikasi</p>
				<p className="text-zinc-500">
					Antrean pengaduan masuk yang perlu diverifikasi dan didisposisikan.
				</p>
			</div>

			<Card className="grid grid-cols-4 py-0 border border-zinc-600/80">
				{Object.entries(statusVerifikasi).map(([status, pengaduan]) => (
					<div
						key={status}
						className="py-4 flex flex-col items-center justify-center gap-2 border-l border-zinc-700"
					>
						<p className="text-zinc-500 font-semibold">{status}</p>
						<p className="text-2xl font-semibold">{pengaduan.length}</p>
					</div>
				))}
			</Card>

			<Card id="tabel-verifikasi" className="border border-zinc-700/50 pb-0">
				<div className="px-8 py-2 flex justify-start items-center gap-4">
					<Input placeholder="Cari pengaduan..." className="w-1/3" />
					{Object.keys(filterItems).map((filter) => (
						<FilterComboBoxItems
							key={filter}
							items={filterItems[filter.toString() as keyof typeof filterItems]}
							selectedItem={
								selectedItem[filter.toString() as keyof typeof filterItems]
							}
							defaultItem={
								filterItems[filter.toString() as keyof typeof filterItems][0]
							}
							setSelectedItem={(item: string) => handleFilter(item, filter)}
						/>
					))}
				</div>
				<CardContent className="px-0">
					<Card className=" py-0 my-0">
						<Table id="log-pengaduan-table" className="w-full">
							<TableHeader>
								<TableRow className="text-zinc-400 font-semibold mx-10">
									<TableHead className="text-zinc-400 px-4 w-1/3">
										Pengaduan
									</TableHead>
									<TableHead className="text-zinc-400 w-1/6">
										Kategori
									</TableHead>
									<TableHead className="text-zinc-400 w-1/6">Masuk</TableHead>
									<TableHead className="text-zinc-400 w-1/6">
										Sisa SLA
									</TableHead>
									<TableHead className="text-zinc-400 w-fit">Status</TableHead>
									<TableHead className="text-zinc-400 w-fit">
										Tindakan
									</TableHead>
								</TableRow>
							</TableHeader>

							<TableBody>
								{activePageDatas().map((pengaduan) => {
									const formattedDate = formatShortMonthDate(
										pengaduan.tanggalMasuk
									)

									const batasRespon =
										SLA_STANDAR[pengaduan.kategori as PengaduanKategori]
											.responsHari
									const respondLimitCondition =
										pengaduan.status === 'Diterima' ||
										pengaduan.status === 'Ditolak' ||
										pengaduan.status === 'Selesai'
									const sisaSlaHari = !respondLimitCondition
										? batasRespon -
											countDays(pengaduan.tanggalMasuk, getTodayLocalDate())
										: 1001

									const slaWarning = {
										style: () => {
											if (sisaSlaHari === 1001) {
												return 'text-zinc-300/50'
											} else if (sisaSlaHari < 0) {
												return 'text-red-500'
											} else if (sisaSlaHari <= 2) {
												return 'text-yellow-500'
											}
										},
										days: () => {
											if (sisaSlaHari === 1001) {
												return `Selesai`
											} else if (sisaSlaHari < 0) {
												return `Terlambat ${sisaSlaHari * -1} Hari`
											} else {
												return `${sisaSlaHari} hari lagi`
											}
										}
									}

									return (
										<TableRow key={pengaduan.id}>
											<TableCell className="px-4 w-125 whitespace-normal wrap-break-word">
												<p className="font-semibold text-md wrap-normal">
													{pengaduan.judul}
												</p>
												<p className="text-zinc-500 text-sm">
													{pengaduan.id} • {pengaduan.kecamatan}
												</p>
											</TableCell>
											<TableCell className="font-medium text-zinc-400">
												{pengaduan.kategori}
											</TableCell>
											<TableCell>{formattedDate}</TableCell>
											<TableCell className={slaWarning.style()}>
												{slaWarning.days()}
											</TableCell>
											<TableCell>
												<Badge>{pengaduan.status}</Badge>
											</TableCell>
											<TableCell>
												<Button
													variant={`outline`}
													className=" text-white px-4 py-2  rounded-md hover:bg-blue-600 transition-colors"
													render={
														<Link href={`/petugas/verifikasi/${pengaduan.id}`}>
															Tinjau
														</Link>
													}
													nativeButton={false}
												/>
											</TableCell>
										</TableRow>
									)
								})}
							</TableBody>
						</Table>

						{loading && (
							<div className="w-full text-center font-semibold text-zinc-500">
								Mengambil data...
							</div>
						)}
						{error && (
							<div className="w-full text-center font-semibold text-red-500">
								gagal mengambil data!
							</div>
						)}
						<div className="pb-4 px-8 flex items-center justify-between gap-4">
							<div>
								<p className="w-100 flex items-center gap-2 ">
									Current Page:
									<span className="text-start py-1 px-2 rounded-sm font-semibold border border-zinc-400">
										{page}
									</span>
								</p>
							</div>
							<Pagination className="mx-0 w-auto">
								<PaginationContent>
									<PaginationItem>
										<PaginationPrevious
											href="#tabel-verifikasi"
											onClick={() => changePage(page - 1)}
										/>
									</PaginationItem>
									<PaginationItem>
										<PaginationNext
											href="#tabel-verifikasi"
											onClick={() => changePage(page + 1)}
										/>
									</PaginationItem>
								</PaginationContent>
							</Pagination>
						</div>
					</Card>
				</CardContent>
			</Card>
		</div>
	)
}
