import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ className, interactive, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[18px] border border-novin-border/90 bg-novin-surface shadow-[0_1px_0_rgba(26,20,36,0.03)]",
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-[3px] hover:border-novin-border hover:shadow-card",
        className,
      )}
      {...props}
    />
  );
}
