"use client";
import type { Product } from "@/types/product";

type ProductItemProps = {
    product: Product;
    onDelete: (id: number) => void;
};

export default function ProductItem({ product, onDelete }: ProductItemProps) {
    return (

        <li>
            {product.name}
            <p>NT$ {product.price}</p>
            <button
                onClick={() => onDelete(product.id)}
                aria-label={`Delete ${product.name}`}
            >Delete</button>
            {product.stock === 0 && <p className="out-of-stock">Out of Stock</p>}
        </li>
    );
}
