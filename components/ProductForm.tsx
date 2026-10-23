"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import validateProduct from "@/utils/validateProduct";
import type { Product } from "@/types/product";

type ProductsError = Partial<Record<"name" | "price" | "stock", string>>;

export default function ProductForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [errors, setErrors] = useState<ProductsError>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateProduct({
      name,
      price,
      stock,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const product: Omit<Product, "id"> = {
      name: name.trim(),
      price: Number(price),
      stock: Number(stock),
      category: "accessory",
    };

    console.log(product);
    router.push("/products");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && <p>{errors.price}</p>}
      </div>
      <div>
        <label htmlFor="stock">Stock</label>
        <input
          id="stock"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        {errors.stock && <p>{errors.stock}</p>}
      </div>

      <button type="submit">Create Product</button>
    </form>
  );
}
