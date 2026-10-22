import Link from "next/link";

export default async function NotFound() {
    return (
        <div>
            <h2>Product not found</h2>
            <Link href="/products">Back to products</Link>
        </div>
    )
}