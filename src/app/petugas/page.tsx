'use client'

import SLA from "./sla"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const petugasTabs = [
    'Verifikasi',
    'Log Pengaduan',
    'SLA'
]


export default function Petugas(){
    return(
        <div className="relative min-h-screen overflow-hidden bg-[#0a0a0b] px-6 pb-24 pt-24 text-zinc-100 antialiased">
            <Tabs>
                <TabsList>
                    {petugasTabs.map((tab) => (
                        <TabsTrigger key={tab} value={tab}>{tab}</TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value={'SLA'}>
                    <SLA/>
                </TabsContent>
            </Tabs>
        </div>
    )
}