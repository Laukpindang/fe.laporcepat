'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SLA from './sla'

const petugasTabs = ['Verifikasi', 'Log Pengaduan', 'SLA']

export default function Petugas() {
	const [activeTab, setActiveTab] = useState('SLA')

	return (
		<div className="relative min-h-screen overflow-hidden bg-[#0a0a0b] px-6 pb-24 pt-24 text-zinc-100 antialiased">
			{/* Bagian tab untuk perpindahan halaman petugas, dengan value seperti yang ada pada petugasTabs*/}
			<Tabs value={activeTab} onValueChange={setActiveTab}>
				<TabsList className="w-1/3">
					{petugasTabs.map((tab) => (
						<TabsTrigger key={tab} value={tab}>
							{tab}
						</TabsTrigger>
					))}
				</TabsList>
				<TabsContent value={'SLA'}>
					<SLA tabSwitch={(e) => setActiveTab(e)} />
				</TabsContent>
			</Tabs>
		</div>
	)
}
