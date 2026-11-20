import Link from "next/link";
import { PRODUCT_SORTS, SORT_LABEL } from "@/lib/productQuery";
import type { ProductSort } from "@/lib/productQuery";

type ProductToolbarProps = {
    q: string;
    sort: ProductSort;
}

export function ProductToolbar({ q, sort }: ProductToolbarProps) {
    return (
        <form action="/dashboard/products" role="search">
            <label htmlFor="product-search">Search products</label>
            <input id="product-search" type="search" name="q" defaultValue={q} />

            <label htmlFor="product-sort"> Sort by </label>
            <select id="product-sort" name="sort" defaultValue={sort}>
                {PRODUCT_SORTS.map((option) => (
                    <option key={option} value={option}>
                        {SORT_LABEL[option]}
                    </option>
                ))}
            </select>
            <button type="submit">Apply</button>
            <Link href="/dashboard/products">Clear</Link>
        </form >
    )
}