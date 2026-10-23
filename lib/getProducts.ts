import { Product } from "@/types/product";
import { mockProducts } from "./mockProducts";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function getProducts(): Promise<Product[]> {
  await delay(1500);
  return mockProducts;
}

export async function getProductById(id: number): Promise<Product | undefined> {
  await delay(500);
  return mockProducts.find((product) => product.id === id);
}
