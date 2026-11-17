import { mockOrders } from "@/lib/mockOrders";
import { canTransition } from "@/lib/orderUtils";
import { findById } from "@/lib/findById";
import type { Order, OrderStatus } from "@/types/order";
import { delay } from "./delay";

let orders: Order[] = [...mockOrders];

export async function fetchOrders(status?: OrderStatus): Promise<Order[]> {
  await delay(300);

  if (!status) {
    return [...orders];
  }

  return orders.filter((order) => order.status === status);
}

export async function fetchOrderById(id: number): Promise<Order | null> {
  await delay(300);
  return findById(orders, id);
}

export async function updateOrderStatus(
  id: number,
  next: OrderStatus,
): Promise<Order> {
  await delay(300);

  const target = orders.find((order) => order.id === id);
  if (!target) {
    throw new Error(`Order ${id} not found`);
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