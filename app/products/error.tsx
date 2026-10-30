"use client";
import { useEffect } from "react";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <div>
      <p>Something went wrong while loading products.</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
