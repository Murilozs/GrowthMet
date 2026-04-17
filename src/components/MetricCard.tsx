import { Props } from "../types/Metric";

export default function MetricCard({ title, value }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>

      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
