import { useEffect, useState } from 'react'
import type { Pengaduan } from '@/lib/getPengaduan'
import { getPengaduan, getPengaduanTerlambat } from '@/lib/getPengaduan'

const fetchers = {
	all: getPengaduan,
	terlambat: getPengaduanTerlambat
} as const

type Variant = keyof typeof fetchers

export function usePengaduan(variant: Variant) {
	const [pengaduanList, setPengaduanList] = useState<Pengaduan[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		let cancelled = false
		setLoading(true)
		setError(false)

		fetchers[variant]()
			.then((data) => !cancelled && setPengaduanList(data))
			.catch(() => !cancelled && setError(true))
			.finally(() => !cancelled && setLoading(false))

		return () => {
			cancelled = true
		}
	}, [variant])

	return { pengaduanList, loading, error }
}
