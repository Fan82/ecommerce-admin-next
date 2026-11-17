"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import validateProduct from "@/utils/validateProduct";
import formatPrice from "@/utils/formatPrice";
import { categories } from "@/lib/categories";
import { ArrowUpRightIcon, ImageIcon } from "@/components/icons";
import {
  EMPTY_PRODUCT_FORM,
  toProductInput,
  type ProductFormValues,
  type ProductInput,
} from "@/lib/productForm";
import { ProductPreview } from "@/components/ProductPreview";

type ProductsError = Partial<Record<"name" | "price" | "stock", string>>;

type ProductFormProps = {
  initialValues?: ProductFormValues;
  submitLabel: string;
  cancelHref: string;
  onSubmit: (input: ProductInput) => Promise<void>;
};

export default function ProductForm({
  initialValues = EMPTY_PRODUCT_FORM,
  submitLabel,
  cancelHref,
  onSubmit,
}: ProductFormProps) {
  const [values, setValues] = useState<ProductFormValues>(initialValues);
  const [errors, setErrors] = useState<ProductsError>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const errorCount = Object.keys(errors).length;

  function updateField<K extends keyof ProductFormValues>(
    field: K,
    value: ProductFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validateProduct(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit(toProductInput(values));
    } catch (err) {
      setSubmitError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  const previewPrice =
    Number(values.price) > 0 ? formatPrice(Number(values.price)) : "NT$ —";
  const categoryLabel = categories.find((item) => item.value === values.category)?.label;

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

        {submitError && (
          <p className="form-alert" role="alert">
            {submitError}
          </p>
        )}

        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="e.g. Leather Tote"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
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
              value={values.price}
              onChange={(e) => updateField("price", e.target.value)}
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
              value={values.stock}
              onChange={(e) => updateField("stock", e.target.value)}
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
                  checked={values.category === item.value}
                  onChange={() => updateField("category", item.value)}
                  className="visually-hidden"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="form-actions">
          <Link href={cancelHref} className="btn btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            <span className="icon-circle">
              <ArrowUpRightIcon />
            </span>
            {submitting ? "Saving..." : submitLabel}
          </button>
        </div>
      </form>

      <ProductPreview values={values} />
    </div>
  );
}