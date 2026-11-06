"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DASHBOARD_ROUTES, isActiveRoute } from "@/lib/dashboardRoutes";


export function DashboardNav() {
    const pathname = usePathname()
    return (
        <nav aria-label="Dashboard">
            {DASHBOARD_ROUTES.map((route) => (
                <Link href={route.href} key={route.href} aria-current={isActiveRoute(pathname, route) ? "page" : undefined}>
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}