import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Growth Dashboard",
  description: "Application settings",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}