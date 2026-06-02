import CampaignsTable from "@/src/components/CampaignsTable";
import CampaignSummaryCards from "@/src/components/CampaignSummaryCards";

export default function CampaignsPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Campaigns</h1>

      <CampaignSummaryCards />

      <CampaignsTable />
    </div>
  );
}
