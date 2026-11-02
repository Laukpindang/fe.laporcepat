'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Separator } from './ui/separator'

export default function Header() {
	const [loading, setLoading] = useState(true)
	const [logged, setLogged] = useState(false)

	useEffect(() => {
		const checkLoginStatus = () => {
			const isLogged = localStorage.getItem('laporcepat-logged') === 'logged'
			setLogged(isLogged)
			setLoading(false)
		}

		checkLoginStatus()
	}, [])

	if (loading) {
		return null
	}

	return (
		<header className="px-5 py-2 flex items-center justify-between">
			<div>
				<h1 className="text-xl font-bold">LAPORCEPAT</h1>
				<p className="text-sm text-accent-foreground/50">KABUPATEN BANDUNG</p>
			</div>
			<nav className="flex items-center gap-3">
				<Link href="/">Beranda</Link>
				<Link href="/">Alur Pengaduan</Link>
				<Link href="/">Lacak Pengaduan</Link>
				<Separator orientation="vertical" className="bg-foreground" />
				{logged ? (
					<>
						<Link href="/profil">Profil</Link>
						<Link
							href="#"
							onClick={() => localStorage.removeItem('laporcepat-logged')}
						>
							Keluar
						</Link>
					</>
				) : (
					<>
						<Link href="/login">Masuk</Link>
						<Link href="/register">Daftar</Link>
					</>
				)}
			</nav>
		</header>
	)
}
