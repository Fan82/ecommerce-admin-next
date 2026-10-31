type ProductInput = {
  name: string;
  price: string;
  stock: string;
};

type ProductError = Partial<Record<"name" | "price" | "stock", string>>;

export default function validateProduct(input: ProductInput): ProductError {
  const errors: ProductError = {};

  if (input.name.trim() === "") {
    errors.name = "Name is required";
  }

  const price = Number(input.price);
  if (input.price.trim() === "" || !Number.isFinite(price) || price <= 0) {
    errors.price = "Price must be greater than 0";
  }

  const stock = Number(input.stock);
  if (input.stock.trim() === "" || !Number.isInteger(stock) || stock < 0) {
    errors.stock = "Stock must be a whole number, 0 or more";
  }

  return errors;
}
