"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  animated?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-[var(--text-heading)] text-[var(--bg-primary)] hover:opacity-80 rounded-full",
  secondary:
    "bg-[var(--bg-primary)] text-[var(--text-heading)] border border-[var(--border-medium)] hover:border-[var(--text-muted)] rounded-full",
  ghost:
    "bg-transparent text-[var(--text-heading)] hover:bg-[var(--bg-elevated)] rounded-full",
  outline:
    "bg-transparent text-[var(--accent)] border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white rounded-full",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  animated = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out cursor-pointer select-none";
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {animated && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 -translate-x-full opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100 bg-white/10 blur-xl rounded-full" />
        </span>
      )}
    </span>
  );

  const wrappedClasses = animated ? `${classes} group` : classes;

  if (href) {
    return (
      <Link href={href} className={wrappedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={wrappedClasses}>
      {content}
    </button>
  );
}
