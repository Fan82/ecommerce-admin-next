import { cache } from "react";
import type { Product } from "@/types/product";
import { mockProducts } from "@/lib/mockProducts";
import { findById } from "@/lib/findById";
import { delay } from "@/lib/api/delay";

async function loadProductById(loadProductById): Promise<Product | null> {
  console.log("loadProductById", id);
  await delay(300);
  return findById(mockProducts, id)
}

export const getProductById = cache(loadProductById);
