import type { ReactNode } from "react";
import Block from "./Block";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
  children?: ReactNode;
  background?: ReactNode;
  fade?: boolean;
}

export default function Hero({
  className,
  children,
  background,
  fade,
}: HeroProps) {
  return (
    <Block className={cn("relative min-h-svh bg-[rgba(19,13,28,1)]")}>
      <div className="pointer-events-none absolute inset-0 z-0">
        {background}
      </div>
      {fade && (
        <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-black/0 to-black" />
      )}

      <div className="pointer-events-none relative z-10 flex min-h-full w-full flex-col justify-center py-24">
        <div
          className={cn(
            "pointer-events-auto w-full drop-shadow-lg drop-shadow-black/50",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </Block>
  );
}
