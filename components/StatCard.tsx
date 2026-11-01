import type { ReactNode } from "react";

type StatCardProps = {
  label: string;
  value: ReactNode;
  unit?: string;
  feature?: boolean;
};

export default function StatCard({
  label,
  value,
  unit,
  feature = false,
}: StatCardProps) {
  return (
    <div className={feature ? "stat stat--feature" : "stat"}>
      <span className="stat-label">{label}</span>
      <span className="stat-value">
        {unit && <span className="stat-unit">{unit}</span>}
        {value}
      </span>
    </div>
  );
}
