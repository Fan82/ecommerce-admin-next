"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} aria-current={isActive ? "page" : undefined}>
      {label}
    </Link>
  );
}
