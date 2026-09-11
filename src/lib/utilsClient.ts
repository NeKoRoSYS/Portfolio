"use client";

import { usePathname } from "next/navigation";

export function validateNavs(path: string) {
  const pathname = usePathname();
  if (path.startsWith("#")) {
    return pathname === "/" ? path : `/${path}`;
  }
  return path === pathname ? "#" : path;
}

export function cycleIndex(currentIndex: number, length: number) {
  return currentIndex >= length - 1 ? 0 : currentIndex + 1;
}
