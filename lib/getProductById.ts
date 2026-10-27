import { mockProducts } from "@/mockProducts";
import type { Product } from "@/types/product";

export async function getProductById(id: string): Promise<Product | null> {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    const product = mockProducts.find((item) => String(item.id) === id);
    return product ?? null;
}