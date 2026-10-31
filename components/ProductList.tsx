"use client";
import { useState } from "react";
import type { Product } from "@/types/product";
import { mockProducts } from "@/lib/mockProducts";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>(mockProducts);

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ul>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} onDelete={handleDelete} />
      ))}
    </ul>
  );
}
