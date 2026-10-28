"use client";
import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";
import StockBadge from "@/components/StockBadge";

export default function ProductSearch({ products }: { products: Product[] }) {
    const [keyword, setKeyword] = useState("");

    const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <div>
            <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search products"
            />
            {filtered.length === 0 ? (
                <p>No products</p>
            ) : (
                <ul>
                    {filtered.map((product) => (
                        <li key={product.id}>
                            <Link href={`/products/${product.id}`}>{product.name}</Link>
                            <p>NT$ {product.price}</p>
                            <StockBadge stock={product.stock} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}