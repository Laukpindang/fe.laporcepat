'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Field, FieldLabel } from '@/components/ui/field'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { OPD_OPTIONS } from '@/const/opd'
import { getAccount, type User } from '@/lib/getAkun'
import {
	getPengaduan,
	initialLaporanPengaduan,
	type Pengaduan
} from '@/lib/getPengaduan'
import { formatShortMonthDate } from '@/lib/utils'

export default function VerifikasiDetail() {
	const params = useParams()
	const id = params.id
	const [lists, setLists] = useState<Pengaduan[]>([])
	const [accounts, setAccounts] = useState<User[]>([])
	const [_loading, setLoading] = useState(true)

	useEffect(() => {
		getPengaduan()
			.then(setLists)
			.catch(console.error)
			.finally(() => setLoading(false))

		getAccount()
			.then(setAccounts)
			.catch(console.error)
			.finally(() => setLoading(false))
	}, [])

	const pengaduan = lists.find((p) => p.id === id) ?? initialLaporanPengaduan
	const akun = accounts.find((a) => a.id === pengaduan.pelapor)

	const PRIORITAS = ['Rendah', 'Normal', 'Tinggi', 'Mendesak']
	const ALASAN_PENOLAKAN = [
		'Bukan wewenang pemerintah Kabupaten Bandung',
		'Informasi pengaduan tidak lengkap/jelas',
		'Laporan duplikat',
		'Bukti tidak sesuai',
		'Lainnya'
	]

	return (
		<div className="relative min-h-screen overflow-hidden bg-[#0a0a0b] px-6 pb-24 pt-24 text-zinc-100 antialiased">
			<div className="flex flex-col gap-2 pb-8">
				<p className="text-zinc-500">Detail Pengaduan</p>
				<p className="text-3xl font-semibold">{pengaduan.judul}</p>
				<p className="text-zinc-500">
					{pengaduan.id} • {pengaduan.opd}
				</p>
			</div>

			<div className="grid grid-cols-[1fr_0.8fr] gap-4">
				<Card className="px-8 border border-zinc-800">
					<div className="border-b border-zinc-700 pb-6">
						<div className="font-semibold text-xl pt-2 pb-4 flex justify-between">
							<p>Uraian Pengaduan</p>
							<Badge>{pengaduan.status}</Badge>
						</div>
						<p>{pengaduan.deskripsi}</p>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="grid grid-rows-2 ">
							<p className="font-semibold text-zinc-500">Tanggal Kejadian</p>
							<p>{formatShortMonthDate(pengaduan.tanggalMasuk)}</p>
						</div>
						<div className="grid grid-rows-2 ">
							<p className="font-semibold text-zinc-500">Kecamatan</p>
							<p>{pengaduan.kecamatan}</p>
						</div>
						<div className="col-span-2">
							<p className="font-semibold text-zinc-500">Alamat</p>
							<p>{pengaduan.alamat}</p>
						</div>
					</div>
				</Card>
				<Card className="px-4 border border-zinc-900">
					<CardTitle className="pt-2 pb-4 border-b border-zinc-600">
						Foto Bukti
					</CardTitle>
					<CardContent className="h-full flex gap-2 overflow-x-auto">
						<div className="w-50 h-[90%] shrink-0 border border-zinc-700"></div>
						<div className="w-50 h-[90%] shrink-0 border border-zinc-700"></div>
						<div className="w-50 h-[90%] shrink-0 border border-zinc-700"></div>
					</CardContent>
				</Card>

				<div className="flex flex-col gap-4">
					<Card className="px-8 py-6 border border-zinc-800">
						<CardTitle>Data Pelapor</CardTitle>
						<CardContent className="grid grid-cols-3 px-0">
							<div>
								<p className="font-semibold text-zinc-500">Nama</p>
								<p>{akun?.nama}</p>
							</div>
							<div>
								<p className="font-semibold text-zinc-500">Ponsel</p>
								<p>{akun?.nomorPonsel}</p>
							</div>
							<div>
								<p className="font-semibold text-zinc-500">Email</p>
								<p>{akun?.email}</p>
							</div>
						</CardContent>
					</Card>
					<Card className="px-8 py-6 border border-zinc-800">
						<CardTitle>Riwayat Status</CardTitle>
						<CardContent className="grid grid-cols-3 px-0">
							<p className="text-2xl font-semibold text-center text-zinc-600">
								in construction
							</p>
						</CardContent>
					</Card>
				</div>
				<Card className="px-8 ">
					<CardTitle className="font-semibold text-xl">Verifikasi</CardTitle>
					<CardContent className="px-0">
						<Tabs className="w-ful">
							<TabsList className="w-full ">
								<TabsTrigger value={'valid'}>Valid</TabsTrigger>
								<TabsTrigger value={'tidak valid'}>Tidak Valid</TabsTrigger>
							</TabsList>
							<TabsContent value={'valid'}>
								<div className="flex flex-col gap-6 py-2">
									<Field>
										<FieldLabel>Disposisi</FieldLabel>
										<Select>
											<SelectTrigger>
												<SelectValue placeholder="Perangkat daerah yang diteruskan..." />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													{OPD_OPTIONS.map((o) => (
														<SelectItem key={o} value={o}>
															{o}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
									</Field>
									<Field>
										<FieldLabel>Prioritas</FieldLabel>
										<Select>
											<SelectTrigger>
												<SelectValue placeholder="Tingkat Kepentingan" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													{PRIORITAS.map((p) => (
														<SelectItem key={p} value={p}>
															{p}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
									</Field>
									<Field>
										<FieldLabel>Catatan untuk Pelapor</FieldLabel>
										<Textarea placeholder="Catatan yang diberikan kepada pelapor tindakan selanjutnya" />
									</Field>
								</div>
								<Button className="w-full bg-zinc-100 text-zinc-950 my-2 py-2">
									Verifikasi & Disposisikan
								</Button>
							</TabsContent>
							<TabsContent value={'tidak valid'}>
								<div className="flex flex-col gap-6 py-2">
									<Field>
										<FieldLabel>Alasan</FieldLabel>
										<Select>
											<SelectTrigger>
												<SelectValue placeholder="Alasan penolakan pengaduan..." />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													{ALASAN_PENOLAKAN.map((o) => (
														<SelectItem key={o} value={o}>
															{o}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
									</Field>

									<Field>
										<FieldLabel>Catatan untuk Pelapor</FieldLabel>
										<Textarea placeholder="Catatan yang diberikan kepada pelapor tindakan selanjutnya" />
									</Field>
								</div>
								<Button className="w-full bg-zinc-100 text-zinc-950 my-2 py-2 hover:bg-red-500/50">
									Tolak
								</Button>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
