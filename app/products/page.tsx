import type { Product } from "@/types/product"

const products: Product[] = [{
    id: 1,
    name: "Tote",
    price: 1200,
    stock: 5,
    category: "bag",
}, {
    id: 2,
    name: "Sneakers",
    price: 1800,
    stock: 0,
    category: "shoes",
}]

export default function ProductsPage() {
    return (
        <>
            <h1>Products</h1>
            <ul>
                {products.map((o) => (
                    <li key={o.id}>
                        {o.name} ,NT${o.price}
                    </li>
                ))}
            </ul>
        </>
    );
}