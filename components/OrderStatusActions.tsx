"use client"
import { useState } from "react";
import { OrderStatusBadge } from "@/components/OrderStatusBadge";
import { NEXT_STATUS } from "@/lib/orderUtils";
import { updateOrderStatus } from "@/lib/api/orders";
import type { OrderStatus } from "@/types/order";


type OrderStatusActionsProps = {
    orderId: number;
    initialStatus: OrderStatus
};

const ACTION_LABEL: Record<OrderStatus, string> = {
    pending: "Mark as pending",
    paid: "Mark as paid",
    shipped: "Mark as shipped",
    delivered: "Mark as delivered",
    cancelled: "Cancel order",
};

export function OrderStatusActions({
    orderId, initialStatus
}: OrderStatusActionsProps) {
    const [status, setStatus] = useState<OrderStatus>(initialStatus);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleChange(next: OrderStatus) {
        setPending(true);
        setError(null);

        try {
            const updated = await updateOrderStatus(orderId, next);
            setStatus(updated.status)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to update status")
        } finally {
            setPending(false)
        }
    }

    return (
        <div className="order-status-actions">
            <OrderStatusBadge status={status} />
            {NEXT_STATUS[status].map((next) => (
                <button
                    key={next}
                    type="button"
                    disabled={pending}
                    onClick={() => handleChange(next)}
                >
                    {ACTION_LABEL[next]}
                </button>
            ))}
            {error && <p role="alert">{error}</p>}
        </div>
    )
}