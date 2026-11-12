export type AppRoute = {
    path: string;
    label: string;
    rendering: "server" | "client";
    protected: boolean
}

export const APP_ROUTES: AppRoute[] = [
    { path: "/", label: "Home", rendering: "server", protected: false },
    { path: "/login", label: "Login", rendering: "server", protected: false },
    { path: "/products", label: "Products (Public)", rendering: "server", protected: false },
    { path: "/orders", label: "Orders", rendering: "server", protected: false },
    { path: "/customers", label: "Customers", rendering: "server", protected: false },
    { path: "/dashboard", label: "Dashboard", rendering: "server", protected: true },
    { path: "/dashboard/plan", label: "Plan", rendering: "server", protected: true },
    { path: "/dashboard/products", label: "Products", rendering: "server", protected: true },
    { path: "/dashboard/products/new", label: "New Product", rendering: "server", protected: true },
    { path: "/dashboard/products/[id]", label: "Product Detail", rendering: "server", protected: true },
];

export function getProtectedPaths(routes: AppRoute[]): string[] {
    return routes
        .filter((route) => route.protected)
        .map((route) => route.path);
}