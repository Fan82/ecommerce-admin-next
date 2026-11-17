import NavLink from "@/components/NavLink";
import { BoxIcon, HomeIcon, ReceiptIcon, UsersIcon } from "@/components/icons";
import styles from "./AppShell.module.css";
import { ROUTES } from "@/lib/routes";

const navItems = [
  { href: "/", label: "Dashboard", icon: HomeIcon, exact: true },
  { href: "/dashboard/products", label: "Products", icon: BoxIcon },
  { href: ROUTES.orders, label: "Orders", icon: ReceiptIcon },
  { href: ROUTES.customers, label: "Customers", icon: UsersIcon },
];

type SidebarNavProps = {
  variant: "sidebar" | "bottom";
};

export default function SidebarNav({ variant }: SidebarNavProps) {
  return (
    <nav
      aria-label="Main"
      className={variant === "sidebar" ? styles.sideNav : styles.bottomNav}
    >
      {navItems.map(({ href, label, icon: Icon, exact }) => (
        <NavLink
          key={href}
          href={href}
          label={label}
          exact={exact}
          icon={<Icon width={20} height={20} />}
          className={styles.navLink}
          labelClassName={styles.navLabel}
        />
      ))}
    </nav>
  );
}
