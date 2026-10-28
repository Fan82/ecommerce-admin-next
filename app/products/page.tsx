import Link from "next/link";
import { getProducts } from "@/lib/getProducts";
import {CategoryFilter} from "@/components/CategoryFilter";
import ProductSearch from "@/components/ProductSearch";

type ProductsPageProps = {
  searchParams: Promise<{ category?: string; fail?: string }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category, fail } = await searchParams;
  if (fail === "1") throw new Error("Failed to load products");

  const products = await getProducts(category);

  return (
    <div>
      <h2>All Products</h2>
      <Link href="/products/new">Add product</Link>
      <CategoryFilter />
      <ProductSearch products={products} />
    </div>
  );
}