"use client";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { ROUTES } from "@/lib/routes";
import { updateProductApi } from "@/lib/api/products";
import type { ProductFormValues, ProductInput } from "@/lib/productForm";

type EditProductFormProps = {
  productId: number;
  initialValues: ProductFormValues;
};
export function EditProductForm({
  productId,
  initialValues,
}: EditProductFormProps) {
  const router = useRouter();

  async function handleSubmit(input: ProductInput) {
    await updateProductApi(productId, input);
    router.push(ROUTES.productDetail(productId));
  }
  return (
    <ProductForm
      initialValues={initialValues}
      submitLabel="Save changes"
      cancelHref={ROUTES.productDetail(productId)}
      requireChanges
      onSubmit={handleSubmit}
    />
  );
}
