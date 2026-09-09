import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  id?: string;
  className?: string;
  children?: ReactNode;
  background?: ReactNode;
  borderVisible?: boolean;
  fade?: boolean;
}

export default function Hero({
  className,
  id,
  borderVisible,
  children,
  background,
  fade,
}: HeroProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[rgba(19,13,28,1)]",
        borderVisible && "border-b border-zinc-800",
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        {background}
      </div>

      {fade && (
        <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-black/0 to-zinc-950" />
      )}

      <div className="relative z-10 flex w-full max-w-6xl flex-col justify-center px-8 py-24">
        <div
          className={cn(
            "pointer-events-auto w-full drop-shadow-lg drop-shadow-black/50",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
