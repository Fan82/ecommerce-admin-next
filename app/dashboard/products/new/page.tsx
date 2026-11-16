import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { CreateProductForm } from "@/components/CreateProductForm";

export default async function NewProductPage() {
  return (
    <main>
      <h1>New product</h1>
      <CreateProductForm />
    </main>
  );
}
