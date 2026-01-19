import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const baseStyles = "rounded-xl bg-white border border-gray-200 p-6 shadow-sm";
  const hoverStyles = hover ? "transition-all duration-200 hover:shadow-lg hover:border-sky-200 hover:-translate-y-1" : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
