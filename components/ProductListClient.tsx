"use client"
import { Product } from "@/types/product";
import { useOptimisticFeatured } from "@/hooks/useOptimisticFeatured"
import { ErrorNotice } from "@/components/ErrorNotice"
import { FeaturedToggle } from "@/components/FeaturedToggle"

type ProductListClientProps = {
    initialProducts: Product[]
}

export function ProductListClient({ initialProducts }: ProductListClientProps) {
    const { products, errorMessage, pendingIds, handleToggle } = useOptimisticFeatured(initialProducts)

    return (
        <>
            <ErrorNotice message={errorMessage} />
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <p>{product.name}</p>
                        <p>NT$ {product.price}</p>
                        <FeaturedToggle product={product} onToggle={handleToggle} pending={pendingIds.includes(product.id)} />
                    </li>
                ))}
            </ul>
        </>
    )
}