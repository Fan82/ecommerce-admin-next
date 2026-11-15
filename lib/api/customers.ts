import type { Customer } from "@/types/customer";
import type { Order } from "@/types/order";
import { mockCustomers } from "@/lib/mockCustomers";
import { mockOrders } from "@/lib/mockOrders";
import { delay } from "@/lib/api/orders";

let customers: Customer[] = [...mockCustomers];
let orders: Order[] = [...mockOrders];

export async function fetchCustomers(): Promise<Customer[]> {
  await delay(300);
  return [...customers];
}
export async function fetchCustomerById(id: number): Promise<Customer | null> {
  await delay(300);
  const found = customers.find((customer) => customer.id === id);
  return found ?? null;
}

export async function fetchOrdersByCustomer(
  customerId: number,
): Promise<Order[]> {
  await delay(300);
  return orders.filter((order) => order.customerId === customerId);
}
