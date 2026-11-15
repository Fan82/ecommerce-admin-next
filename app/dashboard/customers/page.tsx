import Link from "next/link";
import { fetchCustomers } from "@/lib/api/customers";
import { ROUTES } from "@/lib/routes";

export async function CustomersPage() {
  const customers = await fetchCustomers();
  return (
    <main>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <Link href={ROUTES.customerDetail(customer.id)}>
              {customer.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
