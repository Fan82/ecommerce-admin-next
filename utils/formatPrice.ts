export default function formatPrice(price: number): string {
  return `NT$ ${price.toLocaleString("en-US")}`;
}
