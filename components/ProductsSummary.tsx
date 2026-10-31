import type { Product } from "@/types/product";

export default function ProductsSummary({ products }: { products: Product[] }) {
  const outOfStockCount = products.filter(
    (product) => product.stock === 0,
  ).length;

  return (
    <div>
      <p>Total: {products.length}</p>
      <p>Out of Stock: {outOfStockCount}</p>
    </div>
  );
}
