"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  icon?: ReactNode;
  exact?: boolean;
  className?: string;
  labelClassName?: string;
};

export default function NavLink({
  href,
  label,
  icon,
  exact = false,
  className,
  labelClassName,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={className}
      aria-current={isActive ? "page" : undefined}
    >
      {icon}
      <span className={labelClassName}>{label}</span>
    </Link>
  );
}
