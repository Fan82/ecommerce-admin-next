"use client";
import { useEffect } from "react";
import EmptyState from "@/components/EmptyState";
import { BoxIcon } from "@/components/icons";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState
      icon={<BoxIcon width={26} height={26} />}
      title="Something went wrong while loading products."
      description={error.message}
      action={
        <button type="button" className="btn btn-primary" onClick={() => reset()}>
          <span className="icon-circle">↻</span>
          Retry
        </button>
      }
    />
  );
}
