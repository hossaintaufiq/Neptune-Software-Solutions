import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "service" | "feature" | "testimonial" | "gradient";
}

export default function Card({ 
  children, 
  className = "", 
  hover = false,
  variant = "default"
}: CardProps) {
  const baseStyles = "rounded-xl p-6 relative overflow-hidden";
  
  const variants = {
    default: "bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700",
    service: "bg-white border-0 shadow-lg dark:bg-gray-800 group",
    feature: "bg-gradient-to-br from-white to-sky-50 border-0 shadow-xl dark:from-gray-800 dark:to-gray-700",
    testimonial: "bg-white/95 backdrop-blur-md border-0 shadow-xl dark:bg-gray-800/95",
    gradient: "bg-gradient-to-br from-sky-500/10 via-cyan-500/10 to-blue-500/10 border border-sky-200/50 shadow-md dark:border-sky-700/50",
  };

  const hoverStyles = hover 
    ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]" 
    : "";

  const variantStyles = variants[variant] || variants.default;
  
  return (
    <div className={`${baseStyles} ${variantStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
