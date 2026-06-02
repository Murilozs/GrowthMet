import { AnalyticsMetric, ChannelPerformance } from "@/src/types/analytics";

const mockMetrics: AnalyticsMetric[] = [
  { id: 1, date: "2024-01-01", channel: "Google Ads", clicks: 1200, impressions: 15000, ctr: 8.0, cost: 2400, cpc: 2.0 },
  { id: 2, date: "2024-01-02", channel: "Google Ads", clicks: 1350, impressions: 16500, ctr: 8.2, cost: 2700, cpc: 2.0 },
  { id: 3, date: "2024-01-01", channel: "Facebook", clicks: 890, impressions: 12000, ctr: 7.4, cost: 1780, cpc: 2.0 },
  { id: 4, date: "2024-01-02", channel: "Facebook", clicks: 945, impressions: 13000, ctr: 7.3, cost: 1890, cpc: 2.0 },
  { id: 5, date: "2024-01-01", channel: "Instagram", clicks: 650, impressions: 9800, ctr: 6.6, cost: 1300, cpc: 2.0 },
  { id: 6, date: "2024-01-02", channel: "Instagram", clicks: 720, impressions: 10500, ctr: 6.9, cost: 1440, cpc: 2.0 },
];

const mockChannelPerformance: ChannelPerformance[] = [
  { channel: "Google Ads", impressions: 31500, clicks: 2550, conversions: 127, cost: 5100 },
  { channel: "Facebook", impressions: 25000, clicks: 1835, conversions: 92, cost: 3670 },
  { channel: "Instagram", impressions: 20300, clicks: 1370, conversions: 68, cost: 2740 },
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type");

  await new Promise((resolve) => setTimeout(resolve, 100));

  if (type === "channels") {
    return Response.json(mockChannelPerformance);
  }

  return Response.json(mockMetrics);
}