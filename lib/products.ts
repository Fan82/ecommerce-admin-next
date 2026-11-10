import type { Product } from "@/types/product";

export function removeProduct(products: Product[], id: number): Product[] {
    return products.filter((product) => product.id !== id);
}

export function toggleFeatured(products: Product[], id: number): Product[] {
    return products.map((product) =>
        product.id === id ? { ...product, featured: !product.featured } : product
    );
}

export function setFeatured(products: Product[], id: number, featured: boolean): Product[] {
    return products.map((product) =>
        product.id === id ? { ...product, featured } : product
    );
}