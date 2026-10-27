import Link from "next/link";
import { notFound } from "next/navigation";
<<<<<<< HEAD
import { parseProductId } from "@/lib/productRoutes";
import { getProductById } from "@/lib/getProducts";
=======
import { getProductById } from "@/lib/getProductById";
import { getRelatedProducts } from "@/lib/getRelatedProducts";
import StockBadge from "@/components/StockBadge";
>>>>>>> 4a0e497 (day82)

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
<<<<<<< HEAD
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
=======
    const { id } = await params;

    const [product, relatedProducts] = await Promise.all([
        getProductById(id),
        getRelatedProducts(id),
    ]);

    if (!product) notFound();

    return (
        <div>
            <h1>{product.name}</h1>
            <p>NT$ {product.price}</p>
            <StockBadge stock={product.stock} />

            <h2>Related Products</h2>
            <ul>
                {relatedProducts.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            <Link href="/products">Back to products</Link>
        </div>
    );
}
>>>>>>> 4a0e497 (day82)
