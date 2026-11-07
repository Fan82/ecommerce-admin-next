export type GoalCardProps = {
  topic: string;
  score: number;
  reasons: string[];
};

export function GoalCard({ topic, score, reasons }: GoalCardProps) {
  return (
    <>
      <section aria-labelledby="goal-title">
        <h2 id="goal-title">Next goal: {topic}</h2>
        <p>Score: {score}</p>
        <ul>
          {reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
