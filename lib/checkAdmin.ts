import type { Session } from "@/lib/auth";

export function checkAdmin(
  session: Session | null,
): "ok" | "login" | "forbidden" {
  if (session === null) return "login";
  if (session.role === "admin") return "ok";

  return "forbidden";
}
