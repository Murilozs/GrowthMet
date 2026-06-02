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

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <p className="text-lg text-gray-500">Loading...</p>
    </div>
  );

  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Marketing Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <MetricCard title="Revenue" value={`$${data.revenue}`} />
        <MetricCard title="Leads" value={data.leads} />
        <MetricCard title="Conversion Rate" value={`${data.conversionRate}%`} />
      </div>

      <div className="w-full">
        <RevenueChart />
      </div>
    </div>
  );
}
