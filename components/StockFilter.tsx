"use client";
import { useState } from "react";
import type { Product } from "@/types/product";
import ProductTable from "@/components/ProductTable";

export default function StockFilter({ products }: { products: Product[] }) {
  const [inStockOnly, serInStockOnly] = useState(false);

  const visible = inStockOnly
    ? products.filter((product) => product.stock > 0)
    : products;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => serInStockOnly(e.target.checked)}
        />
        In stock only
      </label>
      <ProductTable products={visible} />
    </div>
  );
}
