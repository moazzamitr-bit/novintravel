import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-novin-orange text-white hover:bg-novin-orange-hover shadow-soft hover:-translate-y-0.5 hover:shadow-card",
  secondary:
    "bg-novin-purple text-white hover:bg-novin-purple-dark shadow-soft hover:-translate-y-0.5",
  outline:
    "bg-white text-novin-purple border border-[color-mix(in_srgb,var(--color-novin-purple)_28%,white)] hover:bg-novin-bg-secondary",
  ghost: "bg-transparent text-novin-purple hover:bg-novin-bg-secondary",
  white:
    "bg-white text-novin-purple border border-white/80 hover:bg-white/95 shadow-soft",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm rounded-[10px]",
  md: "h-11 px-5 text-[15px] rounded-[11px]",
  lg: "h-[52px] px-8 text-base rounded-xl min-w-[180px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-novin-purple/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
