export type AnalyticsMetric = {
  id: number;
  date: string;
  channel: string;
  clicks: number;
  impressions: number;
  ctr: number;
  cost: number;
  cpc: number;
};

export type ChannelPerformance = {
  channel: string;
  impressions: number;
  clicks: number;
  conversions: number;
  cost: number;
};