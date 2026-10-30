import { getProducts } from "@/lib/getProducts";

type RelatedProductsProps = {
  category: string;
  excludeId: number;
}

export default async function RelatedProducts({category, excludeId}: RelatedProductsProps){
  const products = await getProducts(category);
  const related = products.filter((p) => p.id !== excludeId);

   return (
    <ul>
      {related.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
