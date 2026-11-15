import Link from "next/link";
import { fetchOrders } from "@/lib/api/orders";
import { ROUTES } from "@/lib/routes";

export default async function OrdersPage() {
  const orders = await fetchOrders();

  return (
    <main>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link href={ROUTES.orderDetail(order.id)}>Order #{order.id}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
