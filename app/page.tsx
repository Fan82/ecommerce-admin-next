import Link from "next/link";
import type { Metadata } from "next";
import { getProducts } from "@/lib/getProducts";
import { getProductHref } from "@/lib/productRoutes";
import { categories } from "@/lib/categories";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import { ArrowUpRightIcon } from "@/components/icons";
import formatPrice from "@/utils/formatPrice";
import { getInventoryValue, LOW_STOCK_THRESHOLD } from "@/utils/inventory";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function HomePage() {
  const products = await getProducts();

  const inventoryValue = getInventoryValue(products);
  const outOfStockCount = products.filter((p) => p.stock === 0).length;

  const categoryValues = categories
    .map((category) => {
      const value = getInventoryValue(
        products.filter((p) => p.category === category.value),
      );
      const share =
        inventoryValue === 0 ? 0 : Math.round((value / inventoryValue) * 100);
      return { ...category, value, share };
    })
    .sort((a, b) => b.value - a.value);

  const needsAttention = products
    .filter((p) => p.stock <= LOW_STOCK_THRESHOLD)
    .sort((a, b) => a.stock - b.stock);

  return (
    <>
      <PageHeader
        title="Overview"
        description="Admin dashboard for products, orders and customers"
      />

      <div className="stat-grid">
        <StatCard label="Products" value={products.length} />
        <StatCard
          label="Inventory value"
          unit="NT$"
          value={inventoryValue.toLocaleString("en-US")}
        />
        <StatCard label="In stock" value={products.length - outOfStockCount} />
        <StatCard label="Out of stock" value={outOfStockCount} feature />
      </div>

      <div className="dash-grid">
        <section className="card dash-main" aria-labelledby="category-heading">
          <div className="section-header">
            <h2 id="category-heading" className="section-title">
              Inventory value by category
            </h2>
            <span className="page-description">price × stock</span>
          </div>
          <ul className="bars">
            {categoryValues.map((category) => (
              <li key={category.value}>
                <div className="bar-label">
                  <span>{category.label}</span>
                  <span>
                    {formatPrice(category.value)} · {category.share}%
                  </span>
                </div>
                <div className="bar-track" aria-hidden="true">
                  <div
                    className="bar-fill"
                    style={{ width: `${category.share}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="card-feature dash-side" aria-labelledby="attention-heading">
          <div className="section-header">
            <h2 id="attention-heading" className="section-title">
              Needs attention
            </h2>
            <span className="count-pill">{needsAttention.length}</span>
          </div>
          {needsAttention.length === 0 ? (
            <p className="attention-meta">Every product is well stocked.</p>
          ) : (
            <ul className="attention-list">
              {needsAttention.map((product) => (
                <li key={product.id}>
                  <Link href={getProductHref(product.id)} className="attention-item">
                    <span
                      className={
                        product.stock === 0
                          ? "attention-dot"
                          : "attention-dot attention-dot--hollow"
                      }
                      aria-hidden="true"
                    />
                    <span className="attention-text">
                      <span className="attention-name">{product.name}</span>
                      <span className="attention-meta">
                        {product.stock === 0
                          ? "Out of stock"
                          : `Low stock · ${product.stock} left`}
                      </span>
                    </span>
                    <ArrowUpRightIcon width={16} height={16} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <section className="card dash-orders" aria-labelledby="orders-heading">
        <div>
          <h2 id="orders-heading" className="section-title">
            Recent orders
          </h2>
          <p className="page-description">
            No orders yet. New orders will show up here.
          </p>
        </div>
        <Link href="/orders" className="btn btn-secondary">
          View orders
        </Link>
      </section>
    </>
  );
}
