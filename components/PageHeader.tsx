import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";

type PageHeaderProps = {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
  actions?: ReactNode;
};

export default function PageHeader({
  title,
  description,
  backHref,
  backLabel = "Back",
  actions,
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-heading">
        {backHref && (
          <Link href={backHref} className="back-link">
            <span className="icon-circle">
              <ArrowLeftIcon width={16} height={16} />
            </span>
            {backLabel}
          </Link>
        )}
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>
      {actions && <div className="page-actions">{actions}</div>}
    </header>
  );
}
