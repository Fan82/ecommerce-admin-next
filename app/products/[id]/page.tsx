import Link from "next/link";
import { mockProducts } from "@/lib/mockProducts";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const product = mockProducts.find((p) => p.id === Number(id));
    if (!product) notFound();

    return (
        <div>
            <h2>{product.name}</h2>
            <p>NT$ {product.price}</p>
            <p>Stock: {stock}</p>
            <Link href="/products">Back to products</Link>
        </div>
    )
}