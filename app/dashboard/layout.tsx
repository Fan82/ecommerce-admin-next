import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import UserMenu from "@/components/UserMenu";
import { LogoutButton } from "@/components/LogoutButton";
import { DashboardNav } from "@/components/DashboardNav";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession();
    if (!session) redirect("/login");

    return (
        <div>
            <header>
                <UserMenu userName={session.user} />
                <LogoutButton />
                <DashboardNav />
            </header>
            {children}
        </div>
    );
}