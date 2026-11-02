export { cn } from 'cn'

export const upCaseFirstLetter = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1)
}

export function countDays(startDate: string, endDate: string): number {
	const [y1, m1, d1] = startDate.split('-').map(Number)
	const [y2, m2, d2] = endDate.split('-').map(Number)

	const utc1 = Date.UTC(y1, m1 - 1, d1)
	const utc2 = Date.UTC(y2, m2 - 1, d2)

	const msPerDay = 1000 * 60 * 60 * 24
	const diffInMs = Math.abs(utc2 - utc1)

	return Math.round(diffInMs / msPerDay)
}

export function getTodayLocalDate() {
	const now = new Date()
	const year = now.getFullYear()
	const month = String(now.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
	const day = String(now.getDate()).padStart(2, '0')

	return `${year}-${month}-${day}`
}

export function formatShortMonthDate(dateStr: string) {
	const parsedDate = new Date(dateStr)
	return parsedDate.toLocaleDateString('id-ID', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	})
}
