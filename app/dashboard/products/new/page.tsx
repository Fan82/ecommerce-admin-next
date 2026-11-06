import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import ProductForm from "@/components/ProductForm";

export default async function NewProductPage() {
  const session = await getSession()
  if (!session) redirect("/login")

  return (
    <main>
      <h1>New product</h1>
      <Link href="/dashboard/products">Back to products</Link>
      <ProductForm />
    </main>
  )
}