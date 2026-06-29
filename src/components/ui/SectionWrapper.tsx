"use client";
import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "soft" | "muted";
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  background = "white",
}: SectionWrapperProps) {
  const bg = {
    white: "bg-white",
    soft:  "bg-[#F8FAFC]",
    muted: "bg-[#F1F5F9]",
  };

  return (
    <section
      id={id}
      className={`relative py-24 px-6 ${bg[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
