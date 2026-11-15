import { mockOrders } from "@/lib/mockOrders";
import { canTransition } from "@/lib/orderUtils";
import type { Order, OrderStatus } from "@/types/order";

let orders: Order[] = [...mockOrders];

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function fetchOrders(status?: OrderStatus): Promise<Order[]> {
  await delay(300);

  if (!status) {
    return [...orders];
  }

  return orders.filter((order) => order.status === status);
}

export async function fetchOrderById(id: number): Promise<Order | null> {
  await delay(300);

  const found = orders.find((order) => order.id === id);
  if (!found) {
    return null;
  }
  return found;
}

export async function updateOrderStatus(
  id: number,
  next: OrderStatus,
): Promise<Order> {
  await delay(300);

  const target = orders.find((order) => order.id === id);
  if (!target) {
    throw new Error("Order not found");
  }

  if (!canTransition(target.status, next)) {
    throw new Error(`Cannot change status from ${target.status} to ${next}`);
  }

  const updated: Order = { ...target, status: next };
  orders = orders.map((order) => (order.id === id ? updated : order));

  return updated;
}

export async function fetchOrdersByCustomer(
  customerId: number,
): Promise<Order[]> {
  await delay(300);
  return orders.filter((order) => order.customerId === customerId);
}
