"use client";

import { useMemo, useState } from "react";
import { AnalyticsMetric } from "../types/analytics";

interface Props {
  data: AnalyticsMetric[];
  isLoading: boolean;
}

export default function AnalyticsMetricsTable({ data, isLoading }: Props) {
  const [search, setSearch] = useState("");
  const [selectedChannel, setSelectedChannel] = useState("All");

  const channels = useMemo(() => {
    if (!data) return ["All"];
    const uniqueChannels = [...new Set(data.map((item) => item.channel))];
    return ["All", ...uniqueChannels];
  }, [data]);

  const filteredMetrics = useMemo(() => {
    if (!data) return [];

    return data.filter((metric) => {
      const matchesSearch = metric.date.includes(search);
      const matchesChannel = selectedChannel === "All" || metric.channel === selectedChannel;
      return matchesSearch && matchesChannel;
    });
  }, [data, search, selectedChannel]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-gray-500">Loading metrics...</p>
      </div>
    );
  }

  return (
    <div className="bg-card-bg rounded-xl shadow-sm border border-gray-100 p-5 md:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Analytics Metrics</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <select
            value={selectedChannel}
            onChange={(e) => setSelectedChannel(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {channels.map((channel) => (
              <option key={channel} value={channel}>
                {channel}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">CTR</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">CPC</th>
            </tr>
          </thead>

          <tbody>
            {filteredMetrics.map((metric) => (
              <tr key={metric.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 text-gray-900">{metric.date}</td>
                <td className="text-gray-600">{metric.channel}</td>
                <td className="text-gray-600">{metric.impressions.toLocaleString()}</td>
                <td className="text-gray-600">{metric.clicks.toLocaleString()}</td>
                <td className="text-gray-600">{metric.ctr.toFixed(1)}%</td>
                <td className="text-gray-600">${metric.cost.toLocaleString()}</td>
                <td className="text-gray-600">${metric.cpc.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}