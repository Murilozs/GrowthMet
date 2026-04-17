"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCampaigns } from "@/src/services/campaignsService";
import { Campaign } from "../types/campaigns";

export default function CampaignsTable() {
  const { data, isLoading } = useQuery<Campaign[]>({
    queryKey: ["campaigns"],
    queryFn: getCampaigns,
  });

  const [search, setSearch] = useState("");

  const filteredCampaigns = useMemo(() => {
    if (!data) return [];

    return data.filter((campaign) =>
      campaign.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  if (isLoading) return <p>Loading campaigns...</p>;

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Pesquisar campaign..."
          className="border rounded px-3 py-2 w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="py-3">Name</th>
            <th>Channel</th>
            <th>Status</th>
            <th>Budget</th>
            <th>Conversions</th>
          </tr>
        </thead>

        <tbody>
          {filteredCampaigns.map((campaign) => (
            <tr key={campaign.id} className="border-b">
              <td className="py-3">{campaign.name}</td>
              <td>{campaign.channel}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    campaign.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : campaign.status === "Paused"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {campaign.status}
                </span>
              </td>
              <td>${campaign.budget.toLocaleString()}</td>
              <td>{campaign.conversions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
