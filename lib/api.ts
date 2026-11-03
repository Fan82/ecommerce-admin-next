import { Product } from "@/types/product";
import { getApiBaseUrl } from "./config";

export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch(`${getApiBaseUrl()}/products`, { cache: "no-store" })
    if (!res.ok) throw new Error("Failed to load products")
    return res.json()
}