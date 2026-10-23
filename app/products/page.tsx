import Link from "next/link";
import { getProducts } from "@/lib/getProducts";

type ProductsPageProps = {
  searchParams: Promise<{
    fail?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { fail } = await searchParams;

  if (fail === "1") throw new Error("Failed to load products");

  const products = await getProducts();

  return (
    <div>
      <h2>All Products</h2>
      <Link href="/products/new">Add product</Link>
      {products.length === 0 ? (
        <p>No products</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
              <p>NT$ {product.price}</p>
              {product.stock === 0 && (
                <p className="out-of-stock">Out of Stock</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
