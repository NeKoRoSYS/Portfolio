import type { ReactNode } from "react";
import Block from "./Block";

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
    <Block className={`relative min-h-svh bg-[rgba(19,13,28,1)]`}>
      {background}
      {fade ? (
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 flex h-full w-full items-center justify-center bg-linear-to-b from-black/0 to-black to-100%"></div>
      ) : null}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div
          className={`pointer-events-auto relative w-full drop-shadow-lg drop-shadow-black/50 sm:px-0 ${className}`}
        >
          {children}
        </div>
      </div>
    </Block>
  );
}
