"use client"
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { getUserMessage } from "@/lib/errors";
import ErrorNotice from "@/components/ErrorNotice";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true)
        setErrorMessage(null);
        try {
            await login(email, password)
            router.push("/dashboard")
        } catch (err) {
            setErrorMessage(getUserMessage(err))
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <ErrorNotice message={errorMessage} />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" disabled={isSubmitting} >
                {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
        </form>
    )
}