import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import UserMenu from "@/components/UserMenu";

export default async function DashboardPage() {
    const session = await getSession();
    if (!session) redirect("/login");
    return (
        <>
            <h1>Dashboard</h1>
            <p>Welcome {session.user}</p>
            <UserMenu userName={session.user} />
        </>
    )

}