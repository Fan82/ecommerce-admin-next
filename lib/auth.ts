import { cookies } from "next/headers";

export type Session = {
  userId: string;
  user: string;
  role: "admin" | "staff";
};
export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) return null;

  return {
    userId: token,
    user: token,
    role: token === "admin" ? "admin" : "staff",
  };
}
