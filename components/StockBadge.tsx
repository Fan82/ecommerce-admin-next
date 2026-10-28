export default function StockBadge({ stock }: { stock: number }) {
  if (stock === 0) return <p className="out-of-stock">Out of Stock</p>;
  return <p>In Stock: {stock}</p>;
}