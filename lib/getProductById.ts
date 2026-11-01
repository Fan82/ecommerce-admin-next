import type { Product } from "@/types/product";
import { mockProducts } from "./mockProducts";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await delay(300);
  return mockProducts.find((product) => String(product.id) === id);
}
