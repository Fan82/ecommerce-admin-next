"use client";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { ROUTES } from "@/lib/routes";
import type { ProductInput } from "@/lib/productForm";


export function CreateProductForm() {
    const router = useRouter();

    router.push(ROUTES.products);

    async function handleSubmit(input: ProductInput) {
        console.log(input);
        router.push(ROUTES.products);
    }
    return (
        <ProductForm
            submitLabel="Create product"
            cancelHref={ROUTES.products}
            onSubmit={handleSubmit}
        />
    )

}