import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { mockProducts } from "@/lib/mockProducts";
import { checkAdmin } from "@/lib/checkAdmin";
import { PermissionDenied } from "@/components/PermissionDenied";
import { ProductListClient } from "@/components/ProductListClient"

export default async function ProductsPage() {
  const session = await getSession();
  const status = checkAdmin(session);

  if (status === "login") {
    redirect("/login");
  }
  if (status === "forbidden") {
    return <PermissionDenied />;
  }

  return (
    <main>
      <h1>Products</h1>
      <Link href="/dashboard/products/new">Add product</Link>
      <ProductListClient initialProducts={mockProducts} />
    </main>
  );
}