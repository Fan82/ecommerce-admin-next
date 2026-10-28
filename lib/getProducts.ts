import { Product } from "@/types/product";
import { mockProducts } from "./mockProducts";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function getProducts(category?: string): Promise<Product[]> {
  await delay(1000);
  if(!category) return mockProducts;
  return mockProducts.filter((product) => product.category === category);
}