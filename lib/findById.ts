export function findById<T extends { id: number }>(items: T[], id: number): T | null {
    return items.find((item) => item.id === id) ?? null;
}