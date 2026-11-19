export type CheckResult = {
    name: string;
    command: string;
    expected: string;
    passed: boolean;
}

export function formatCheck(result: CheckResult): string {
    const mark = result.passed ? "x" : " ";
    return `- [${mark}] ${result.name} (${result.command})`;
}

export function summarizeChecks(results: CheckResult[]): string {
    const passedCount = results.filter(result => result.passed).length;
    const lines = results.map(formatCheck);
    lines.push(`${passedCount}/${results.length} passed`);
    return lines.join("\n");
}

export function toMarkdownTable(results: CheckResult[]): string {
    const header = "| Check | Command / Steps | Expected | Pass |";
    const divider = "| --- | --- | --- | --- |";

    const rows = results.map((result) => {
        const pass = result.passed ? "Yes" : "No";
        return `| ${result.name} | ${result.command} | ${result.expected} | ${pass} |`;
    });

    return [header, divider, ...rows].join("\n");
}