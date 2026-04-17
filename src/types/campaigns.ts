export type Campaign = {
  id: number;
  name: string;
  channel: string;
  status: "Active" | "Paused" | "Draft";
  budget: number;
  conversions: number;
};
