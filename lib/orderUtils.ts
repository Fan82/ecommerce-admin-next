import { ORDER_STATUSES } from "@/types/order";
import type { Order, OrderStatus } from "@/types/order";

export function getOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.unitPrice * item.quantity;
  }, 0);
}

export function getCustomerSummary(
  customerId: number,
  orders: Order[],
): { orderCount: number; totalSpent: number } {
  const validOrders = orders.filter((order) => {
    return order.customerId === customerId && order.status !== "cancelled";
  });

  const orderCount = validOrders.length;

  const totalSpent = validOrders.reduce((total, order) => {
    return total + getOrderTotal(order);
  }, 0);

  return { orderCount, totalSpent };
}

export const NEXT_STATUS: Record<OrderStatus, OrderStatus[]> = {
  pending: ["paid", "cancelled"],
  paid: ["shipped", "cancelled"],
  shipped: ["delivered"],
  delivered: [],
  cancelled: [],
};

export function canTransition(from: OrderStatus, to: OrderStatus): boolean {
  return NEXT_STATUS[from].includes(to);
}

export function isOrderStatus(value: string | undefined): value is OrderStatus {
  return ORDER_STATUSES.some((s) => s === value);
}

export function getItemCount(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
}

export function getStatusCounts(orders: Order[]): Record<OrderStatus, number> {
  return orders.reduce((counts, order) => {
    counts[order.status] += 1;
    return counts
  }, {
    pending: 0,
    paid: 0,
    shipped: 0,
    delivered: 0,
    cancelled: 0,
  })
}