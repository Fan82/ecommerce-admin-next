import type { Product } from "@/types/product";
import { mockProducts } from "./mockProducts";
import { findById } from "@/lib/findById";
import { delay } from "@/lib/api/delay";

export async function getProductById(id: number): Promise<Product | null> {
  await delay(300);
  return findById(mockProducts, id)
}