import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/EmptyState";
import { ReceiptIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <>
      <PageHeader
        title="Orders"
        description="Track payment and shipping for every order"
      />
      <EmptyState
        icon={<ReceiptIcon width={26} height={26} />}
        title="No orders yet"
        description="Orders will appear here once customers start checking out."
      />
    </>
  );
}
