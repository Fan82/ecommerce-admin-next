import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div>
      <p>Product not found</p>
      <Link href="/products">Back to products</Link>
    </div>
  );
}
