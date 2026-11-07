import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { GAPS } from "@/lib/gapList";
import { pickSingleGoal } from "@/lib/pickGoal";
import { GoalCard } from "@/components/GoalCard";

export default async function PlanPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const goal = pickSingleGoal(GAPS);
  if (goal === null) {
    return <p>No gaps recorded</p>;
  }

  const reasons = GAPS.filter((gap) => gap.topic === goal.topic).map(
    (gap) => gap.evidence,
  );

  return <GoalCard topic={goal.topic} score={goal.score} reasons={[]} />;
}
