'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { DUMMY_PENGADUAN, STATUS_PENGADUAN } from '@/const/pengaduan'

export default function Pengaduan() {
	const [status, setStatus] = useState('Semua')
	const [cari, setCari] = useState('')

	const hitung = useMemo(() => {
		return DUMMY_PENGADUAN.reduce(
			(acc: Record<string, number>, item) => {
				const statusKey = item.status
				acc[statusKey] = (acc[statusKey] || 0) + 1
				return acc
			},
			{ Semua: DUMMY_PENGADUAN.length }
		)
	}, [])

	const tampil = useMemo(() => {
		return DUMMY_PENGADUAN.filter(
			(p) =>
				(status === 'Semua' || p.status === status) &&
				(p.judul + p.id + p.kategori + p.kecamatan)
					.toLowerCase()
					.includes(cari.toLowerCase())
		)
	}, [status, cari])

	const ringkasan = [
		{ label: 'Total pengaduan', nilai: hitung.Semua },
		{
			label: 'Sedang diproses',
			nilai:
				(hitung.Diterima || 0) +
				(hitung.Diverifikasi || 0) +
				(hitung.Diproses || 0)
		},
		{ label: 'Selesai', nilai: hitung.Selesai || 0 },
		{ label: 'Ditolak', nilai: hitung.Ditolak || 0 }
	]

	return (
		<div className="relative min-h-screen overflow-hidden px-6 pb-24 pt-28">
			<div className="relative mx-auto max-w-5xl">
				{/* Header */}
				<div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
							Pengaduan saya
						</h1>
						<p className="mt-3 text-zinc-400">
							Pantau status setiap laporan yang pernah Anda sampaikan.
						</p>
					</div>
					<Link
						href="/pengaduan/baru"
						className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
					>
						<span className="text-lg leading-none">+</span> Buat pengaduan
					</Link>
				</div>

				{/* Ringkasan */}
				<div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
					{ringkasan.map((r) => (
						<div key={r.label} className="bg-[#0f0f11] p-6">
							<p className="text-3xl font-semibold tracking-tight">{r.nilai}</p>
							<p className="mt-1.5 text-sm text-zinc-500">{r.label}</p>
						</div>
					))}
				</div>

				{/* Filter */}
				<div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
					<div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
						{STATUS_PENGADUAN.map((s) => (
							<button
								key={s}
								type="button"
								onClick={() => setStatus(s)}
								className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
									status === s
										? 'border-white bg-white text-black'
										: 'border-white/10 text-zinc-400 hover:border-white/25 hover:text-white'
								}`}
							>
								{s}
								<span
									className={`ml-2 text-xs ${status === s ? 'text-black/60' : 'text-zinc-600'}`}
								>
									{hitung[s] || 0}
								</span>
							</button>
						))}
					</div>
					<input
						type="search"
						value={cari}
						onChange={(e) => setCari(e.target.value)}
						placeholder="Cari judul, nomor tiket, kecamatan..."
						className="w-full rounded-full border border-white/10 bg-white/4 px-5 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30 lg:w-80"
					/>
				</div>

				{/* Daftar */}
				<div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#111113]">
					{tampil.length === 0 ? (
						<div className="px-6 py-20 text-center">
							<p className="text-lg font-medium">
								Tidak ada pengaduan ditemukan
							</p>
							<p className="mt-2 text-sm text-zinc-500">
								Coba ubah filter atau kata kunci pencarian.
							</p>
						</div>
					) : (
						<ul className="divide-y divide-white/5">
							{tampil.map((p) => (
								<li key={p.id}>
									<Link
										href={`/pengaduan/${p.id}`}
										className="flex flex-col gap-3 px-6 py-5 transition hover:bg-white/3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
									>
										<div className="min-w-0">
											<p className="truncate font-medium text-zinc-100">
												{p.judul}
											</p>
											<p className="mt-1 text-xs text-zinc-500">
												<span className="font-mono">{p.id}</span> · {p.kategori}{' '}
												· Kec. {p.kecamatan} · {p.tanggal}
											</p>
										</div>
										<div className="flex shrink-0 items-center gap-4">
											<span className="text-xs text-zinc-500">{p.sisaSla}</span>
											<Badge
												variant={
													p.status === 'Diterima'
														? 'outline'
														: p.status === 'Diproses'
															? 'warning'
															: p.status === 'Ditolak'
																? 'destructive'
																: p.status === 'Diverifikasi'
																	? 'default'
																	: 'success'
												}
											>
												{p.status}
											</Badge>
											<span
												aria-hidden
												className="hidden text-zinc-600 sm:inline"
											>
												→
											</span>
										</div>
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}
