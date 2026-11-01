import Link from "next/link";
import type { Metadata } from "next";
import { getProducts } from "@/lib/getProducts";
import { CategoryFilter } from "@/components/CategoryFilter";
import ProductSearch from "@/components/ProductSearch";
import ProductsSummary from "@/components/ProductsSummary";
import PageHeader from "@/components/PageHeader";
import { PlusIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Products",
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { category } = await searchParams;

  const products = await getProducts(category);

  return (
    <>
      <PageHeader
        title="Products"
        description="Manage stock, prices and categories"
        actions={
          <Link href="/products/new" className="btn btn-primary">
            <span className="icon-circle">
              <PlusIcon />
            </span>
            Add product
          </Link>
        }
      />
      <CategoryFilter active={category} />
      <ProductsSummary products={products} />
      <ProductSearch products={products} />
    </>
  );
}
