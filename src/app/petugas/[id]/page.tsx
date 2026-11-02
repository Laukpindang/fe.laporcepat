'use client'

import { useState } from "react";

import { pengaduanList } from "../verifikasiDummy";

export default async function VerifikasiDetail({
    params
} : {
    params: Promise<{ id: string }>
}) {
    const id = await params;
    const pengaduan = pengaduanList.find((p) => p.id === id.id);


    return(
        <div className="relative min-h-screen overflow-hidden bg-[#0a0a0b] px-6 pb-24 pt-24 text-zinc-100 antialiased">
            <h1>Verifikasi Detail</h1>
        </div>
    )
}