import type { Product } from "@/types/product";

export function removeProduct(products: Product[], id: string): Product[] {
    return products.filter((product) => product.id !== id)
}
export function toggleFeatured(products: Product[], id: string): Product[] {
    return products.map((product) => product.id === id ? {
        ...product, featured: !product.featured
    } : product)
}
