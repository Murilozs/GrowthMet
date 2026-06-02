"use client";

import { useQuery } from "@tanstack/react-query";
import { getAnalyticsMetrics, getChannelPerformance } from "@/src/services/analyticsService";
import MetricCard from "@/src/components/MetricCard";
import ChannelPerformanceChart from "@/src/components/ChannelPerformanceChart";
import AnalyticsMetricsTable from "@/src/components/AnalyticsMetricsTable";

export default function AnalyticsPage() {
  const { data: metrics, isLoading: metricsLoading } = useQuery({
    queryKey: ["analytics-metrics"],
    queryFn: getAnalyticsMetrics,
  });

  const { data: channels, isLoading: channelsLoading } = useQuery({
    queryKey: ["channel-performance"],
    queryFn: getChannelPerformance,
  });

  const totalImpressions = metrics?.reduce((acc, m) => acc + m.impressions, 0) ?? 0;
  const totalClicks = metrics?.reduce((acc, m) => acc + m.clicks, 0) ?? 0;
  const totalCost = metrics?.reduce((acc, m) => acc + m.cost, 0) ?? 0;
  const avgCtr = metrics?.length ? (totalClicks / totalImpressions) * 100 : 0;

  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <MetricCard title="Total Impressions" value={totalImpressions.toLocaleString()} />
        <MetricCard title="Total Clicks" value={totalClicks.toLocaleString()} />
        <MetricCard title="Avg CTR" value={`${avgCtr.toFixed(1)}%`} />
        <MetricCard title="Total Cost" value={`$${totalCost.toLocaleString()}`} />
      </div>

      <div className="bg-card-bg rounded-xl shadow-sm border border-gray-100 p-5 md:p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Channel Performance</h2>
        <ChannelPerformanceChart data={channels || []} isLoading={channelsLoading} />
      </div>

      <AnalyticsMetricsTable data={metrics || []} isLoading={metricsLoading} />
    </div>
  );
}