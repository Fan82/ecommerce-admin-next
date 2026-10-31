import Link from "next/link";
import { getProducts } from "@/lib/getProducts";
import { CategoryFilter } from "@/components/CategoryFilter";
import ProductSearch from "@/components/ProductSearch";
import ProductsSummary from "@/components/ProductsSummary";

type ProductsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { category } = await searchParams;

  const products = await getProducts(category);

  return (
    <div>
      <h2>All Products</h2>
      <Link href="/products/new">Add product</Link>
      <CategoryFilter />
      <ProductsSummary products={products} />
      <ProductSearch products={products} />
    </div>
  );
}
