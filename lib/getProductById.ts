import type { Product } from "@/types/product";
import { mockProducts } from "./mockProducts";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProductById(id: number): Promise<Product | null> {
  await delay(1000);
  return mockProducts.find((product) => product.id === id) ?? null;
}