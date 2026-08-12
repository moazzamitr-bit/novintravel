import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  eyebrow,
  actionLabel,
  actionHref,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
        <h2 className="display-title text-[26px] text-novin-text sm:text-[32px]">
          {title}
        </h2>
        {description ? (
          <p className="mt-2.5 max-w-xl text-[15px] leading-8 text-novin-text-secondary">
            {description}
          </p>
        ) : null}
      </div>
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-novin-purple transition-colors duration-200 hover:text-novin-orange"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
