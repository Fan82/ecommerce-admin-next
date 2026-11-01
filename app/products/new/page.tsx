import type { Metadata } from "next";
import ProductForm from "@/components/ProductForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Add product",
};

export default function NewProductPage() {
  return (
    <>
      <PageHeader title="Add product" backHref="/products" backLabel="Products" />
      <ProductForm />
    </>
  );
}
