"use client";

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
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartLegendContent,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  dashboardRingkasan,
  DashboardSummaryItem,
  trenSemester,
  trenSetahun,
  CategoryStat,
  DistrictStat,
  kategoriPengaduan,
  kecamatanPengaduan,
  distribusiStatus,
  aktivitasTerbaru
} from "./adminDummy";

import { upCaseFirstLetter } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const deltaTextStyle = (delta: number | null) => {
  return delta
    ? delta < 0
      ? "text-red-600"
      : "text-green-600"
    : "text-yellow-300";
};

const formatDeltaText = (s: DashboardSummaryItem) => {
  if (s.delta == null) return s.note ?? "-";
  const sign = s.delta > 0 ? "+" : ""; // minus sudah ikut dari angkanya
  const unit = s.deltaUnit === "%" ? "%" : s.deltaUnit ? ` ${s.deltaUnit}` : "";
  return `${sign}${s.delta}${unit} dari bulan lalu`;
};

export default function AdminDashboard() {
  return (
    <div className="my-5 flex flex-col gap-3">
      <p className="font-semibold text-3xl">Dashboard Admin</p>
      <p className="text-zinc-500">
        Ringkasan laporan dan statistik layanan pengaduan Kabupaten Bandung.
      </p>

      <Card className="mt-8 mb-4 w-full grid grid-cols-4 py-0 border border-zinc-600">
        {dashboardRingkasan.map((s) => {
          const delta = formatDeltaText(s);
          return (
            <div key={s.id} className="px-8 py-4 border-r">
              <div className="py-2 flex flex-col gap-2">
                <p className="font-semibold text-2xl">
                  {s.value.toLocaleString("id-ID")} {upCaseFirstLetter(s.unit)}
                </p>
                <p className="text-zinc-500">{s.label}</p>
                <p className={`${deltaTextStyle(s.delta)}`}>{delta}</p>
              </div>
            </div>
          );
        })}
      </Card>
      <TrenChart />
      <div className="grid grid-cols-2 gap-6 mb-5">
        <ProgressTable
          title="Pengaduan per Kategori"
          desc="Total sepanjang waktu."
          kategoriData={kategoriPengaduan}
        />
        <ProgressTable
          title="Pengaduan per kecamatan"
          desc="8 kecamatan dengan pengaduan terbanyak."
          kecamatanData={kecamatanPengaduan}
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <DistributionChart />
        <Card className="px-8">
          <CardTitle>Aktivitas Terbaru</CardTitle>
          <CardDescription>Kejadian terakhir di sistem.</CardDescription>
          <CardContent className="px-0">
            <Table>
              <TableBody>
                {aktivitasTerbaru.map((a) => (
                  <TableRow>
                    <TableCell className="flex justify-between items-center">
                      <p>{a.pesan}</p>
                      <p className="text-zinc-500">{a.waktu}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        
        </Card>
      </div>
    </div>
  );
}

type ProgressTableBase = {
  title: string;
  desc: string;
};

type ProgressTableProps = ProgressTableBase &
  (
    | { kategoriData: CategoryStat[]; kecamatanData?: never }
    | { kecamatanData: DistrictStat[]; kategoriData?: never }
  );

function ProgressTable({
  title,
  desc,
  kategoriData,
  kecamatanData,
}: ProgressTableProps) {
  const kategoriMax = kategoriData
    ? Math.max(...kategoriData.map((r) => r.total))
    : 0;
  const kecamatanMax = kecamatanData
    ? Math.max(...kecamatanData.map((r) => r.total))
    : 0;

  return (
    <Card className="px-8">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{desc}</CardDescription>
      <CardContent className="px-0">
        <Table>
          {kategoriData && (
            <TableBody>
              {kategoriData.map((k) => (
                <TableRow key={k.kategori}>
                  <TableCell>
                    <Progress
                      value={(k.total / kategoriMax) * 100}
                      className={`flex justify-between`}
                    >
                      <ProgressLabel>{k.kategori}</ProgressLabel>
                      <p>{k.total}</p>
                    </Progress>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
          {kecamatanData && (
            <TableBody>
              {kecamatanData.map((k) => (
                <TableRow key={k.kecamatan}>
                  <TableCell>
                    <Progress
                      value={(k.total / kecamatanMax) * 100}
                      className={`flex justify-between`}
                    >
                      <ProgressLabel>{k.kecamatan}</ProgressLabel>
                      <p>{k.total}</p>
                    </Progress>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </CardContent>
    </Card>
  );
}

function TrenChart() {
  const chartConfig = {
    masuk: {
      label: "Masuk",
      color: "var(--chart-1)",
    },
    selesai: {
      label: "Selesai",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;
  return (
    <Card className="px-8 mb-5">
      <CardTitle className="text-xl">Tren Pengaduan</CardTitle>
      <CardDescription>
        Pengaduan masuk dibandingkan yang diselesaikan per bulan.
      </CardDescription>
      <CardContent className="px-0">
        <div>
          <Tabs>
            <TabsList className="flex justify-between">
              <TabsTrigger value={"semester"}>6 Bulan</TabsTrigger>
              <TabsTrigger value={"setahun"}>12 Bulan</TabsTrigger>
            </TabsList>
            <TabsContent value={"semester"}>
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-70 w-full"
              >
                <BarChart accessibilityLayer data={trenSemester}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="bulan"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="masuk" fill="var(--color-masuk)" radius={4} />
                  <Bar
                    dataKey="selesai"
                    fill="var(--color-selesai)"
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </TabsContent>
            <TabsContent value={"setahun"}>
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-70 w-full"
              >
                <BarChart accessibilityLayer data={trenSetahun}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="bulan"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />

                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="masuk" fill="var(--color-masuk)" radius={4} />
                  <Bar
                    dataKey="selesai"
                    fill="var(--color-selesai)"
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
}

function DistributionChart() {
  const data = distribusiStatus;

  const grandTotal = data.reduce((sum, d) => sum + d.total, 0);
  const statusColor: Record<string, string> = {
    Selesai: "bg-emerald-500",
    Diproses: "bg-blue-500",
    Diverifikasi: "bg-amber-500",
    Diterima: "bg-slate-400",
    Ditolak: "bg-red-500",
  };

  return (
    <Card className="px-8">
      <CardTitle>Distribusi Laporan</CardTitle>
      <CardDescription>Satus seluruh pengaduan saat ini.</CardDescription>
      <CardContent className="px-0 flex flex-col gap-4">

        {/* Bar bertumpuk */}
        <TooltipProvider delay={0}>
          <div className="flex h-4 w-full gap-0.5 overflow-hidden rounded-full bg-muted">
            {data.map((d) => (
              <Tooltip key={d.status}>
                <TooltipTrigger
                  render={
                    <div
                      className={`${statusColor[d.status] ?? "bg-primary"} h-full transition-opacity hover:opacity-80`}
                      style={{
                        width: `${(d.total / grandTotal) * 100}%`,
                        minWidth: 4,
                      }}
                      role="img"
                      aria-label={`${d.status}: ${d.total.toLocaleString("id-ID")}`}
                    />
                  }/>
                <TooltipContent render={
                  <div>
                    {d.status}: {d.total.toLocaleString("id-ID")} ({d.persen}%)
                  </div>
                }/>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        {/* Legenda */}
        <ul className="space-y-2">
          {data.map((d) => (
            <li
              key={d.status}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2">
                <span
                  className={`${statusColor[d.status] ?? "bg-primary"} size-2.5 rounded-full`}
                />
                {d.status}
              </span>
              <span className="text-muted-foreground tabular-nums">
                <span className="font-medium text-foreground">
                  {d.total.toLocaleString("id-ID")}
                </span>{" "}
                · {d.persen}%
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
