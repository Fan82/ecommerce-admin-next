import Link from "next/link";
import { mockProducts } from "@/lib/mockProducts";

export default function ProductsPage() {
    return (
        <ul>
            {mockProducts.map((product) => (
                <li key={product.id}>
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                    <span>NT$ {product.price}</span>
                </li>
            ))}
        </ul>
    );
}