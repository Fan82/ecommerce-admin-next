import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchOrderById } from "@/lib/api/orders";
import { getOrderTotal } from "@/lib/orderUtils";
import { parseId, ROUTES } from "@/lib/routes";

type OrderDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function OrderDetailPage({
  params,
}: OrderDetailPageProps) {
  const { id } = await params;

  const orderId = parseId(id);
  if (orderId === null) notFound();

  const order = await fetchOrderById(orderId);
  if (!order) notFound();

  return (
    <main>
      <h1>Order #{order.id}</h1>
      <p>Status: {order.status}</p>
      <p>Total: NT$ {getOrderTotal(order)}</p>
      <Link href={ROUTES.orders}>Back to orders</Link>
    </main>
  );
}
