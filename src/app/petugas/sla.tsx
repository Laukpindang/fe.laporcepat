'use client'


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
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import {
  slaRingkasan,
  SlaSummaryItem,
  slaStandar,
  kinerjaOpd,
  slaTren,
  pengaduanMelewatiBatas
} from "./slaDummy";
import { upCaseFirstLetter } from "@/lib/utils";


const chartConfig = {
  persen: {
    label: "Kepatuhan SLA (%) ",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;


const deltaTextStyle = (delta: number | null) => {
  return delta
    ? delta < 0
      ? "text-red-600"
      : "text-green-600"
    : "text-yellow-300";
};

const formatDeltaText = (s: SlaSummaryItem) => {
  if (s.delta == null) return s.note ?? "-";
  const sign = s.delta > 0 ? "+" : ""; // minus sudah ikut dari angkanya
  const unit = s.deltaUnit === "%" ? "%" : s.deltaUnit ? ` ${s.deltaUnit}` : "";
  return `${sign}${s.delta}${unit} dari bulan lalu`;
};

export default function SLA({
    tabSwitch
} : {
    tabSwitch: (e: any) => void
}) {

  return (
    <div className="my-5 flex flex-col gap-3">
      <p className="text-3xl font-semibold">Monitoring SLA</p>
      <p className="text-zinc-500">
        Statistik kinerja layanan: kecepatan respons, penyelesaian, dan
        kepatuhan batas waktu.
      </p>

      <Card className="mt-8 mb-4 w-full grid grid-cols-4 py-0 border border-zinc-600">
        {slaRingkasan.map((s) => {
          const delta = formatDeltaText(s);
          return (
            <div key={s.id} className="px-8 border-r">
              <div className="py-2 flex flex-col gap-2">
                <p className="font-semibold text-2xl">
                  {s.value} {upCaseFirstLetter(s.unit)}
                </p>
                <p className="text-zinc-500">{s.label}</p>
                <p className={`${deltaTextStyle(s.delta)}`}>{delta}</p>
              </div>
            </div>
          );
        })}
      </Card>

      <div className="grid grid-cols-2 gap-8">
        <Card className="p-4">
          <CardTitle>Tren kepatuhan SLA (%)</CardTitle>
          <CardDescription>
            Persentase pengaduan selesai tepat waktu, 6 bulan terakhir.
          </CardDescription>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={slaTren}
                margin={{
                  top: 20,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="bulan"
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent formatter={(value) => `${value}%`} />
                  }
                />
                <Bar dataKey="persen" fill="var(--color-persen)" radius={8}>
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                    formatter={(value: unknown) => `${value}%`}
                  />
                  %
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardTitle>Standar SLA per Kategori</CardTitle>
          <CardDescription className="text-zinc-500">
            Batas waktu yang berlaku sejak pengaduan dinyatakan valid.
          </CardDescription>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow className="text-zinc-400 font-semibold">
                  <TableHead className="w-1/2 text-zinc-400 font-semibold text-md">
                    Kategori
                  </TableHead>
                  <TableHead className="text-zinc-400 font-semibold text-md">
                    Respons Hari
                  </TableHead>
                  <TableHead className="text-zinc-400 font-semibold text-md">
                    Selesai
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {slaStandar.map((sla) => (
                  <TableRow key={sla.kategori}>
                    <TableCell>{sla.kategori}</TableCell>
                    <TableCell className="font-semibold">
                      {sla.responsHari} Hari
                    </TableCell>
                    <TableCell className="font-semibold">
                      {sla.selesaiHari} Hari
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Card className="my-4 px-0">
        <CardTitle className="px-8 text-xl flex flex-col gap-2">
          <p>Kinerja per OPD</p>
          <p className="text-sm font-normal text-zinc-400">
            Dibandingkan dari jumlah pengaduan yang ditangani bulan ini.
          </p>
        </CardTitle>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3 text-zinc-400 font-semibold text-md">
                  OPD
                </TableHead>
                <TableHead className="text-zinc-400 font-semibold text-md">
                  Ditangani
                </TableHead>
                <TableHead className="text-zinc-400 font-semibold text-md">
                  Rata-Rata Selesai
                </TableHead>
                <TableHead className="text-zinc-400 font-semibold text-md">
                  Tepat Waktu
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kinerjaOpd.map((opd) => (
                <TableRow key={opd.opd}>
                  <TableCell>{opd.opd}</TableCell>
                  <TableCell>{opd.ditangani}</TableCell>
                  <TableCell>{opd.rataRataSelesaiHari}</TableCell>
                  <TableCell className="grid grid-cols-[1fr_40px] items-center gap-10">
                    <Progress
                      value={opd.tepatWaktuPersen}
                      className={`text-amber-50`}
                    />
                    {opd.tepatWaktuPersen} %
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="px-8">
        <CardTitle className="text-xl">Melewati batas SLA</CardTitle>
        <CardDescription>
          Pengaduan yang perlu segera ditindaklanjuti.
        </CardDescription>
        <CardContent className="px-0">
          <Table className="">
            <TableBody>
              {pengaduanMelewatiBatas.map((p) => (
                <TableRow key={p.id}>
                  <TableCell
                    key={p.id}
                    className="p-2 border-b border-zinc-800 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-lg">{p.judul}</p>
                      <p className="text-zinc-500">
                        {p.id} • {p.opd}
                      </p>
                    </div>
                    <Badge className="bg-red-800/50">
                        <span className="text-red-400">

                            Terlambat {p.terlambatHari} Hari
                        </span>
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button onClick={() => tabSwitch('Log Pengaduan')} variant={`outline`} className={`w-full`}>
            Lihat Semua
            <ArrowRight/>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
