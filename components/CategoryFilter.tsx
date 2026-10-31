import Link from "next/link";

const categories = [
  { label: "All", href: "/products" },
  { label: "Bag", href: "/products?category=bag" },
  { label: "Shoes", href: "/products?category=shoes" },
  { label: "Accessory", href: "/products?category=accessory" },
];

export function CategoryFilter() {
  return (
    <nav>
      {categories.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
