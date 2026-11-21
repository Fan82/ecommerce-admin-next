"use client";
import { useState, type FormEvent, type MouseEvent } from "react";
import Link from "next/link";
import validateProduct from "@/utils/validateProduct";
import { categories } from "@/lib/categories";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  ALL_TOUCHED,
  EMPTY_PRODUCT_FORM,
  getVisibleErrors,
  isFormDirty,
  toProductInput,
  type ProductFormTouched,
  type ProductFormValues,
  type ProductInput,
} from "@/lib/productForm";
import { ProductPreview } from "@/components/ProductPreview";

type ProductFormProps = {
  initialValues?: ProductFormValues;
  submitLabel: string;
  cancelHref: string;
  requireChanges?: boolean;
  onSubmit: (input: ProductInput) => Promise<void>;
};

export default function ProductForm({
  initialValues = EMPTY_PRODUCT_FORM,
  submitLabel,
  cancelHref,
  requireChanges = false,
  onSubmit,
}: ProductFormProps) {
  const [values, setValues] = useState<ProductFormValues>(initialValues);
  const [touched, setTouched] = useState<ProductFormTouched>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const errors = validateProduct(values);
  const visibleErrors = getVisibleErrors(errors, touched);
  const isDirty = isFormDirty(initialValues, values);
  const errorCount = Object.keys(visibleErrors).length;
  const showErrorSummary = submitAttempted && errorCount > 0;
  const submitDisabled = submitting || (requireChanges && !isDirty);

  function updateField<K extends keyof ProductFormValues>(
    field: K,
    value: ProductFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function markTouched(field: keyof ProductFormValues) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleCancel(e: MouseEvent<HTMLAnchorElement>) {
    if (isDirty && !window.confirm("Discord unsaved changes?")) {
      e.preventDefault();
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);
    setSubmitAttempted(true);
    setTouched(ALL_TOUCHED);

    if (Object.keys(errors).length > 0) {
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

  return (
    <div className="form-layout">
      <form onSubmit={handleSubmit} noValidate className="card form-card">
        {showErrorSummary && (
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
          <label htmlFor="product-name">Name</label>
          <input
            id="product-name"
            className="input"
            type="text"
            placeholder="e.g. Leather Tote"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            onBlur={() => markTouched("name")}
            aria-invalid={visibleErrors.name ? true : undefined}
            aria-describedby={
              visibleErrors.name ? "product-name-error" : undefined
            }
          />
          {visibleErrors.name && (
            <p id="product-name-error" className="field-error">
              {visibleErrors.name}
            </p>
          )}
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="product-price">Price (NT$)</label>
            <input
              id="product-price"
              className="input"
              type="number"
              inputMode="decimal"
              placeholder="0"
              value={values.price}
              onChange={(e) => updateField("price", e.target.value)}
              onBlur={() => markTouched("price")}
              aria-invalid={visibleErrors.price ? true : undefined}
              aria-describedby={
                visibleErrors.price ? "product-price-error" : undefined
              }
            />
            {visibleErrors.price && (
              <p id="product-price-error" className="field-error">
                {visibleErrors.price}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="product-stock">Stock</label>
            <input
              id="product-stock"
              className="input"
              type="number"
              inputMode="numeric"
              placeholder="0"
              value={values.stock}
              onChange={(e) => updateField("stock", e.target.value)}
              onBlur={() => markTouched("stock")}
              aria-invalid={visibleErrors.stock ? true : undefined}
              aria-describedby={
                visibleErrors.stock ? "product-stock-error" : undefined
              }
            />
            {visibleErrors.stock && (
              <p id="product-stock-error" className="field-error">
                {visibleErrors.stock}
              </p>
            )}
          </div>
        </div>

        <fieldset
          className="choice-group"
          aria-describedby={
            visibleErrors.category ? "product-category-error" : undefined
          }
        >
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
                  onBlur={() => markTouched("category")}
                  className="visually-hidden"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
          {visibleErrors.category && (
            <p id="product-category-error" className="field-error">
              {visibleErrors.category}
            </p>
          )}
        </fieldset>

        <div className="form-actions">
          <Link
            href={cancelHref}
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitDisabled}
          >
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
