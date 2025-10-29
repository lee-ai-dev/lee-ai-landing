"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedCtaButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AnimatedCtaButton({
  children,
  className,
  onClick,
}: AnimatedCtaButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-full border bg-white px-6 font-medium transition-all duration-300 ease-in-out hover:border-purple-500",
        className
      )}
    >
      {/* Container that holds both text versions and translates upward on hover */}
      <span className="flex flex-col transition-transform duration-500 ease-in-out translate-y-3 group-hover:-translate-y-full">
        {/* Default state: dark text */}
        <span className="text-gray-800">{children}</span>

        {/* Hover state: purple text (hidden below, scrolls into view) */}
        <span className="text-purple-600 translate-y-9">{children}</span>
      </span>
    </button>
  );
}
