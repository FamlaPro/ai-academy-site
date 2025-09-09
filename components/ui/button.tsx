import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, variant="default", size="md", ...props }: ButtonProps){
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-6 py-3 text-lg"} as const;
  const variants = {
    default: "bg-[var(--famla-green)] text-white hover:bg-[var(--famla-green-hover)] focus:ring-[var(--famla-green)]",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-50",
    ghost: "text-gray-800 hover:bg-gray-100"
  } as const;
  return <button className={clsx(base, sizes[size], variants[variant], className)} {...props} />;
}
