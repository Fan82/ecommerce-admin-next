import { getStockLevel, STOCK_LABEL } from "@/lib/productQuery";

type StockLevelBadgeProps = {
    stock: number;
}

export function StockLevelBadge({ stock }: StockLevelBadgeProps) {
    const level = getStockLevel(stock);
    const text = level === "low" ? `${STOCK_LABEL.low} (${stock} left)` : STOCK_LABEL[level];

    return <span className={`badge badge-stock-${level}`}>{text}</span>;
}