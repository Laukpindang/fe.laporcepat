import Link from 'next/link'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { buttonVariants } from '@/components/ui/button'

const alur = [
	{
		no: '01',
		judul: 'Daftar & masuk',
		isi: 'Buat akun dengan NIK dan email. Cukup sekali, lalu semua pengaduan Anda tercatat di satu tempat.'
	},
	{
		no: '02',
		judul: 'Isi formulir pengaduan',
		isi: 'Pilih kategori fasilitas, tulis keluhan, tandai lokasi, dan unggah foto bukti dari ponsel Anda.'
	},
	{
		no: '03',
		judul: 'Diverifikasi petugas',
		isi: 'Petugas memeriksa kelengkapan dan kebenaran laporan sebelum diteruskan ke instansi terkait.'
	},
	{
		no: '04',
		judul: 'Disposisi ke OPD',
		isi: 'Laporan valid dikirim ke perangkat daerah yang berwenang, lengkap dengan batas waktu penyelesaian.'
	},
	{
		no: '05',
		judul: 'Pantau sampai selesai',
		isi: 'Lihat setiap perubahan status secara real time dan terima tanggapan resmi setelah diselesaikan.'
	}
]

const statistik = [
	{ angka: '12.480', label: 'Pengaduan diterima' },
	{ angka: '91%', label: 'Diselesaikan sesuai SLA' },
	{ angka: '2,4 hari', label: 'Rata-rata waktu respons' },
	{ angka: '31', label: 'Kecamatan terlayani' }
]

const kategori = [
	{
		nama: 'Jalan & jembatan',
		isi: 'Lubang, retak, jembatan rusak, marka jalan pudar.'
	},
	{
		nama: 'Penerangan jalan',
		isi: 'Lampu padam, tiang miring, kabel menjuntai.'
	},
	{
		nama: 'Drainase & banjir',
		isi: 'Selokan tersumbat, genangan, tanggul rusak.'
	},
	{
		nama: 'Taman & ruang terbuka',
		isi: 'Fasilitas taman, lapangan, dan area publik.'
	},
	{
		nama: 'Transportasi umum',
		isi: 'Halte, terminal, rambu, dan sarana angkutan.'
	},
	{
		nama: 'Kesehatan & pendidikan',
		isi: 'Puskesmas, posyandu, dan sarana sekolah negeri.'
	}
]

const faq = [
	{
		q: 'Siapa yang dapat membuat pengaduan?',
		a: 'Setiap warga yang telah mendaftar dan masuk ke akun. Pendaftaran gratis dan hanya membutuhkan NIK, email, dan nomor ponsel aktif.'
	},
	{
		q: 'Pengaduan apa saja yang dapat disampaikan?',
		a: 'Pengaduan seputar fasilitas umum di wilayah Kabupaten Bandung, seperti jalan, penerangan, drainase, taman, halte, dan fasilitas layanan publik lainnya.'
	},
	{
		q: 'Berapa lama pengaduan saya ditindaklanjuti?',
		a: 'Setiap kategori memiliki batas waktu respons dan penyelesaian (SLA). Anda dapat memantau sisa waktunya langsung pada halaman detail pengaduan.'
	},
	{
		q: 'Bagaimana saya tahu status pengaduan saya?',
		a: 'Buka menu Pengaduan Saya. Status berubah dari Diterima, Diverifikasi, Diproses, hingga Selesai, lengkap dengan tanggapan petugas.'
	},
	{
		q: 'Apakah identitas saya aman?',
		a: 'Data pribadi hanya digunakan untuk verifikasi dan tidak ditampilkan kepada publik.'
	}
]

export default function Home() {
	return (
		<div>
			{/* Hero */}
			<section className="h-dvh max-w-5xl mx-auto flex flex-col justify-center items-center text-center gap-4">
				<span className="flex items-center justify-center px-3 py-2 gap-2 border rounded-full text-xs bg-accent w-fit">
					<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
					Layanan resmi Pemerintah Kabupaten Bandung
				</span>
				<h1 className="text-5xl">Laporkan fasilitas umum yang bermasalah.</h1>
				<p className="text-lg text-muted-foreground">
					Sampaikan pengaduan dalam hitungan menit, pantau prosesnya secara
					terbuka, dan ketahui kapan masalah diselesaikan. Satu pintu untuk
					seluruh warga Kabupaten Bandung.
				</p>
				<div className="flex items-center gap-3">
					<Link href="/pengaduan/baru" className={buttonVariants()}>
						Buat Pengaduan
					</Link>
					<Link
						href="/login"
						className={buttonVariants({ variant: 'outline' })}
					>
						Masuk ke Akun
					</Link>
				</div>
				<p className="text-muted-foreground">
					Gratis · Transparan · Dipantau SLA
				</p>
			</section>

			{/* Alur */}
			<section className="max-w-5xl mx-auto mb-24 flex flex-col justify-center gap-5">
				<h2 className="text-5xl">
					Tidak ada lagi pengaduan <br /> yang hilang tanpa kabar.
				</h2>
				<p className="text-lg text-muted-foreground">
					Dari laporan masuk hingga selesai, setiap langkah tercatat dan bisa
					Anda pantau.
				</p>
				<div className="divide-y border-y border-accent">
					{alur.map((a) => (
						<div key={a.no} className="grid md:grid-cols-12 gap-3 py-8">
							<span className="md:col-span-2 text-sm text-muted-foreground/50">
								{a.no}
							</span>
							<h3 className="md:col-span-5 text-xl font-medium">{a.judul}</h3>
							<p className="md:col-span-5 text-muted-foreground">{a.isi}</p>
						</div>
					))}
				</div>
			</section>

			{/* Statistik */}
			<section className="mb-24">
				<div className="grid max-w-5xl mx-auto bg-accent/50 divide-x divide-y grid-cols-2 gap-px rounded-2xl border lg:grid-cols-4">
					{statistik.map((s) => (
						<div key={s.label} className="p-8">
							<p className="text-3xl font-semibold sm:text-4xl">{s.angka}</p>
							<p className="mt-2 text-sm">{s.label}</p>
						</div>
					))}
				</div>
			</section>

			{/* Kategori */}
			<section className="max-w-5xl mx-auto mb-24 flex flex-col justify-center gap-5">
				<h2 className="text-5xl">Untuk setiap fasilitas umum.</h2>
				<p className="text-lg text-muted-foreground">
					Pilih kategori yang paling sesuai, petugas akan meneruskannya ke
					instansi yang tepat.
				</p>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{kategori.map((k) => (
						<Link
							key={k.nama}
							href="/pengaduan/baru"
							className="rounded-2xl border p-6 bg-accent/50"
						>
							<h3 className="text-lg">{k.nama}</h3>
							<p className="mt-2 text-sm text-muted-foreground">{k.isi}</p>
							<span className="mt-6 inline-flex items-center gap-1 text-sm">
								Laporkan <span aria-hidden>→</span>
							</span>
						</Link>
					))}
				</div>
			</section>

			{/* FAQ */}
			<section className="max-w-5xl mx-auto mb-24 flex flex-col justify-center gap-5">
				<h3 className="text-5xl">Pertanyaan Umum</h3>
				<Accordion>
					{faq.map((f) => (
						<AccordionItem key={f.q} value={f.q}>
							<AccordionTrigger className="py-6 text-xl">
								{f.q}
							</AccordionTrigger>
							<AccordionContent className="text-muted-foreground text-lg">
								{f.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
		</div>
	)
}
