import type { ReactNode } from "react";
import Block from "./Block";

interface HeroProps {
    className?: string;
    children?: ReactNode;
    background?: ReactNode;
    fade?: boolean;
}

export default function Hero({ className, children, background, fade }: HeroProps) {
    return (
      <Block className={`relative bg-[rgba(19,13,28,1)] min-h-svh`}>
        { background }
        { fade ? <div className="pointer-events-none z-10 absolute left-0 bottom-0 w-full h-full bg-linear-to-b from-black/0 to-100% to-black/75 flex items-center justify-center">
        </div> : null }
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <div className={`relative w-full sm:px-0 pointer-events-auto drop-shadow-black/50 drop-shadow-lg ${className}`}>
                {children}
            </div>
        </div>
      </Block>
    )
}