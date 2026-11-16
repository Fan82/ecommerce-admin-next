import { notFound } from "next/navigation";
import { getProductById } from "@/lib/getProductById";
import { parseId } from "@/lib/routes";
import { toFormValues } from "@/lib/productForm";
import { EditProductForm } from "@/components/EditProductForm";

type EditProductPageProps = {
    params: Promise<{ id: string }>;
};

export default async function EditProductPage({ params }: EditProductPageProps) {
    const { id } = await params;

    const productId = parseId(id);
    if (productId === null) notFound();

    const product = await getProductById(productId);
    if (!product) notFound();

    return (
        <main>
            <h1>Edit {product.name}</h1>
            <EditProductForm productId={product.id} initialValues={toFormValues(product)} />
        </main>
    );
}