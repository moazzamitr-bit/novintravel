import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-novin-orange text-white shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_8px_20px_rgba(232,78,24,0.28)] hover:bg-novin-orange-hover hover:shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_10px_24px_rgba(232,78,24,0.34)]",
  secondary:
    "bg-novin-purple text-white shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_8px_20px_rgba(79,47,124,0.25)] hover:bg-novin-purple-dark",
  outline:
    "bg-novin-surface text-novin-purple border border-novin-border hover:border-[color-mix(in_srgb,var(--color-novin-purple)_28%,white)] hover:bg-novin-bg-secondary",
  ghost: "bg-transparent text-novin-purple hover:bg-novin-bg-secondary",
  white:
    "bg-white text-novin-purple border border-white/85 shadow-soft hover:bg-white/95",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-[13px] rounded-[11px]",
  md: "h-11 px-5 text-[14.5px] rounded-[12px]",
  lg: "h-[52px] px-8 text-[15px] rounded-[14px] min-w-[180px]",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,box-shadow,transform,border-color,color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-novin-purple/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:active:scale-100";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      disabled,
      href,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    const classes = cn(baseClass, variants[variant], sizes[size], className);

    if (href && !disabled) {
      return (
        <Link
          href={href}
          className={classes}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
