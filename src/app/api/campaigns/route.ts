export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Black Friday 2026",
      channel: "Google Ads",
      status: "Active",
      budget: 12000,
      conversions: 148,
    },
    {
      id: 2,
      name: "Summer Sale",
      channel: "Instagram",
      status: "Paused",
      budget: 8000,
      conversions: 91,
    },
    {
      id: 3,
      name: "B2B Leads",
      channel: "LinkedIn",
      status: "Active",
      budget: 15000,
      conversions: 67,
    },
    {
      id: 4,
      name: "Remarketing",
      channel: "Facebook",
      status: "Draft",
      budget: 5000,
      conversions: 34,
    },
  ]);
}
