import type { Product } from "@/types/product";

export const LOW_STOCK_THRESHOLD = 5;

export function getStockValue(product: Product): number {
  return product.price * product.stock;
}

export function getInventoryValue(products: Product[]): number {
  return products.reduce((total, product) => total + getStockValue(product), 0);
}
