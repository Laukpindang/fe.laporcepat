import { TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { slaRingkasan, SlaSummaryItem } from "./slaDummy";

export default function SLA() {
  const upCaseFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

    const deltaTextStyle = (delta: number | null) => {
        return delta ? delta < 0 ? "text-red-600" : "text-green-600" : "text-yellow-300"
    }

    const formatDeltaText = (s: SlaSummaryItem) => {
    if (s.delta == null) return s.note ?? "-"
    const sign = s.delta > 0 ? "+" : "" // minus sudah ikut dari angkanya
    const unit = s.deltaUnit === "%" ? "%" : s.deltaUnit ? ` ${s.deltaUnit}` : ""
    return `${sign}${(s.delta)}${unit} dari bulan lalu`
}

  return (
    <div className="my-5 flex flex-col gap-3">
      <p className="text-3xl font-semibold">Monitoring SLA</p>
      <p className="text-zinc-500">
        Statistik kinerja layanan: kecepatan respons, penyelesaian, dan
        kepatuhan batas waktu.
      </p>

      <Card className="my-8 w-full grid grid-cols-4 py-0 border border-zinc-600">
        {slaRingkasan.map((s) => {
            const delta = formatDeltaText(s)
          return (
            <div key={s.id} className="px-8 border-r">
              <div className="py-2 flex flex-col gap-2">
                <p className="font-semibold text-2xl">
                  {s.value} {upCaseFirstLetter(s.unit)}
                </p>
                <p className="text-zinc-500">{s.label}</p>
                <p className={`${deltaTextStyle(s.delta)}`}>
                  {delta}
                </p>
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
