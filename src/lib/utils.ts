import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cycleIndex(currentIndex: number, length: number) {
  return currentIndex >= length - 1 ? 0 : currentIndex + 1;
}
