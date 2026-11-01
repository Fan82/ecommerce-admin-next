import type { Product } from "@/types/product";
import Link from "next/link";
import StockBadge from "@/components/StockBadge";
import { ArrowUpRightIcon } from "@/components/icons";
import { getProductHref } from "@/lib/productRoutes";
import formatPrice from "@/utils/formatPrice";

export default function ProductTable({ products }: { products: Product[] }) {
  return (
    <div className="table-wrap">
      <table className="product-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Stock</th>
            <th scope="col">
              <span className="visually-hidden">Open</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="product-name">
                  <span className="thumb" aria-hidden="true" />
                  <Link href={getProductHref(product.id)}>{product.name}</Link>
                </div>
              </td>
              <td>{formatPrice(product.price)}</td>
              <td>
                <span className="chip">{product.category}</span>
              </td>
              <td>
                <StockBadge stock={product.stock} />
              </td>
              <td>
                <Link
                  href={getProductHref(product.id)}
                  className="icon-link"
                  aria-label={`Open ${product.name}`}
                >
                  <ArrowUpRightIcon width={16} height={16} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
