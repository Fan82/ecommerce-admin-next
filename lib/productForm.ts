import type { Product } from "@/types/product";
import { categories } from "@/lib/categories";

export type ProductFormValues = {
    name: string;
    price: string;
    stock: string;
    category: Product["category"];
};

export type ProductInput = Pick<Product, "name" | "price" | "stock" | "category">;

export const EMPTY_PRODUCT_FORM: ProductFormValues = {
    name: "",
    price: "",
    stock: "",
    category: categories[0].value,
}

export function toFormValues(product: Product): ProductFormValues {
    return {
        name: product.name,
        price: String(product.price),
        stock: String(product.stock),
        category: product.category,
    };
}

export function toProductInput(values: ProductFormValues): ProductInput {
    return {
        name: values.name.trim(),
        price: Number(values.price),
        stock: Number(values.stock),
        category: values.category,
    };
}