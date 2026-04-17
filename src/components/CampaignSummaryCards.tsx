"use client";

import { useQuery } from "@tanstack/react-query";
import { getCampaigns } from "@/src/services/campaignsService";
import MetricCard from "@/src/components/MetricCard";
import { Campaign } from "../types/campaigns";

export default function CampaignSummaryCards() {
  const { data, isLoading } = useQuery<Campaign[]>({
    queryKey: ["campaigns"],
    queryFn: getCampaigns,
  });

  if (isLoading) return <p>Loading summary...</p>;

  const totalCampaigns = data?.length || 0;
  const activeCampaigns =
    data?.filter((item) => item.status === "Active").length || 0;
  const totalBudget = data?.reduce((acc, item) => acc + item.budget, 0) || 0;

  return (
    <div className="grid grid-cols-3 gap-6">
      <MetricCard title="Total Campaigns" value={String(totalCampaigns)} />
      <MetricCard title="Active Campaigns" value={String(activeCampaigns)} />
      <MetricCard
        title="Total Budget"
        value={`$${totalBudget.toLocaleString()}`}
      />
    </div>
  );
}
