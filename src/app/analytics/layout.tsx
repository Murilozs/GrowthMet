import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics | Growth Dashboard",
  description: "Channel performance analytics and metrics",
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}