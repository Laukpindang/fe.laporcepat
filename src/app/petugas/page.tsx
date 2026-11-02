'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Log from './log'
import SLA from './sla'
import Verifikasi from './verifikasi'

const petugasTabs = ['SLA', 'Verifikasi', 'Log Pengaduan']

export default function Petugas() {
	const [activeTab, setActiveTab] = useState('Verifikasi')

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
				<TabsContent value={'Verifikasi'}>
					<Verifikasi />
				</TabsContent>
				<TabsContent value={'Log Pengaduan'}>
					<Log />
				</TabsContent>
			</Tabs>
		</div>
	)
}
