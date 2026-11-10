export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
    featured: boolean;
}

export type NewProduct = Omit<Product, "id">;