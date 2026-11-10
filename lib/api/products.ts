import { AppError } from "@/lib/errors";

function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function updateFeaturedApi(id: number, featured: boolean): Promise<void> {
    await wait(500);
    if (Math.random() < 0.3) {
        throw new AppError("UNKNOWN", `Failed to update product ${id} to ${featured}`);
    }
}

export async function deleteProductApi(id: number): Promise<void> {
    await wait(500);
    if (Math.random() < 0.3) {
        throw new AppError("UNKNOWN", `Failed to delete product ${id}`);
    }
}