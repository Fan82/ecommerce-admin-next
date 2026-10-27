"use client";
import { useEffect, useState } from "react";
import { getProductById } from "@/lib/getProductById";
import type { Product } from "@/lib/types";

export default function ProductDetailClient({ id }: { id: string }) {
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getProductById(id)
            .then((result) => {
                setProduct(result);
            })
            .catch((e: unknown) => {
                setError(e instanceof Error ? e.message : "Something went wrong");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Not found</p>;

    return <h1>{product.name}</h1>;
}