import type { Product } from "@/types/product";
import Link from "next/link";
import StockBadge from "@/components/StockBadge";

export default function ProductTable({ products }: { products: Product[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </td>
            <td>NT$ {product.price}</td>
            <td>NT$ {product.category}</td>
            <td>
              <StockBadge stock={product.stock} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
