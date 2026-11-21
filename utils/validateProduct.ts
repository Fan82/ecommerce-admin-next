import { categories } from "@/lib/categories";
import type { ProductFormErrors, ProductFormValues } from "@/lib/productForm";
import { error } from "console";

const NAME_MAX_LENGTH = 50;

export default function validateProduct(
  values: ProductFormValues,
): ProductFormErrors {
  const errors: ProductFormErrors = {};

  const name = values.name.trim();

  if (name === "") {
    errors.name = "Name is required";
  } else if (name.length > NAME_MAX_LENGTH) {
    errors.name = "Name must be 50 characters or fewer";
  }

  const price = Number(values.price);
  if (values.price.trim() === "" || !Number.isFinite(price) || price <= 0) {
    errors.price = "Price must be greater than 0";
  }

  const stock = Number(values.stock);
  if (values.stock.trim() === "" || !Number.isInteger(stock) || stock < 0) {
    errors.stock = "Stock must be a whole number, 0 or more";
  }

  if (!categories.some((item) => item.value === values.category)) {
    errors.category = "Choose a category";
  }

  return errors;
}
