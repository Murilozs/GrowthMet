"use client";

import { useQuery } from "@tanstack/react-query";
import { getLeads } from "@/src/services/leadsService";
import { Lead } from "../types/Lead";
import { useState } from "react";

export default function LeadsTable() {
  const { data, isLoading } = useQuery<Lead[]>({
    queryKey: ["leads"],
    queryFn: getLeads,
  });
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-[200px]">
      <p className="text-gray-500">Loading leads...</p>
    </div>
  );

  const filteredLeads = data?.filter((lead: Lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil((filteredLeads?.length || 0) / ITEMS_PER_PAGE);

  const paginatedLeads = filteredLeads?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="bg-card-bg rounded-xl shadow-sm border border-gray-100 p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Leads</h2>
        <input
          type="text"
          placeholder="Pesquise por nome..."
          className="border border-gray-200 rounded-lg px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
            </tr>
          </thead>

          <tbody>
            {paginatedLeads?.map((lead) => (
              <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 font-medium text-gray-900">{lead.name}</td>
                <td className="text-gray-600">{lead.email}</td>
                <td className="text-gray-600">{lead.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-500">
          Page {currentPage} of {totalPages || 1}
        </p>

        <div className="flex gap-2">
          <button
            className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <button
            className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
