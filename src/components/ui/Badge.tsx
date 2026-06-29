"use client";
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "light" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "light", className = "" }: BadgeProps) {
  const variants = {
    blue:    "bg-blue-600 text-white",
    light:   "bg-blue-100 text-blue-800",
    outline: "border border-blue-200 text-blue-700 bg-white",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
