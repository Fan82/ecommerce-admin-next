import { mockProducts } from "@/lib/mockProducts";
import type { Product } from "@/lib/types";

export async function getRelatedProducts(id: string): Promise<Product[]> {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    return mockProducts
        .filter((item) => String(item.id) !== id)
        .slice(0, 3)
}