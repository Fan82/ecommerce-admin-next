export type RecapStats = {
    days: number;
    repoUrl: string;
    topics: string[]
}

export function buildRecapPost(stats: RecapStats): string {
    const lines = [
        `${stats.days} days, learning JavaScript & React`,
        `Learning: ${stats.topics.join("、")}`,
        `Project: ${stats.repoUrl}`,
    ];
    return lines.join("\n");
}