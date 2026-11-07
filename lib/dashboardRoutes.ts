export type DashboardRoute = {
  label: string;
  href: string;
  exact: boolean;
};
export const DASHBOARD_ROUTES: DashboardRoute[] = [
  { label: "Dashboard", href: "/dashboard", exact: true },
  { label: "Products", href: "/dashboard/products", exact: false },
  { label: "Plan", href: "/dashboard/plan", exact: false },
];

export function isActiveRoute(
  pathname: string,
  route: DashboardRoute,
): boolean {
  if (route.exact) return pathname === route.href;
  return pathname === route.href || pathname.startsWith(route.href + "/");
}
