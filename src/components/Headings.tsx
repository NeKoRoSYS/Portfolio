import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading1({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "font-bulletin text-8xl leading-none tracking-tight text-foreground lg:text-[8.65rem]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        "font-cosmic text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className }: HeadingProps) {
  return (
    <h3
      className={cn(
        "text-2xl leading-snug font-semibold tracking-wide text-foreground sm:text-3xl lg:text-4xl",
        className,
      )}
    >
      {children}
    </h3>
  );
}
