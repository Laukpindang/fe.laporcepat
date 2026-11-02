'use client'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

export default function FilterComboBoxItems({
	items,
	selectedItem,
	defaultItem,
	setSelectedItem
}: {
	items: string[]
	selectedItem: string
	defaultItem: string
	setSelectedItem: (item: string) => void
}) {
	return (
		<div className="w-1/6">
			<Select
				value={selectedItem}
				onValueChange={(value) => setSelectedItem(value ? value : defaultItem)}
			>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Filter pengaduan..." />
				</SelectTrigger>
				<SelectContent>
					{items.map((item) => (
						<SelectItem key={item} value={item}>
							{item}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
