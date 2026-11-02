"use client";

import { useState } from "react";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import { pengaduanList } from "./verifikasiDummy";
import FilterComboBoxItems from "@/components/custom/filter-select";
import { Button } from "@/components/ui/button";

const filterItems: {
  status: string[];
  kategori: string[];
} = {
  status: ["Semua Status", ...new Set(pengaduanList.map((p) => p.status))],
  kategori: [
    "Semua Kategori",
    ...new Set(pengaduanList.map((p) => p.kategori)),
  ],
};

const statusVerifikasi = {
  "Menunggu Verifikasi": pengaduanList.filter((p) => p.status === "Diterima"),
  "Sudah Diverifikasi": pengaduanList.filter(
    (p) => p.status === "Diverifikasi",
  ),
  "Sedang Diproses": pengaduanList.filter((p) => p.status === "Diproses"),
  "Melewati SLA": pengaduanList.filter((p) => p.sisaSlaHari < 0),
};

export default function Verifikasi() {
  const [selectedItem, setSelectedItem] = useState({
    status: filterItems.status[0] || "",
    kategori: filterItems.kategori[0] || "",
  });

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const filteredPengaduan = pengaduanList.filter((pengaduan) => {
    const statusMatch =
      selectedItem.status === "Semua Status" ||
      pengaduan.status === selectedItem.status;

    const kategoriMatch =
      selectedItem.kategori === "Semua Kategori" ||
      pengaduan.kategori === selectedItem.kategori;
    return statusMatch && kategoriMatch;
  });

  const changePage = (newPage: number) => {
    if (
      newPage < 1 ||
      newPage > Math.ceil(filteredPengaduan.length / itemsPerPage)
    ) {
      return; // Prevent changing to an invalid page
    }
    setPage(newPage);
  };

  const activePageDatas = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPengaduan.slice(startIndex, endIndex);
  };

  return (
    <div className="my-5 flex flex-col gap-3">
      <div className="flex flex-col gap-2 pb-8">
        <p className="text-3xl font-semibold">Log Pengaduan</p>
        <p className="text-zinc-500">
          Catatan seluruh pengaduan yang pernah masuk, lengkap dengan pencarian
          dan filter.
        </p>
      </div>

      <Card className="grid grid-cols-4 py-0 border border-zinc-600/80">
        {Object.entries(statusVerifikasi).map(([status, pengaduan]) => (
          <div
            key={status}
            className="py-4 flex flex-col items-center justify-center gap-2 border-l border-zinc-700"
          >
            <p className="text-zinc-500 font-semibold">{status}</p>
            <p className="text-2xl font-semibold">{pengaduan.length}</p>
          </div>
        ))}
      </Card>

      <Card id="tabel-verifikasi" className="border border-zinc-700/50 pb-0">
        <div className="px-8 py-2 flex justify-start items-center gap-4">
          <Input placeholder="Cari pengaduan..." className="w-1/3" />
          {Object.keys(filterItems).map((filter) => (
            <FilterComboBoxItems
              key={filter}
              items={filterItems[filter.toString() as keyof typeof filterItems]}
              selectedItem={
                selectedItem[filter.toString() as keyof typeof filterItems]
              }
              defaultItem={
                filterItems[filter.toString() as keyof typeof filterItems][0]
              }
              setSelectedItem={(item: string) =>
                setSelectedItem({ ...selectedItem, [filter]: item })
              }
            />
          ))}
        </div>
        <CardContent className="px-0">
          <Card className=" py-0 my-0">
            <Table id="log-pengaduan-table" className="w-full">
              <TableHeader>
                <TableRow className="text-zinc-400 font-semibold mx-10">
                  <TableHead className="text-zinc-400 px-4 w-1/3">
                    Pengaduan
                  </TableHead>
                  <TableHead className="text-zinc-400 w-1/6">
                    Kategori
                  </TableHead>
                  <TableHead className="text-zinc-400 w-1/6">Masuk</TableHead>
                  <TableHead className="text-zinc-400 w-1/6">
                    Sisa SLA
                  </TableHead>
                  <TableHead className="text-zinc-400 w-1/6">Status</TableHead>
                  <TableHead className="text-zinc-400 w-1/6">
                    Tindakan
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {activePageDatas().map((pengaduan) => {
                  const parsedDate = new Date(pengaduan.masuk);
                  const formattedDate = parsedDate.toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  });

                  const slaWarning = {
                    style: () => {
                      if (pengaduan.sisaSlaHari < 0) {
                        return "text-red-500";
                      } else if (pengaduan.sisaSlaHari <= 2) {
                        return "text-yellow-500";
                      }
                    },
                    days: () => {
                      if (pengaduan.sisaSlaHari < 0) {
                        return `Terlambat ${pengaduan.sisaSlaHari * -1} Hari`;
                      } else {
                        return `${pengaduan.sisaSlaHari} hari lagi`;
                      }
                    },
                  };

                  return (
                    <TableRow key={pengaduan.id}>
                      <TableCell className="px-4 w-[500px] whitespace-normal wrap-break-word">
                        <p className="font-semibold text-md wrap-normal">
                          {pengaduan.judul}
                        </p>
                        <p className="text-zinc-500 text-sm">
                          {pengaduan.id} • {pengaduan.kecamatan}
                        </p>
                      </TableCell>
                      <TableCell className="font-medium text-zinc-400">
                        {pengaduan.kategori}
                      </TableCell>
                      <TableCell>{formattedDate}</TableCell>
                      <TableCell className={slaWarning.style()}>
                        {slaWarning.days()}
                      </TableCell>
                      <TableCell>
                        <Badge>{pengaduan.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant={`outline`}
                          className=" text-white px-4 py-2  rounded-md hover:bg-blue-600 transition-colors"
                        >
                          Tinjau
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <div className="pb-4 px-8 flex items-center justify-between gap-4">
              <div>
                <p className="w-100 flex items-center gap-2 ">
                  Current Page:
                  <span className="text-start py-1 px-2 rounded-sm font-semibold border border-zinc-400">{page}</span>
                </p>
              </div>
              <Pagination className="mx-0 w-auto">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#tabel-verifikasi"
                      onClick={() => changePage(page - 1)}
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      href="#tabel-verifikasi"
                      onClick={() => changePage(page + 1)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
