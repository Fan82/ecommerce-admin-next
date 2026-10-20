import Link from "next/link";
import { mockProducts } from "@/lib/mockProducts";

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const product = mockProducts.find((p) => p.id === Number(id));

    return (
        <div>
            {product ? (
                <>
                    <h2>{product.name}</h2>
                    <p>NT$ {product.price}</p>
                </>
            ) : (
                <p>Product not found</p>
            )}
            <Link href="/products">Back to products</Link>
        </div>
    )
}