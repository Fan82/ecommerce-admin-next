// app/dashboard/customers/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchCustomerById } from "@/lib/api/customers";
import { fetchOrdersByCustomer } from "@/lib/api/orders";
import { parseId, ROUTES } from "@/lib/routes";

type CustomerDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CustomerDetailPage({
  params,
}: CustomerDetailPageProps) {
  const { id } = await params;

  const customerId = parseId(id);
  if (customerId === null) notFound();

  const customer = await fetchCustomerById(customerId);
  if (!customer) notFound();

  const orders = await fetchOrdersByCustomer(customer.id);

  return (
    <main>
      <h1>{customer.name}</h1>
      <p>{customer.email}</p>

      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <Link href={ROUTES.orderDetail(order.id)}>Order #{order.id}</Link>
            </li>
          ))}
        </ul>
      )}

      <Link href={ROUTES.customers}>Back to customers</Link>
    </main>
  );
}
