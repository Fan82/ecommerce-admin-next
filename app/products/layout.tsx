import NavLink from "@/components/NavLink";
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Products</h1>
      <nav>
        <NavLink href="/products" label="All Products" />
        <NavLink href="/products/new" label="Add Product" />
      </nav>
      {children}
    </div>
  );
}
