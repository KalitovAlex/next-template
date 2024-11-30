"use client";

import dynamic from "next/dynamic";

const DashboardPage = dynamic(
  () =>
    import("@/page/dashboard/ui/DashboardPage").then(
      (mod) => mod.DashboardPage
    ),
  { ssr: false }
);

export function DashboardWrapper() {
  return <DashboardPage />;
}
