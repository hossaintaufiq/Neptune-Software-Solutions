import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const variants = {
    primary: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300",
    secondary: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
    success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
    outline: "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
