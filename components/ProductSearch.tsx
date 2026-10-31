"use client";
import { useState } from "react";
import type { Product } from "@/types/product";
import ProductTable from "@/components/ProductTable";

export default function ProductSearch({ products }: { products: Product[] }) {
  const [keyword, setKeyword] = useState("");

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase()),
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
        <ProductTable products={filtered} />
      )}
    </div>
  );
}
