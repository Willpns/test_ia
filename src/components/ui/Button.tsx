"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 hover:-translate-y-0.5",
    ghost:
      "text-ink-muted hover:text-blue-600 hover:bg-blue-50",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
