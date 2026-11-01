"use client";
import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";
import ProductTable from "@/components/ProductTable";
import EmptyState from "@/components/EmptyState";
import { BoxIcon, PlusIcon, SearchIcon } from "@/components/icons";

type StockFilter = "all" | "in" | "out";

export default function ProductSearch({ products }: { products: Product[] }) {
  const [keyword, setKeyword] = useState("");
  const [stockFilter, setStockFilter] = useState<StockFilter>("all");

  const filtered = products
    .filter((product) =>
      product.name.toLowerCase().includes(keyword.trim().toLowerCase()),
    )
    .filter((product) => {
      if (stockFilter === "in") return product.stock > 0;
      if (stockFilter === "out") return product.stock === 0;
      return true;
    });

  function clearFilters() {
    setKeyword("");
    setStockFilter("all");
  }

  return (
    <section className="card card--flush" aria-labelledby="products-heading">
      <div className="card-toolbar">
        <h2 id="products-heading" className="section-title">
          All products
        </h2>
        <div className="toolbar-controls">
          <label className="search">
            <span className="icon-circle">
              <SearchIcon width={16} height={16} />
            </span>
            <span className="visually-hidden">Search products</span>
            <input
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search by name…"
            />
          </label>
          <label className="select-label">
            Stock
            <select
              className="select"
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value as StockFilter)}
            >
              <option value="all">All</option>
              <option value="in">In stock</option>
              <option value="out">Out of stock</option>
            </select>
          </label>
        </div>
      </div>

      {products.length === 0 ? (
        <EmptyState
          icon={<BoxIcon width={26} height={26} />}
          title="No products yet"
          description="Add your first product to start tracking prices, stock and categories."
          action={
            <Link href="/products/new" className="btn btn-primary">
              <span className="icon-circle">
                <PlusIcon />
              </span>
              Add product
            </Link>
          }
        />
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={<SearchIcon width={26} height={26} />}
          title="No products match these filters"
          description="Try another name or stock status."
          action={
            <button
              type="button"
              className="btn btn-secondary"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          }
        />
      ) : (
        <ProductTable products={filtered} />
      )}

      <p className="table-footer">
        Showing {filtered.length} of {products.length} products
      </p>
    </section>
  );
}
