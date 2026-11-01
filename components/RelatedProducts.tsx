import Link from "next/link";
import { getProducts } from "@/lib/getProducts";
import { getProductHref } from "@/lib/productRoutes";
import { ArrowUpRightIcon } from "@/components/icons";
import formatPrice from "@/utils/formatPrice";

type RelatedProductsProps = {
  category: string;
  excludeId: number;
};

export default async function RelatedProducts({
  category,
  excludeId,
}: RelatedProductsProps) {
  const products = await getProducts(category);
  const related = products.filter((p) => p.id !== excludeId);

  if (related.length === 0) {
    return (
      <p className="page-description">No other products in this category yet.</p>
    );
  }

  return (
    <ul className="related-grid">
      {related.map((p) => (
        <li key={p.id}>
          <Link href={getProductHref(p.id)} className="related-card">
            <span className="thumb" aria-hidden="true" />
            <span className="related-text">
              <span className="related-name">{p.name}</span>
              <span className="related-price">{formatPrice(p.price)}</span>
            </span>
            <span className="icon-circle" aria-hidden="true">
              <ArrowUpRightIcon width={14} height={14} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
