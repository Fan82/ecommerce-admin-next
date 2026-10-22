import Link from "next/link";
import { mockProducts } from "@/lib/mockProducts";


export default function ProductsPaage() {
    return (
        <div>
            <h2>All Products</h2>
            {mockProducts.length === 0 ? (<p>No products</p>) : (
                <ul>
                    {mockProducts.map((product) => (
                        <li key={product.id}>
                            <Link href={`/products/${product.id}`}>{product.name}</Link>
                            <p>NT$ {product.price}</p>
                            {product.stock === 0 && <p className="out-of-stock">Out of Stock</p>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}