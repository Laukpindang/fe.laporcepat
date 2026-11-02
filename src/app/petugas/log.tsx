'use client'

import { useState } from 'react'
import {
	DUMMY_PENGADUAN,
	KATEGORI_OPTIONS,
	KECAMATAN_OPTIONS,
	STATUS_OPTIONS
} from '@/app/petugas/logDummy'
import FilterComboBoxItems from '@/components/custom/filter-select'
import { Badge } from '@/components/ui/badge'
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
import { upCaseFirstLetter } from '@/lib/utils'

const filterItems: {
	status: string[]
	kategori: string[]
	kecamatan: string[]
} = {
	status: ['Semua Status', ...STATUS_OPTIONS],
	kategori: ['Semua Kategori', ...KATEGORI_OPTIONS],
	kecamatan: ['Semua Kecamatan', ...KECAMATAN_OPTIONS]
}

export default function Log() {
	const [selectedItem, setSelectedItem] = useState({
		status: filterItems.status[0] || '',
		kategori: filterItems.kategori[0] || '',
		kecamatan: filterItems.kecamatan[0] || ''
	})
	const [page, setPage] = useState(1)
	const itemsPerPage = 10

	const filteredPengaduan = DUMMY_PENGADUAN.filter((pengaduan) => {
		const statusMatch =
			selectedItem.status === 'Semua Status' ||
			pengaduan.status === selectedItem.status
		const kategoriMatch =
			selectedItem.kategori === 'Semua Kategori' ||
			pengaduan.kategori === selectedItem.kategori
		const kecamatanMatch =
			selectedItem.kecamatan === 'Semua Kecamatan' ||
			pengaduan.kecamatan === selectedItem.kecamatan

		return statusMatch && kategoriMatch && kecamatanMatch
	})

	const changePage = (newPage: number) => {
		if (
			newPage < 1 ||
			newPage > Math.ceil(filteredPengaduan.length / itemsPerPage)
		) {
			return // Prevent changing to an invalid page
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
				<p className="text-3xl font-semibold">Log Pengaduan</p>
				<p className="text-zinc-500">
					Catatan seluruh pengaduan yang pernah masuk, lengkap dengan pencarian
					dan filter.
				</p>
			</div>

			<Card className="border border-zinc-700/50 pb-0">
				<div className="px-8 pt-4 flex justify-start items-center gap-4">
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
							setSelectedItem={(item: string) =>
								setSelectedItem({ ...selectedItem, [filter]: item })
							}
						/>
					))}
				</div>
				<CardContent className="px-0">
					<Card className=" py-0 my-0">
						<Table
							id="log-pengaduan-table"
							className="w-full border border-zinc-700/50"
						>
							<TableHeader>
								<TableRow className="text-zinc-400 font-semibold">
									{Object.keys(DUMMY_PENGADUAN[0]).map((head) => {
										if (head === 'kategori' || head === 'kecamatan') return null

										const title =
											head === 'opd' ? 'OPD' : upCaseFirstLetter(head)

										return (
											<TableHead
												key={head}
												className={`px-4 text-zinc-400 font-semibold text-md ${head === 'judul' ? 'w-1/3' : ''} ${head === 'tiket' ? 'w-1/8' : ''}`}
											>
												{title}
											</TableHead>
										)
									})}
								</TableRow>
							</TableHeader>
							<TableBody>
								{activePageDatas().map((pengaduan) => {
									const statusColor = {
										Diterima: { bg: 'bg-blue-500/50', text: 'text-blue-100' },
										Diverifikasi: {
											bg: 'bg-yellow-500/50',
											text: 'text-yellow-100'
										},
										Diproses: {
											bg: 'bg-purple-500/50',
											text: 'text-purple-100'
										},
										Selesai: { bg: 'bg-green-500/50', text: 'text-green-100' },
										Ditolak: { bg: 'bg-red-500/50', text: 'text-red-100' }
									}
									return (
										<TableRow key={pengaduan.tiket} className="text-zinc-300">
											<TableCell className="px-4">
												<p className="font-medium text-zinc-500 text-[12px]">
													{pengaduan.tiket}
												</p>
											</TableCell>
											<TableCell className="px-4 w-125 whitespace-normal wrap-break-word">
												<p className="font-semibold text-lg wrap-normal">
													{pengaduan.judul}
												</p>
												<p className="text-zinc-500 text-sm">
													{pengaduan.kategori} • {pengaduan.kecamatan}
												</p>
											</TableCell>
											<TableCell className="px-4">
												<p className=" text-zinc-400">{pengaduan.pelapor}</p>
											</TableCell>
											<TableCell className="px-4">
												<p className="font-medium text-zinc-400">
													{pengaduan.opd ? pengaduan.opd : '-'}
												</p>
											</TableCell>
											<TableCell className="px-4">
												<p className="font-medium text-zinc-400">
													{pengaduan.tanggal}
												</p>
											</TableCell>
											<TableCell className="px-4">
												<Badge
													className={
														statusColor[pengaduan.status].bg || 'bg-gray-500'
													}
												>
													<span
														className={
															statusColor[pengaduan.status].text || 'text-white'
														}
													>
														{pengaduan.status}
													</span>
												</Badge>
											</TableCell>
										</TableRow>
									)
								})}
							</TableBody>
						</Table>
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
											href="#log-pengaduan-table"
											onClick={() => changePage(page - 1)}
										/>
									</PaginationItem>
									<PaginationItem>
										<PaginationNext
											href="#log-pengaduan-table"
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
