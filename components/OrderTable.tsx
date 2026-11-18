import Link from "next/link";
import formatPrice from "@/utils/formatPrice";
import { findById } from "@/lib/findById";
import { getItemCount, getOrderTotal } from "@/lib/orderUtils";
import { ROUTES } from "@/lib/routes";
import { OrderStatusBadge } from "@/components/OrderStatusBadge";
import type { Order } from "@/types/order";
import type { Customer } from "@/types/customer";
import { OrderStatusActions } from "@/components/OrderStatusActions";

type OrderTableProps = {
    orders: Order[];
    customers: Customer[];
}

export function OrderTable({ orders, customers }: OrderTableProps) {
    if (orders.length === 0) {
        return <p>No orders found.</p>;
    }
    return (
        <div className="table-wrap">
            <table className="order-table">
                <thead>
                    <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Items</th>
                        <th scope="col">Total</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => {
                        const customer = findById(customers, order.customerId);
                        return (
                            <tr key={order.id}>
                                <td>
                                    <Link href={ROUTES.orderDetail(order.id)}>#{order.id}</Link>
                                </td>
                                <td>{customer?.name ?? "Unknown customer"}</td>
                                <td>
                                    {order.createdAt}
                                </td>
                                <td>
                                    {getItemCount(order)}
                                </td>
                                <td>{formatPrice(getOrderTotal(order))}</td>
                                <td><OrderStatusActions orderId={order.id} initialStatus={order.status} /></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}