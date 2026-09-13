import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const colorMap = {
  red: "border-red-400 text-grey-100 bg-red-500/25",
  blue: "border-blue-400 text-grey-100 bg-blue-500/25",
  green: "border-green-400 text-grey-100 bg-green-500/25",
  yellow: "border-yellow-400 text-yellow-100 bg-yellow-500/25",
  gray: "border-zinc-400 text-grey-100 bg-zinc-500/25",
};

type ChipColor = keyof typeof colorMap;

interface ChipSchema {
  children?: ReactNode;
  className?: string;
  colorOverride?: ChipColor;
}

export function PillChip({
  children,
  className,
  colorOverride = "gray",
}: ChipSchema) {
  const colorClass = colorMap[colorOverride] || colorMap.gray;
  return (
    <div
      className={cn(
        `flex w-fit items-center justify-center gap-2 rounded-full border px-2 pr-3`,
        colorClass,
        className,
      )}
    >
      <div className={cn(`h-2 w-2 rounded-full border`, colorClass)}></div>
      {children}
    </div>
  );
}

export function RectChip({
  children,
  className,
  colorOverride = "gray",
}: ChipSchema) {
  const colorClass = colorMap[colorOverride] || colorMap.gray;
  return (
    <div
      className={`flex w-fit justify-center gap-2 rounded-sm border px-2 ${colorClass} ${className} items-center`}
    >
      {children}
    </div>
  );
}
