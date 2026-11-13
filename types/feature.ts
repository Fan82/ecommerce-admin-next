export type Module = "product" | "order" | "customer";
export type Priority = "must" | "should" | "could";
export type Feature = {
    id: string,
    module: Module,
    title: string,
    route: string,
    priority: Priority,
    done: boolean,
}

export const MODULE_ORDER: Module[] = [
    "product",
    "order",
    "customer"
]