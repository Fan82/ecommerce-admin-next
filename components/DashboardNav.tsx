"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/routes";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: ROUTES.dashboard, label: "Dashboard" },
  { href: ROUTES.products, label: "Products" },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav>
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.href === ROUTES.dashboard
            ? pathname === item.href
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
