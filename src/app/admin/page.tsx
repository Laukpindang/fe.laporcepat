"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AdminDashboard from "./dashboard";

const adminTabs = ["Dashboard", "Manajemen Pengguna"];

export default function Admin() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0b] px-6 pb-24 pt-24 text-zinc-100 antialiased">
      <Tabs>
        <TabsList className={`w-1/3`}>
          {adminTabs.map((t) => (
            <TabsTrigger key={t} value={t}>
              {t}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={"Dashboard"}>
          <AdminDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
