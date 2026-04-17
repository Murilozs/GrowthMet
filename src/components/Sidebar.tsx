import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-black text-white p-6">
      <h1 className="text-xl font-bold mb-8">GrowthMetrics</h1>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/campaigns">Campaigns</Link>
        <Link href="/leads">Leads</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </div>
  );
}
