import CampaignsTable from "@/src/components/CampaignsTable";
import CampaignSummaryCards from "@/src/components/CampaignSummaryCards";

export default function CampaignsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Campaigns</h1>

      <CampaignSummaryCards />

      <CampaignsTable />
    </div>
  );
}
