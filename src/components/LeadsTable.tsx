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

  const ITEMS_PER_PAGE = 3;

  if (isLoading) return <p>Loading leads...</p>;

  const filteredLeads = data?.filter((lead: Lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil((filteredLeads?.length || 0) / ITEMS_PER_PAGE);

  const paginatedLeads = filteredLeads?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <input
        type="text"
        placeholder="Pesquise por nome..."
        className="border rounded px-3 py-2 mb-4"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Nome</th>
            <th>Email</th>
            <th>Source</th>
          </tr>
        </thead>

        <tbody>
          {paginatedLeads?.map((lead) => (
            <tr key={lead.id} className="border-b">
              <td className="py-2">{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-500">
          Page {currentPage} of {totalPages || 1}
        </p>

        <div className="flex gap-2">
          <button
            className="px-3 py-2 border rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <button
            className="px-3 py-2 border rounded disabled:opacity-50"
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
