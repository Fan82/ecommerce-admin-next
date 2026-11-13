import { MODULE_ORDER, type Feature, type Module } from "@/types/feature";

export const features: Feature[] = [
    { id: "P-01", module: "product", title: "Product list", route: "/dashboard/products", priority: "must", done: true },
    { id: "P-02", module: "product", title: "Create product", route: "/dashboard/products/new", priority: "must", done: true },
    { id: "P-03", module: "product", title: "Product detail", route: "/dashboard/products/[id]", priority: "must", done: true },
    { id: "P-04", module: "product", title: "Edit product", route: "/dashboard/products/[id]/edit", priority: "must", done: false },
    { id: "P-05", module: "product", title: "Featured toggle", route: "/dashboard/products", priority: "should", done: true },
    { id: "O-01", module: "order", title: "Order list", route: "/dashboard/orders", priority: "must", done: false },
    { id: "O-02", module: "order", title: "Order detail", route: "/dashboard/orders/[id]", priority: "must", done: false },
    { id: "O-03", module: "order", title: "Update order status", route: "/dashboard/orders/[id]", priority: "must", done: false },
    { id: "O-04", module: "order", title: "Filter orders by status", route: "/dashboard/orders", priority: "should", done: false },
    { id: "C-01", module: "customer", title: "Customer list", route: "/dashboard/customers", priority: "must", done: false },
    { id: "C-02", module: "customer", title: "Customer detail", route: "/dashboard/customers/[id]", priority: "should", done: false },
    { id: "C-03", module: "customer", title: "Customer order history", route: "/dashboard/customers/[id]", priority: "could", done: false },
];

export function getMvpFeatures(list: Feature[]): Feature[] {
    const mustList = list.filter(
        (item) => item.priority === "must"
    );
    mustList.sort((a, b) => MODULE_ORDER.indexOf(a.module) - MODULE_ORDER.indexOf(b.module)
    );
    return mustList;
}

export function countByModule(
    list: Feature[]
): Record<Module, { total: number; done: number }> {
    const initial: Record<Module, { total: number; done: number }> = {
        product: { total: 0, done: 0 },
        order: { total: 0, done: 0 },
        customer: { total: 0, done: 0 },
    };
    return list.reduce((acc, item) => {
        acc[item.module].total += 1;
        if (item.done) {
            acc[item.module].done += 1;
        }
        return acc;
    }, initial);

}

export function toChecklist(list: Feature[]): string {
    const sections = MODULE_ORDER.map((module) => {
        const lines = list
            .filter((item) => item.module === module)
            .map((item) => {
                const box = item.done ? "[x]" : "[ ]";
                return `- ${box} ${item.id} ${item.title} (${item.route}) ${item.priority}`;
            })
        return [`## ${module}`, ...lines].join("\n")
    })
    return sections.join("\n\n");
}