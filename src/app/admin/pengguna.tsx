'use client'

import { PlusIcon } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Field, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import { dummyUsers, type User } from '@/const/accounts'

const peranList = ['Masyarakat', 'Petugas', 'Admin']

export default function AdminPengguna() {
	const [users, setUsers] = useState(dummyUsers)
	const [cari, setCari] = useState('')
	const [peran, setPeran] = useState('Semua peran')
	const [status, setStatus] = useState('Semua status')
	const [modal, setModal] = useState(false)
	const [pesan, setPesan] = useState('')

	// Tutup modal dengan tombol Esc
	useEffect(() => {
		if (!modal) return
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setModal(false)
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [modal])

	function info(teks: string) {
		setPesan(teks)
		setTimeout(() => setPesan(''), 3000)
	}

	const tampil = useMemo(
		() =>
			users.filter(
				(u) =>
					(peran === 'Semua peran' || u.peran === peran) &&
					(status === 'Semua status' || (status === 'Aktif') === u.aktif) &&
					(u.nama + u.email).toLowerCase().includes(cari.toLowerCase())
			),
		[users, cari, peran, status]
	)

	const hitung = (p: string) => users.filter((u) => u.peran === p).length

	function ubahPeran(id: number, baru: string) {
		setUsers((us) => us.map((u) => (u.id === id ? { ...u, peran: baru } : u)))
		// TODO: hubungkan ke backend nanti
	}

	function toggleAktif(u: User) {
		setUsers((us) =>
			us.map((x) => (x.id === u.id ? { ...x, aktif: !x.aktif } : x))
		)
		info(`${u.nama} ${u.aktif ? 'dinonaktifkan' : 'diaktifkan kembali'}.`)
		// TODO: hubungkan ke backend nanti
	}

	function tambah(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault()
		const f = new FormData(e.currentTarget)
		const baru = {
			id: Date.now(),
			nama: f.get('nama') as string,
			email: f.get('email') as string,
			peran: f.get('peran') as string,
			aktif: true,
			bergabung: '21 Okt 2026'
		}
		// TODO: hubungkan ke backend nanti
		setUsers((us) => [baru, ...us])
		setModal(false)
		info(`Pengguna ${baru.nama} ditambahkan.`)
	}

	const AddUserSection = () => {
		return (
			<Dialog open={modal} onOpenChange={setModal}>
				<DialogTrigger
					render={
						<Button size="lg">
							<PlusIcon />
							Tambah pengguna
						</Button>
					}
				/>
				<DialogContent className="sm:max-w-sm">
					<form id="add-user-form" onSubmit={tambah}>
						<DialogHeader>
							<DialogTitle>Tambah Pengguna</DialogTitle>
							<DialogDescription>
								Akun baru akan menerima email undangan untuk membuat kata sandi.
							</DialogDescription>
						</DialogHeader>
						<FieldGroup>
							<Field>
								<Label htmlFor="nama">Nama Lengkap</Label>
								<Input id="nama" name="nama" type="text" required />
							</Field>
							<Field>
								<Label htmlFor="email">Email</Label>
								<Input id="email" name="email" type="email" required />
							</Field>
							<Field>
								<Label htmlFor="peran">Peran</Label>
								<Select id="peran" name="peran" required>
									<SelectTrigger>
										<SelectValue placeholder="Pilih peran" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Peran</SelectLabel>
											{peranList.map((p) => (
												<SelectItem key={p} value={p}>
													{p}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</Field>
						</FieldGroup>
						<DialogFooter>
							<DialogClose
								render={
									<Button variant="outline" type="button">
										Batal
									</Button>
								}
							/>
							<Button type="submit" form="add-user-form">
								Tambahkan
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<div className="my-5">
			<div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
				<div className="flex flex-col gap-3">
					<h1 className="text-3xl font-semibold">Manajemen pengguna</h1>
					<p className="text-foreground/50">
						Kelola akun masyarakat, petugas, dan admin.
					</p>
				</div>
				<AddUserSection />
			</div>

			{/* Ringkasan */}
			<div className="mt-8 grid grid-cols-2 gap-px rounded-2xl border divide-x lg:grid-cols-4">
				{[
					{ label: 'Total pengguna', nilai: users.length },
					...peranList.map((p) => ({ label: p, nilai: hitung(p) }))
				].map((r) => (
					<div key={r.label} className="bg-card p-6">
						<p className="text-3xl font-semibold tracking-tight">{r.nilai}</p>
						<p className="mt-1.5 text-sm text-foreground/50">{r.label}</p>
					</div>
				))}
			</div>

			{/* Filter */}
			<div className="my-8 flex flex-col gap-3 lg:flex-row lg:items-center">
				<Input
					type="search"
					value={cari}
					onChange={(e) => setCari(e.target.value)}
					placeholder="Cari nama atau email..."
					className="lg:w-80"
				/>
				<Select
					value={peran}
					onValueChange={(val) => setPeran(val ?? '')}
					aria-label="Filter peran"
				>
					<SelectTrigger>
						<SelectValue placeholder="Pilih peran" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Peran</SelectLabel>
							{['Semua peran', ...peranList].map((p) => (
								<SelectItem key={p} value={p}>
									{p}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select
					value={status}
					onValueChange={(val) => setStatus(val ?? '')}
					aria-label="Filter status"
				>
					<SelectTrigger>
						<SelectValue placeholder="Pilih status" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Status</SelectLabel>
							{['Semua status', 'Aktif', 'Nonaktif'].map((p) => (
								<SelectItem key={p} value={p}>
									{p}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>

			{pesan && (
				<Badge variant="success" className="w-full">
					{pesan}
				</Badge>
			)}

			{/* Tabel */}
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Pengguna</TableHead>
						<TableHead>Peran</TableHead>
						<TableHead>Bergabung pada</TableHead>
						<TableHead>Status</TableHead>
						<TableHead className="text-center">Aksi</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{tampil.map((u) => (
						<TableRow key={u.id}>
							<TableCell className="px-6 py-4">
								<div className="flex items-center gap-3">
									<span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
										{u.nama
											.split(' ')
											.filter(Boolean)
											.slice(0, 2)
											.map((k) => k[0].toUpperCase())
											.join('')}
									</span>
									<div>
										<p className="font-medium">{u.nama}</p>
										<p className="text-xs text-accent-foreground/50">
											{u.email}
										</p>
									</div>
								</div>
							</TableCell>
							<TableCell className="px-4 py-4">
								<Select
									value={u.peran}
									onValueChange={(val) => ubahPeran(u.id, val ?? '')}
									aria-label={`Peran ${u.nama}`}
								>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Peran</SelectLabel>
											{peranList.map((p) => (
												<SelectItem key={p} value={p}>
													{p}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</TableCell>
							<TableCell className="whitespace-nowrap px-4 py-4 text-foreground/70">
								{u.bergabung}
							</TableCell>
							<TableCell className="px-4 py-4">
								<span
									className={`inline-flex items-center gap-2 text-xs ${u.aktif ? 'text-emerald-300' : 'text-foreground/50'}`}
								>
									<span
										className={`h-1.5 w-1.5 rounded-full ${u.aktif ? 'bg-emerald-400' : 'bg-foreground/50'}`}
									/>
									{u.aktif ? 'Aktif' : 'Nonaktif'}
								</span>
							</TableCell>
							<TableCell className="px-6 py-4 text-right">
								<Button
									type="button"
									onClick={() => toggleAktif(u)}
									variant={u.aktif ? 'destructive' : 'secondary'}
								>
									{u.aktif ? 'Nonaktifkan' : 'Aktifkan'}
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{tampil.length === 0 && (
				<div className="px-6 py-20 text-center">
					<p className="text-lg font-medium">Tidak ada pengguna ditemukan</p>
					<p className="mt-2 text-sm text-foreground/50">
						Coba ubah filter atau kata kunci pencarian.
					</p>
				</div>
			)}
		</div>
	)
}
