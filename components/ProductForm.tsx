"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import validateProduct from "@/utils/validateProduct";
import formatPrice from "@/utils/formatPrice";
import { categories } from "@/lib/categories";
import { ArrowUpRightIcon, ImageIcon } from "@/components/icons";
import type { Product } from "@/types/product";

type ProductsError = Partial<Record<"name" | "price" | "stock", string>>;

export default function ProductForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState(categories[0].value);

  const [errors, setErrors] = useState<ProductsError>({});
  const errorCount = Object.keys(errors).length;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateProduct({
      name,
      price,
      stock,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const product: Omit<Product, "id"> = {
      name: name.trim(),
      price: Number(price),
      stock: Number(stock),
      category,
    };

    console.log(product);
    router.push("/dashboard/products")
  }

  const previewPrice = Number(price) > 0 ? formatPrice(Number(price)) : "NT$ —";
  const categoryLabel = categories.find((item) => item.value === category)?.label;

  return (
    <div className="form-layout">
      <form onSubmit={handleSubmit} noValidate className="card form-card">
        {errorCount > 0 && (
          <div className="form-alert" role="alert">
            <span className="form-alert-mark" aria-hidden="true">
              !
            </span>
            Fix {errorCount} {errorCount === 1 ? "field" : "fields"} before
            saving.
          </div>
        )}

        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="e.g. Leather Tote"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="field-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="price">Price (NT$)</label>
            <input
              id="price"
              className="input"
              type="number"
              inputMode="decimal"
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              aria-invalid={errors.price ? true : undefined}
              aria-describedby={errors.price ? "price-error" : undefined}
            />
            {errors.price && (
              <p id="price-error" className="field-error">
                {errors.price}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="stock">Stock</label>
            <input
              id="stock"
              className="input"
              type="number"
              inputMode="numeric"
              placeholder="0"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              aria-invalid={errors.stock ? true : undefined}
              aria-describedby={errors.stock ? "stock-error" : undefined}
            />
            {errors.stock && (
              <p id="stock-error" className="field-error">
                {errors.stock}
              </p>
            )}
          </div>
        </div>

        <fieldset className="choice-group">
          <legend>Category</legend>
          <div className="choice-list">
            {categories.map((item) => (
              <label key={item.value} className="choice">
                <input
                  type="radio"
                  name="category"
                  value={item.value}
                  checked={category === item.value}
                  onChange={() => setCategory(item.value)}
                  className="visually-hidden"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="form-actions">
          <Link href="/dashboard/products" className="btn btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            <span className="icon-circle">
              <ArrowUpRightIcon />
            </span>
            Create product
          </button>
        </div>
      </form>

      <aside className="card-feature preview" aria-label="Preview">
        <p className="preview-heading">Preview</p>
        <div className="preview-image" aria-hidden="true">
          <ImageIcon width={28} height={28} />
        </div>
        <div>
          <p className="preview-name">{name.trim() || "Product name"}</p>
          <p className="preview-meta">{categoryLabel}</p>
        </div>
        <div className="preview-footer">
          <span className="preview-price">{previewPrice}</span>
          <span className="preview-stock">Stock · {stock || 0}</span>
        </div>
      </aside>
    </div>
  );
}
