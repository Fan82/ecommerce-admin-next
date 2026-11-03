import { NextResponse } from "next/server";
import { getAdminPassword } from "@/lib/config";

export async function POST(request: Request) {
    const { email, password } = await request.json()

    if (email === "admin@example.com" && password === getAdminPassword()) {
        const res = NextResponse.json({ ok: true })
        res.cookies.set("session", "admin", { httpOnly: true, path: "/" });
        return res;
    }
    return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
}