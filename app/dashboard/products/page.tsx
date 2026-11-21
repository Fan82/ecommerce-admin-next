import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { mockProducts } from "@/lib/mockProducts";
import { checkAdmin } from "@/lib/checkAdmin";
import { PermissionDenied } from "@/components/PermissionDenied";
import { ProductListClient } from "@/components/ProductListClient";
import { ProductToolbar } from "@/components/ProductToolbar";
import {
  DEFAULT_SORT,
  filterProducts,
  isProductSort,
} from "@/lib/productQuery";

type ProductsPageProps = {
  searchParams: Promise<{ q?: string; sort?: string; created?: string }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const session = await getSession();
  if (!session) redirect("/login");

  if (!checkAdmin(session)) {
    return <PermissionDenied />;
  }

  const { q: rawQ, sort: rawSort, created } = await searchParams;
  const q = rawQ ?? "";
  const sort = isProductSort(rawSort) ? rawSort : DEFAULT_SORT;

  const products = mockProducts;
  const visible = filterProducts(products, q, sort);

  const isSearching = q.trim() !== "";
  const unit = products.length === 1 ? "product" : "products";
  const countText = isSearching
    ? `${visible.length} of ${products.length} ${unit}`
    : `${products.length} ${unit}`;

  return (
    <main>
      <h1>Products</h1>
      {created && <p role="status">Created "{created}".</p>}
      <p>{countText}</p>
      <ProductToolbar q={q} sort={sort} />

      {isSearching && visible.length === 0 ? (
        <p>
          No products match "{q}".{" "}
          <Link href="/dashboard/products">Clear search</Link>
        </p>
      ) : (
        <ProductListClient key={`${q}-${sort}`} initialProducts={visible} />
      )}
    </main>
  );
}
