import { cache } from "react";
import { mockProducts } from "@/lib/mockProducts";
import { delay } from "@/lib/api/delay";
import { findById } from "@/lib/findById";
import type { Product } from "@/types/product";

async function loadProductById(id: number): Promise<Product | null> {
  console.log("loadProductById", id);
  await delay(300);
  return findById(mockProducts, id);
}

export const getProductById = cache(loadProductById);
