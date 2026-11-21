export function countWords(text: string): number {
  const trimmed = text.trim();
  if (trimmed === "") {
    return 0;
  }
  return trimmed.split(/\s+/).length;
}

export function isWithinRange(text: string, min: number, max: number): boolean {
  const count = countWords(text);
  return count >= min && count <= max;
}

export function findWritingIssues(
  text: string,
  min: number,
  max: number,
  banned: string[],
): string[] {
  const issues: string[] = [];
  const count = countWords(text);

  if (count < min) {
    issues.push(`Too short: ${count} words (min ${min})`);
  }

  if (count > max) {
    issues.push(`Too long: ${count} words (max ${max})`);
  }

  if (text.includes("\u2014")) {
    issues.push("Contains an em dash");
  }

  const lowerText = text.toLowerCase();
  banned.forEach((word) => {
    if (lowerText.includes(word.toLowerCase())) {
      issues.push(`Banned word: ${word}`);
    }
  });

  return issues;
}
