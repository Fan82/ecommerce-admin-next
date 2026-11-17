import { ImageIcon } from "@/components/icons";
import formatPrice from "@/utils/formatPrice";
import { categories } from "@/lib/categories";
import type { ProductFormValues } from "@/lib/productForm";

type ProductPreviewProps = {
    values: ProductFormValues;
};
export function ProductPreview({ values }: ProductPreviewProps) {
    const price = Number(values.price);
    const priceText = values.price.trim() === "" || Number.isNaN(price) ? "Price not set" : formatPrice(price);
    const categoryLabel = categories.find((category) => category.value === values.category)?.label ?? "Category";

    return (
        <aside className="card-feature preview" aria-label="Preview">
            <p className="preview-heading">Preview</p>
            <div className="preview-image" aria-hidden="true">
                <ImageIcon width={28} height={28} />
            </div>
            <div>
                <p className="preview-name">{values.name.trim() || "Product name"}</p>
                <p className="preview-meta">{categoryLabel}</p>
            </div>
            <div className="preview-footer">
                <span className="preview-price">{priceText}</span>
                <span className="preview-stock">Stock · {values.stock || 0}</span>
            </div>
        </aside>
    );
}