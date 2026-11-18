import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { STATUS_LABEL } from "@/components/OrderStatusBadge";
import { ORDER_STATUSES } from "@/types/order";
import type { OrderStatus } from "@/types/order";

type OrderStatusFilterProps = {
    current?: OrderStatus;
}

export function OrderStatusFilter({ current }: OrderStatusFilterProps) {
    return (
        <nav aria-label="Filter orders by status">
            <Link
                href={ROUTES.orders}
                aria-current={current === undefined ? "page" : undefined}
            >
                All
            </Link>
            {ORDER_STATUSES.map((status) => (
                <Link
                    key={status}
                    href={`${ROUTES.orders}?status=${status}`}
                >
                    {STATUS_LABEL[status]}
                </Link>
            ))}
        </nav>
    )
}