'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import AdminDashboard from './dashboard'
import AdminPengguna from './pengguna'

const adminTabs = ['Dashboard', 'Manajemen Pengguna']

export default function Admin() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-[#0a0a0b] px-6 pb-24 pt-24 text-zinc-100 antialiased">
			<Tabs>
				<TabsList>
					{adminTabs.map((t) => (
						<TabsTrigger key={t} value={t}>
							{t}
						</TabsTrigger>
					))}
				</TabsList>
				<TabsContent value="Dashboard">
					<AdminDashboard />
				</TabsContent>
				<TabsContent value="Manajemen Pengguna">
					<AdminPengguna />
				</TabsContent>
			</Tabs>
		</div>
	)
}
