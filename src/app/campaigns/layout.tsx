import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaigns | Growth Dashboard",
  description: "Campaign management and tracking",
};

export default function CampaignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}