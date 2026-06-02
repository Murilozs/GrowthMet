import LeadsTable from "@/src/components/LeadsTable";

export default function LeadsPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Leads</h1>

      <LeadsTable />
    </div>
  );
}
