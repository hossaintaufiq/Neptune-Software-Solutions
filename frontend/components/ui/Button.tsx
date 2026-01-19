import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30",
    secondary: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-500 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30",
    outline: "border-2 border-sky-500 text-sky-600 hover:bg-sky-50 focus:ring-sky-500 dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-950",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
