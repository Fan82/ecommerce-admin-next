export function wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const FAIL_IDS: number[] = [2];

export async function updateFeaturedApi(id: number, featured: boolean): Promise<void> {
    await wait(500);
    if (FAIL_IDS.includes(id)) {
        throw new Error(`Failed to update product ${id}`);
    }
}

export async function deleteProductApi(id: number): Promise<void> {
    await wait(500);
    if (FAIL_IDS.includes(id)) {
        throw new Error(`Failed to delete product ${id}`);
    }
}