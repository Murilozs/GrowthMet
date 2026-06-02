"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { ChannelPerformance } from "../types/analytics";

interface Props {
  data: ChannelPerformance[];
  isLoading: boolean;
}

export default function ChannelPerformanceChart({ data, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <p className="text-gray-500">Loading chart...</p>
      </div>
    );
  }

  const chartData = data?.map((item) => ({
    channel: item.channel,
    impressions: item.impressions,
    clicks: item.clicks,
    conversions: item.conversions,
  })) || [];

  return (
    <div className="w-full h-[300px] min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="channel" stroke="#64748b" fontSize={12} />
          <YAxis stroke="#64748b" fontSize={12} />
          <Tooltip
            contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
          />
          <Bar dataKey="impressions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="clicks" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="conversions" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}