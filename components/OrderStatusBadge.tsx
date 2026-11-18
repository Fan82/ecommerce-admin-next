import type { OrderStatus } from "@/types/order"

type OrderStatusBadgeProps = {
    status: OrderStatus
}

export const STATUS_LABEL: Record<OrderStatus, string> = {
    pending: "Pending",
    paid: "Paid",
    shipped: "Shipped",
    delivered: "Delivered",
    cancelled: "Cancelled",
}
export function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
    return (
        <span className={`badge badge-${status}`}>{STATUS_LABEL[status]}</span>
    )
}