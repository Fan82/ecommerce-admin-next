import type { Product } from "@/types/product";
import { categories } from "@/lib/categories";

export type ProductFormValues = {
  name: string;
  price: string;
  stock: string;
  category: Product["category"];
};

export type ProductInput = Pick<
  Product,
  "name" | "price" | "stock" | "category"
>;

export const EMPTY_PRODUCT_FORM: ProductFormValues = {
  name: "",
  price: "",
  stock: "",
  category: categories[0].value,
};

export function toFormValues(product: Product): ProductFormValues {
  return {
    name: product.name,
    price: String(product.price),
    stock: String(product.stock),
    category: product.category,
  };
}

export function toProductInput(values: ProductFormValues): ProductInput {
  return {
    name: values.name.trim(),
    price: Number(values.price),
    stock: Number(values.stock),
    category: values.category,
  };
}

export type ProductFormErrors = Partial<
  Record<keyof ProductFormValues, string>
>;

export type ProductFormTouched = Partial<
  Record<keyof ProductFormValues, boolean>
>;

export const PRODUCT_FORM_FIELDS: (keyof ProductFormValues)[] = [
  "name",
  "price",
  "stock",
  "category",
];

export const ALL_TOUCHED: Record<keyof ProductFormValues, boolean> = {
  name: true,
  price: true,
  stock: true,
  category: true,
};

export function getVisibleErrors(
  errors: ProductFormErrors,
  touched: ProductFormTouched,
): ProductFormErrors {
  const visible: ProductFormErrors = {};

  for (const field of PRODUCT_FORM_FIELDS) {
    if (touched[field] && errors[field]) {
      visible[field] = errors[field];
    }
  }
  return visible;
}

export function isFormDirty(
  initial: ProductFormValues,
  current: ProductFormValues,
): boolean {
  return PRODUCT_FORM_FIELDS.some((field) => initial[field] !== current[field]);
}
