// app/products/layout.tsx
import Link from "next/link";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Products</h1>
      <nav>
        <Link href="/products">All Products</Link>
        <Link href="/products/new">Add Product</Link>
      </nav>
      {children}
    </div>
  );
}