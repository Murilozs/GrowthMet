import { Props } from "../types/Metric";

const iconMap: Record<string, string> = {
  Revenue: "💰",
  Leads: "👥",
  "Conversion Rate": "📈",
};

export default function MetricCard({ title, value }: Props) {
  return (
    <div className="bg-card-bg p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <span className="text-lg">{iconMap[title] || "📊"}</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{value}</h2>
    </div>
  );
}
