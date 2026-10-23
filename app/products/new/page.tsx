import Link from "next/link";
import ProductForm from "@/components/ProductForm";

export default function NewProductPage() {
  return (
    <div>
      <h2>New Product</h2>
      <Link href="/products">Cancel</Link>
      <ProductForm />
    </div>
  );
}
