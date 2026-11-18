import { fetchOrders } from "@/lib/api/orders";
import { fetchCustomers } from "@/lib/api/customers";
import { isOrderStatus } from "@/lib/orderUtils";
import { OrderStatusFilter } from "@/components/OrderStatusFilter";
import { OrderTable } from "@/components/OrderTable";

type OrdersPageProps = {
  searchParams: Promise<{ status?: string }>;
};


export default async function OrdersPage({ searchParams }: OrdersPageProps) {
  const { status } = await searchParams;
  const filter = isOrderStatus(status) ? status : undefined;

  const [orders, customers] = await Promise.all([
    fetchOrders(filter),
    fetchCustomers(),
  ]);

  const countText =
    orders.length === 1 ? "1 order" : `${orders.length} orders`;

  return (
    <main>
      <h1>Orders</h1>
      <p>{countText}</p>
      <OrderStatusFilter current={filter} />
      <OrderTable orders={orders} customers={customers} />
    </main>
  );
}
