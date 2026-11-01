import type { ReactNode } from "react";
import Link from "next/link";
import SidebarNav from "@/components/SidebarNav";
import styles from "./AppShell.module.css";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <div className={styles.sphere} aria-hidden="true" />
      <div className={styles.ring} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.frame}>
        <aside className={styles.sidebar}>
          <Link href="/" className={styles.brand}>
            <span className={styles.logo} aria-hidden="true">
              <span className={styles.logoDot} />
            </span>
            Ecommerce Admin
          </Link>
          <SidebarNav variant="sidebar" />
        </aside>

        <main className={styles.main}>{children}</main>
      </div>

      <SidebarNav variant="bottom" />
    </div>
  );
}
