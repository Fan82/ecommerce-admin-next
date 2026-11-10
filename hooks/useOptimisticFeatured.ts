import { useState } from "react";
import type { Product } from "@/types/product";
import { setFeatured } from "@/lib/products";
import { updateFeaturedApi } from "@/lib/api/products";
import { getUserMessage } from "@/lib/errors";

export function useOptimisticFeatured(initialProducts: Product[]) {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [pendingIds, setPendingIds] = useState<number[]>([]);

    async function handleToggle(id: number) {
        if (pendingIds.includes(id)) return;
        const current = products.find((p) => p.id === id);
        if (!current) return;

        const previous = current.featured;
        const next = !previous;

        setErrorMessage(null);
        setPendingIds((ids) => [...ids, id]);
        setProducts((list) => setFeatured(list, id, next));

        try {
            await updateFeaturedApi(id, next);
        } catch (error) {
            setProducts((list) => setFeatured(list, id, previous));
            setErrorMessage(getUserMessage(error));
        } finally {
            setPendingIds((ids) => ids.filter((x) => x !== id));
        }
    }

    return { products, errorMessage, pendingIds, handleToggle };
}