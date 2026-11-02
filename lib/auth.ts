import { cookies } from "next/headers"

export type Session = { user: string }

export async function getSession(): Promise<Session | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value
    return token ? { user: token } : null
}