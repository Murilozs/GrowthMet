"use client";

import { useQuery } from "@tanstack/react-query";
import { getMetrics } from "@/src/services/metricsService";
import MetricCard from "@/src/components/MetricCard";
import RevenueChart from "@/src/components/RevenueChart";

export default function DashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["metrics"],
    queryFn: getMetrics,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Marketing Analytics</h1>

      <div className="grid grid-cols-3 gap-6">
        <MetricCard title="Revenue" value={`$${data.revenue}`} />
        <MetricCard title="Leads" value={data.leads} />
        <MetricCard title="Conversion Rate" value={`${data.conversionRate}%`} />
      </div>

      <RevenueChart />
    </div>
  );
}
