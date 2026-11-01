import Link from "next/link";
import EmptyState from "@/components/EmptyState";
import { ArrowLeftIcon, SearchIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <EmptyState
      icon={<SearchIcon width={26} height={26} />}
      title="Page not found"
      description="The page you're looking for doesn't exist."
      action={
        <Link href="/products" className="btn btn-primary">
          <span className="icon-circle">
            <ArrowLeftIcon />
          </span>
          Back to products
        </Link>
      }
    />
  );
}
