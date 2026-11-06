import Link from "next/link";
import { categories } from "@/lib/categories";

const filters = [
  { label: "All", href: "/dashboard/products", value: undefined },
  ...categories.map((category) => ({
    label: category.label,
    href: `/products?category=${category.value}`,
    value: category.value,
  })),
];

export function CategoryFilter({ active }: { active?: string }) {
  return (
    <nav aria-label="Category" className="segmented">
      {filters.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="segmented-item"
          aria-current={item.value === active ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
