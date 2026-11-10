"use client"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/components/LoginForm";

export function LoginClient() {
    const router = useRouter()

    async function handleLogin(email: string, password: string): Promise<void> {
        const res = await fetch(`/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })
        if (!res.ok) {
            const data = await res.json()
            throw new Error(data.message ?? "Login failed")
        }
        router.push("/dashboard");
        router.refresh();
    }
    return <LoginForm onSubmit={handleLogin} />
}