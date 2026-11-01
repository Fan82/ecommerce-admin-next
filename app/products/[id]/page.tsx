import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductById } from "@/lib/getProductById";
import StockBadge from "@/components/StockBadge";
import RelatedProducts from "@/components/RelatedProducts";
import PageHeader from "@/components/PageHeader";
import { ImageIcon } from "@/components/icons";
import formatPrice from "@/utils/formatPrice";
import { getStockValue } from "@/utils/inventory";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return { title: "Product not found" };
  return { title: product.name };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) notFound();

  return (
    <>
      <PageHeader title={product.name} backHref="/products" backLabel="Products" />

      <div className="detail-grid">
        <div className="card-feature detail-media">
          <p className="preview-heading">Product image</p>
          <div className="preview-image">
            <ImageIcon width={28} height={28} />
            <span className="visually-hidden">No image yet</span>
          </div>
        </div>

        <dl className="card detail-info">
          <div className="detail-price">
            <dt>Price</dt>
            <dd className="detail-price-value">{formatPrice(product.price)}</dd>
          </div>
          <div>
            <dt>Stock</dt>
            <dd>
              <StockBadge stock={product.stock} />
            </dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>
              <span className="chip">{product.category}</span>
            </dd>
          </div>
          <div>
            <dt>Product ID</dt>
            <dd className="mono">#{product.id}</dd>
          </div>
          <div>
            <dt>Stock value</dt>
            <dd>{formatPrice(getStockValue(product))}</dd>
          </div>
        </dl>
      </div>

      <section className="card related" aria-labelledby="related-heading">
        <h2 id="related-heading" className="section-title">
          Related products
        </h2>
        <Suspense
          fallback={
            <p role="status" className="page-description">
              Loading related products...
            </p>
          }
        >
          <RelatedProducts category={product.category} excludeId={product.id} />
        </Suspense>
      </section>
    </>
  );
}
