import Link from "next/link";

export function PermissionDenied() {
  return (
    <main>
      <h1>Permission denied</h1>
      <p>Your account does not have access to this page.</p>
      <Link href="/dashboard">Back to dashboard</Link>
    </main>
  );
}
