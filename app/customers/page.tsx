import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/EmptyState";
import { UsersIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Customers",
};

export default function CustomersPage() {
  return (
    <>
      <PageHeader
        title="Customers"
        description="Everyone who has an account in your store"
      />
      <EmptyState
        icon={<UsersIcon width={26} height={26} />}
        title="No customers yet"
        description="Customers will appear here after they sign up."
      />
    </>
  );
}
