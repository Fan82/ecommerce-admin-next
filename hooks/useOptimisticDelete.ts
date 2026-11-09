import { useState } from "react";
import type { Product } from "@/types/product";
import { removeProduct } from "@/lib/products";
import { deleteProductApi } from "@/lib/api/products";
import { getUserMessage } from "@/lib/errors";

export function useOptimisticDelete(initialProducts: Product[]) {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function handleDelete(id: string) {
        setErrorMessage(null);
        const snapshot = products;
        setProducts(removeProduct(products, id))
        try {
            await deleteProductApi(id);
        } catch (error) {
            setProducts(snapshot);
            setErrorMessage(getUserMessage)
        }
    }

    return { products, errorMessage, handleDelete }
}