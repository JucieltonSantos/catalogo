import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`cursor-pointer bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
