import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { mockProducts } from "@/lib/mockProducts";


export default async function ProductsPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <main>
      <h1>Products</h1>
      <Link href="/dashboard/products/new">Add product</Link>
      <ul>
        {mockProducts.map((product) => (
          <li key={product.id}>
            product.name
            <p>NT$ {product.price}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}