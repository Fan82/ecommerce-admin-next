"use client"
import { useState } from "react";

type Props = {
    onSubmit: (email: string, password: string) => Promise<void>;
}


export default function LoginForm({ onSubmit }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");
        try {
            await onSubmit(email, password)
            setStatus("idle")
        } catch (err) {
            setStatus("error")
            setErrorMessage(err instanceof Error ? err.message : "Something went wrong")
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={status === "submitting"} >
                {status === "submitting" ? "Signing in..." : "Sign In"}
            </button>
            {errorMessage && <p role="alert">{errorMessage}</p>}
        </form>
    )
}