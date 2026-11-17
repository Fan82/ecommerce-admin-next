import { mockProducts } from "@/lib/mockProducts";
import type { Product } from "@/types/product";
import type { ProductInput } from "@/lib/productForm";
import { delay } from "./delay";

let products: Product[] = [...mockProducts]

export const FAIL_IDS: number[] = [2];

export async function updateFeaturedApi(id: number, featured: boolean): Promise<void> {
    await delay(500);
    if (FAIL_IDS.includes(id)) {
        throw new Error(`Failed to update product ${id}`);
    }
}

export async function deleteProductApi(id: number): Promise<void> {
    await delay(500);
    if (FAIL_IDS.includes(id)) {
        throw new Error(`Failed to delete product ${id}`);
    }
}

export async function updateProductApi(id: number, input: ProductInput): Promise<Product> {
    await delay(300);

    const current = products.find((p) => p.id === id);
    if (!current) throw new Error(`Product ${id} not found`);

    const updated: Product = { ...current, ...input };
    products = products.map((p) => (p.id === id ? updated : p));

    return updated;
}