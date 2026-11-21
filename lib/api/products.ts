import { mockProducts } from "@/lib/mockProducts";
import type { Product } from "@/types/product";
import type { ProductInput } from "@/lib/productForm";
import { delay } from "./delay";
import { features } from "process";

let products: Product[] = [...mockProducts];

export const FAIL_IDS: number[] = [2];

export async function updateFeaturedApi(
  id: number,
  featured: boolean,
): Promise<void> {
  await delay(500);
  if (FAIL_IDS.includes(id)) {
    throw new Error(`Failed to update product ${id}`);
  }
}

export async function deleteProductApi(id: number): Promise<void> {
  await delay(500);
  if (FAIL_IDS.includes(id)) {
    throw new Error(`Failed to delete product ${id}`);
  }
}

export async function updateProductApi(
  id: number,
  input: ProductInput,
): Promise<Product> {
  await delay(300);

  if (FAIL_IDS.includes(id)) {
    throw new Error(`Failed to update product ${id}`);
  }

  const current = products.find((p) => p.id === id);
  if (!current) throw new Error(`Product ${id} not found`);

  const updated: Product = { ...current, ...input };
  products = products.map((p) => (p.id === id ? updated : p));

  return updated;
}

export async function createProductApi(input: ProductInput): Promise<Product> {
  await delay(300);

  const newName = input.name.trim().toLowerCase();
  const exists = products.some((p) => p.name.trim().toLowerCase() === newName);
  if (exists) {
    throw new Error(`A product named "${input.name}" already exists`);
  }

  const nextId =
    products.length === 0 ? 1 : Math.max(...products.map((p) => p.id)) + 1;

  const newProduct: Product = {
    ...input,
    id: nextId,
    featured: false,
  };

  products = [...products, newProduct];

  return newProduct;
}
