export default function StockBadge({ stock }: { stock: number }) {
  if (stock === 0) return <span className="badge badge--alert">Out of stock</span>;
  return <span className="badge">In stock · {stock}</span>;
}
