import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Growth Dashboard",
  description: "Marketing analytics dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}