import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductById } from "@/lib/getProductById";
import StockBadge from "@/components/StockBadge";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(Number(id));
  if (!product) return { title: "Product not found" };
  return { title: product.name };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  if (!product) notFound();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>NT$ {product.price}</p>
      <StockBadge stock={product.stock} />
      <Link href="/products">Back to products</Link>
    </div>
  );
}