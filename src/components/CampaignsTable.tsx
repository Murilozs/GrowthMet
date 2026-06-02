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

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-[200px]">
      <p className="text-gray-500">Loading campaigns...</p>
    </div>
  );

  return (
    <div className="bg-card-bg rounded-xl shadow-sm border border-gray-100 p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Campaigns</h2>
        <input
          type="text"
          placeholder="Pesquisar campaign..."
          className="border border-gray-200 rounded-lg px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCampaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 font-medium text-gray-900">{campaign.name}</td>
                <td className="text-gray-600">{campaign.channel}</td>
                <td>
                  <span
                    className={`
                      px-2.5 py-1 rounded-full text-xs font-medium
                      ${campaign.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : campaign.status === "Paused"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"}
                    `}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="text-gray-600">${campaign.budget.toLocaleString()}</td>
                <td className="text-gray-600">{campaign.conversions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
