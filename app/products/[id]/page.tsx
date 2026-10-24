import Link from "next/link";
import { mockProducts } from "@/lib/mockProducts";
import { notFound } from "next/navigation";
import { parseProductId } from "@/lib/productRoutes";
import { getProductById } from "@/lib/getProducts";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await params;
  const rawId = data.id;
  const id = parseProductId(rawId);

  if (id === null) {
    notFound();
  }

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>NT$ {product.price}</p>
      <p>Stock: {product.stock}</p>
      <Link href="/products">Back to products</Link>
    </div>
  );
}
