// app/dashboard/customers/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/getProductById";
import { parseId, ROUTES } from "@/lib/routes";

type EditProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const { id } = await params;

  const productId = parseId(id);
  if (productId === null) notFound();

  const product = await getProductById(productId);
  if (!product) notFound();

  return (
    <main>
      <h1>Edit {product.name}</h1>
      <p>Form coming on Day 102</p>
      <Link href={ROUTES.products}>Back to products</Link>
    </main>
  );
}
