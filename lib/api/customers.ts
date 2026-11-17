import type { Customer } from "@/types/customer";
import { mockCustomers } from "@/lib/mockCustomers";
import { findById } from "@/lib/findById";
import { delay } from "./delay";

const customers: Customer[] = [...mockCustomers];

export async function fetchCustomers(): Promise<Customer[]> {
  await delay(300);
  return [...customers];
}

export async function fetchCustomerById(id: number): Promise<Customer | null> {
  await delay(300);
  return findById(customers, id);
}
