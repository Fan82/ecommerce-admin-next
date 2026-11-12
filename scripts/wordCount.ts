export function countWords(text: string): number {
    const trimmed = text.trim()
    if (trimmed === "") {
        return 0
    }
    return trimmed.split(/\s+/).length;
}

export function isWithinRange(text: string, min: number, max: number): boolean {
    const count = countWords(text);
    return count >= min && count <= max;
}