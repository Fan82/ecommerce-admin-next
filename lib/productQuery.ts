import type { Product } from "@/types/product";

export type ProductSort = "name-asc" | "price-asc" | "price-desc" | "stock-asc";

export const PRODUCT_SORTS: ProductSort[] = ["name-asc", "price-asc", "price-desc", "stock-asc"];

export const DEFAULT_SORT: ProductSort = "name-asc";

export const SORT_LABEL: Record<ProductSort, string> = {
    "name-asc": "Name (A to Z)",
    "price-asc": "Price (low to high)",
    "price-desc": "Price (high to low)",
    "stock-asc": "Stock (low to high)",
}

export function isProductSort(value: string | undefined): value is ProductSort {
    return PRODUCT_SORTS.some((s) => s === value);
}


export function filterProducts(list: Product[], q: string, sort: ProductSort): Product[] {
    const keyword = q.trim().toLowerCase();

    const matched =
        keyword === "" ? list : list.filter((product) => product.name.toLowerCase().includes(keyword));

    const sorted = [...matched].sort((a, b) => {
        if (sort === "name-asc") return a.name.localeCompare(b.name);
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;

        return a.stock - b.stock;
    });

    return sorted
}

export type StockLevel = "out" | "low" | "ok"
export const LOW_STOCK_THRESHOLD = 5

export function getStockLevel(stock: number): StockLevel {
    if (stock === 0) return "out"
    if (stock <= LOW_STOCK_THRESHOLD) return "low";
    return "ok"
}

export const STOCK_LABEL: Record<StockLevel, string> = {
    out: "Out of stock",
    low: "Low stock",
    ok: "In stock",
}