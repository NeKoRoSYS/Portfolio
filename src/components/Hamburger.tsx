"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

interface HamburgerProps {
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Hamburger({
  className,
  isOpen,
  onToggle,
}: HamburgerProps) {
  return (
    <>
      <button
        className={cn(
          `flex h-8 w-8 cursor-pointer items-center justify-center select-none`,
          className,
        )}
        onClick={onToggle}
      >
        <p>{isOpen ? "Yes" : "No"}</p>
      </button>
    </>
  );
}

interface HamburgerMenuProps {
  className?: string;
  fields?: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function HamburgerMenu({
  className,
  fields,
  isOpen,
  onToggle,
}: HamburgerMenuProps) {
  return (
    <>
      <div
        className={cn(
          "visible fixed inset-0 z-50 bg-black/25 transition-opacity duration-300 ease-in-out sm:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={onToggle}
      />

      <div
        className={cn(
          "visible fixed top-15 right-0 left-0 z-99 h-auto border-b border-zinc-700 bg-black/75 backdrop-blur-md transition-all duration-300 ease-in-out sm:hidden",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-100 opacity-0",
        )}
      >
        {fields}
      </div>
    </>
  );
}
