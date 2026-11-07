import type { Gap } from "./gapList";

export function scoreByTopic(gaps: Gap[]): Record<string, number> {
  return gaps.reduce<Record<string, number>>((acc, gap) => {
    acc[gap.topic] = (acc[gap.topic] ?? 0) + gap.severity;
    return acc;
  }, {});
}

export function pickSingleGoal(
  gaps: Gap[],
): { topic: string; score: number } | null {
  if (gaps.length === 0) return null;

  const scores = scoreByTopic(gaps);

  let bestTopic = "";
  let bestScore = -1;

  for (const topic of Object.keys(scores)) {
    if (scores[topic] > bestScore) {
      bestTopic = topic;
      bestScore = scores[topic];
    }
  }

  return { topic: bestTopic, score: bestScore };
}
