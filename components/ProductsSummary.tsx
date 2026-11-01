import type { Product } from "@/types/product";
import StatCard from "@/components/StatCard";
import { getInventoryValue } from "@/utils/inventory";

export default function ProductsSummary({ products }: { products: Product[] }) {
  const outOfStockCount = products.filter(
    (product) => product.stock === 0,
  ).length;

  return (
    <div className="stat-grid">
      <StatCard label="Total products" value={products.length} />
      <StatCard label="In stock" value={products.length - outOfStockCount} />
      <StatCard
        label="Inventory value"
        unit="NT$"
        value={getInventoryValue(products).toLocaleString("en-US")}
      />
      <StatCard label="Out of stock" value={outOfStockCount} feature />
    </div>
  );
}
