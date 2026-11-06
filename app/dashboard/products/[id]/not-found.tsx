import Link from "next/link";
import EmptyState from "@/components/EmptyState";
import { ArrowLeftIcon, BoxIcon } from "@/components/icons";

export default function ProductNotFound() {
  return (
    <EmptyState
      icon={<BoxIcon width={26} height={26} />}
      title="Product not found"
      description="It may have been removed, or the link is wrong."
      action={
        <Link href="/dashboard/products" className="btn btn-primary">
          <span className="icon-circle">
            <ArrowLeftIcon />
          </span>
          Back to products
        </Link>
      }
    />
  );
}
