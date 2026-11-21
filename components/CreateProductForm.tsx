"use client";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { ROUTES } from "@/lib/routes";
import type { ProductInput } from "@/lib/productForm";
import { createProductApi } from "@/lib/api/products";

export function CreateProductForm() {
  const router = useRouter();

  async function handleSubmit(input: ProductInput) {
    const created = await createProductApi(input);

    router.push(
      `${ROUTES.products}?created=${encodeURIComponent(created.name)}`,
    );
  }
  return (
    <ProductForm
      submitLabel="Create product"
      cancelHref={ROUTES.products}
      onSubmit={handleSubmit}
    />
  );
}
