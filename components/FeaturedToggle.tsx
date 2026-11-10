"use client"
import { Product } from "@/types/product";

type FeaturedToggleProps = {
    product: Product;
    pending: boolean;
    onToggle: (id: number) => void
}

export function FeaturedToggle({ product, pending, onToggle }: FeaturedToggleProps) {
    return (
        <button
            type="button"
            aria-pressed={product.featured}
            disabled={pending}
            onClick={() => onToggle(product.id)}
        >
            {product.featured ? "Featured" : "Not featured"}
        </button>
    )
}
